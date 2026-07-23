import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "Khushi1310-nayak";
    // We intentionally do not use NEXT_PUBLIC_ here so the token never leaks to the browser
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // We use the search API to find all issues and PRs by the user
    const res = await fetch(`https://api.github.com/search/issues?q=author:${username}&per_page=100`, {
      headers,
      next: { revalidate: 60 } // Cache the response for 60 seconds
    });

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers,
      next: { revalidate: 60 }
    });

    if (!res.ok || !reposRes.ok) {
      return NextResponse.json({ error: "Failed to fetch from GitHub API", status: res.status }, { status: 500 });
    }

    const data = await res.json();
    const reposData = await reposRes.json();
    const items = data.items || [];

    let totalStars = 0;
    if (Array.isArray(reposData)) {
      interface GithubRepoItem {
        stargazers_count?: number;
      }
      reposData.forEach((repo: GithubRepoItem) => {
        totalStars += repo.stargazers_count || 0;
      });
    }

    interface GithubSearchItem {
      pull_request?: {
        merged_at: string | null;
      };
      state: string;
    }

    let issues = 0;
    let openPRs = 0;
    let mergedPRs = 0;

    items.forEach((item: GithubSearchItem) => {
      if (item.pull_request) {
        if (item.pull_request.merged_at) {
          mergedPRs++;
        } else if (item.state === "open") {
          openPRs++;
        }
      } else {
        issues++;
      }
    });

    return NextResponse.json({
      issues,
      openPRs,
      mergedPRs,
      totalContributions: data.total_count || items.length,
      totalStars,
    });

  } catch (error) {
    console.error("GitHub API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
