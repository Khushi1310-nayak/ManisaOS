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
    let prItems: any[] = [];
    if (prsRes.ok) {
      const data = await prsRes.json();
      totalPrs = data.total_count || 0;
      prItems = data.items || [];
    }
    if (mergedPrsRes.ok) mergedPrs = (await mergedPrsRes.json()).total_count || 0;

    // Fetch open and closed issues
    const openIssuesRes = await fetch(`https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:issue+state:open`, fetchOpts);
    const closedIssuesRes = await fetch(`https://api.github.com/search/issues?q=repo:${owner}/${repo}+type:issue+state:closed`, fetchOpts);
    
    let openIssues = 0;
    let closedIssues = 0;
    let issueItems: any[] = [];
    
    if (openIssuesRes.ok) {
      const data = await openIssuesRes.json();
      openIssues = data.total_count || 0;
      issueItems = [...issueItems, ...(data.items || [])];
    }
    if (closedIssuesRes.ok) {
      const data = await closedIssuesRes.json();
      closedIssues = data.total_count || 0;
      issueItems = [...issueItems, ...(data.items || [])];
    }

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
        merged: mergedPrs,
        items: prItems.map(pr => ({
          title: pr.title,
          html_url: pr.html_url,
          state: pr.pull_request?.merged_at ? 'merged' : pr.state,
          user: { login: pr.user?.login, avatar_url: pr.user?.avatar_url },
          created_at: pr.created_at
        }))
      },
      issues: {
        open: openIssues,
        closed: closedIssues,
        items: issueItems.map(issue => ({
          title: issue.title,
          html_url: issue.html_url,
          state: issue.state,
          user: { login: issue.user?.login, avatar_url: issue.user?.avatar_url },
          created_at: issue.created_at
        }))
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
