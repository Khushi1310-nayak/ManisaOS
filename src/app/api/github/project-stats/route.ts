import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const githubUrl = searchParams.get("url");

    if (!githubUrl || !githubUrl.includes("github.com/")) {
      return NextResponse.json(
        { error: "Invalid GitHub URL" },
        { status: 400 }
      );
    }

    // Extract owner and repo from URL (e.g., https://github.com/owner/repo)
    const urlParts = githubUrl.split("github.com/")[1].split("/");
    const owner = urlParts[0];
    const repo = urlParts[1];

    if (!owner || !repo) {
      return NextResponse.json(
        { error: "Invalid GitHub URL structure" },
        { status: 400 }
      );
    }

    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (token) {
      headers.Authorization = `token ${token}`;
    }

    // 1. Fetch Commits (per_page=1 to get the Link header which tells us the total pages/commits)
    const commitsRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
      { headers, next: { revalidate: 300 } }
    );

    let totalCommits = 0;
    if (commitsRes.ok) {
      const linkHeader = commitsRes.headers.get("Link");
      if (linkHeader) {
        // Extract the last page number from the Link header
        // Example: <https://api.github.com/repositories/123/commits?per_page=1&page=1024>; rel="last"
        const match = linkHeader.match(/page=(\d+)>; rel="last"/);
        if (match && match[1]) {
          totalCommits = parseInt(match[1], 10);
        }
      } else {
        // If there is no Link header, there is only 1 page (or 0 commits if empty)
        const commits = await commitsRes.json();
        totalCommits = Array.isArray(commits) ? commits.length : 0;
      }
    }

    // 2. Fetch Deployments
    const deploymentsRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/deployments`,
      { headers, next: { revalidate: 300 } }
    );

    let totalDeployments = 0;

    if (deploymentsRes.ok) {
      const deployments = await deploymentsRes.json();
      totalDeployments = Array.isArray(deployments) ? deployments.length : 0;
    }

    return NextResponse.json({
      commits: totalCommits,
      deployments: totalDeployments,
    });
  } catch (error) {
    console.error("Project stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch project stats" },
      { status: 500 }
    );
  }
}
