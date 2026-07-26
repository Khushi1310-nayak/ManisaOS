import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get("owner");
    const repo = searchParams.get("repo");

    if (!owner || !repo) {
      return NextResponse.json({ error: "Missing owner or repo" }, { status: 400 });
    }

    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const fetchOpts = { headers, next: { revalidate: 3600 } };

    // Fetch contributors
    const contributorsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`, fetchOpts);
    let contributors = [];
    if (contributorsRes.ok) {
      const data = await contributorsRes.json();
      contributors = data.map((c: { login: string; avatar_url: string; contributions: number; html_url: string }) => ({
        login: c.login,
        avatar_url: c.avatar_url,
        contributions: c.contributions,
        html_url: c.html_url
      })).filter((c: { login: string; avatar_url: string; contributions: number; html_url: string }) => !c.login.includes('[bot]')); // Exclude bots
    }

    // Fetch total and merged PRs
    const prsRes = await fetch(`https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:pr`, fetchOpts);
    const mergedPrsRes = await fetch(`https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:pr+is:merged`, fetchOpts);
    
    let totalPrs = 0;
    let mergedPrs = 0;
    if (prsRes.ok) totalPrs = (await prsRes.json()).total_count || 0;
    if (mergedPrsRes.ok) mergedPrs = (await mergedPrsRes.json()).total_count || 0;

    // Fetch open and closed issues
    const openIssuesRes = await fetch(`https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:issue+state:open`, fetchOpts);
    const closedIssuesRes = await fetch(`https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:issue+state:closed`, fetchOpts);
    
    let openIssues = 0;
    let closedIssues = 0;
    if (openIssuesRes.ok) openIssues = (await openIssuesRes.json()).total_count || 0;
    if (closedIssuesRes.ok) closedIssues = (await closedIssuesRes.json()).total_count || 0;

    // Fetch CI/CD runs
    const runsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/runs?per_page=100`, fetchOpts);
    let testsPassed = 0;
    let testsFailed = 0;
    if (runsRes.ok) {
      const data = await runsRes.json();
      if (data.workflow_runs) {
        data.workflow_runs.forEach((run: { conclusion: string | null }) => {
          if (run.conclusion === 'success') testsPassed++;
          if (run.conclusion === 'failure') testsFailed++;
        });
      }
    }

    return NextResponse.json({
      contributors,
      prs: {
        total: totalPrs,
        merged: mergedPrs
      },
      issues: {
        open: openIssues,
        closed: closedIssues
      },
      ci: {
        passed: testsPassed,
        failed: testsFailed
      }
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch admin stats" },
      { status: 500 }
    );
  }
}
