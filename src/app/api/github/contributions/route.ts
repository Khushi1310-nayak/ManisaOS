import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "Khushi1310-nayak";
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Search for PRs authored by the user in repositories they DO NOT own
    const query = `author:${username} type:pr -user:${username}`;
    const res = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=100`, {
      headers,
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from GitHub API" }, { status: res.status });
    }

    const data = await res.json();
    const items = data.items || [];

    // Map to extract unique repositories and their contribution stats
    const reposMap = new Map<string, { repoName: string, owner: string, htmlUrl: string, prs: number, merged: number, open: number, latestPrHtmlUrl: string, latestPrTitle: string }>();

    interface GithubSearchItem {
      repository_url: string;
      html_url: string;
      title: string;
      state: string;
      pull_request?: {
        merged_at: string | null;
      };
    }

    items.forEach((item: GithubSearchItem) => {
      const repoUrl = item.repository_url;
      // repository_url is like "https://api.github.com/repos/owner/repo"
      const repoNameParts = repoUrl.split("/");
      const repoName = `${repoNameParts[repoNameParts.length - 2]}/${repoNameParts[repoNameParts.length - 1]}`;

      if (!reposMap.has(repoName)) {
        reposMap.set(repoName, {
          repoName,
          owner: repoNameParts[repoNameParts.length - 2],
          htmlUrl: `https://github.com/${repoName}`,
          prs: 0,
          merged: 0,
          open: 0,
          latestPrHtmlUrl: item.html_url,
          latestPrTitle: item.title,
        });
      }

      const repoStats = reposMap.get(repoName)!;
      repoStats.prs += 1;
      
      if (item.pull_request?.merged_at) {
        repoStats.merged += 1;
      } else if (item.state === "open") {
        repoStats.open += 1;
      }
    });

    const contributions = Array.from(reposMap.values());

    return NextResponse.json({
      contributions,
    });

  } catch (error) {
    console.error("GitHub Contributions API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
