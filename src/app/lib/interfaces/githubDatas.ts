
export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface IProfile extends IUser {
  name: string
  company: string
  email: string
  bio: string
}

export interface TGitHubDatas {
  profile: IProfile
  followers: IUser[]
  followings: IUser[]
}

export interface IRespositories {
  name: string
  html_url: string
  language: string
  stargazers_count: number
  visibility: string
  created_at: string
  updated_at: string
}
