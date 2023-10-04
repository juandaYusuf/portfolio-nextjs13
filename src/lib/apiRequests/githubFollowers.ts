type TGithubFollowers = [{
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean

}]

export const getGitHubFollowers = async () : Promise<TGithubFollowers> => {
  const req = await fetch(`${process.env.API_BASEURL}/users/juandaYusuf/followers`, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    },
    cache: 'no-store'
  })

  const res = await req.json()
  return res as TGithubFollowers
}