import { NextResponse } from 'next/server'

const USERNAME = 'sys-andika'

export async function GET() {
  try {
    // Fetch user data & repos secara paralel
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        next: { revalidate: 3600 }, // cache 1 jam
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        next: { revalidate: 3600 },
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, {
        next: { revalidate: 3600 },
      }),
    ])

    const user = await userRes.json()
    const repos = await reposRes.json()
    const contributions = await contribRes.json()

    // Hitung total stars dari semua repo
    const totalStars = Array.isArray(repos)
      ? repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
      : 0

    return NextResponse.json({
      totalRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      totalStars,
      totalContributions: contributions?.total?.lastYear ?? 0,
      contributionDays: contributions?.contributions ?? [],
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json(
      { totalRepos: 0, followers: 0, totalStars: 0, totalContributions: 0, contributionDays: [] },
      { status: 500 }
    )
  }
}
