import { IUser } from "../interfaces/githubDatas"



export const getGitHubFollowers = async (): Promise<IUser[]> => {
  try {
    const req = await fetch(`${process.env.API_BASEURL}/users/juandaYusuf/followers`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
      },
      cache: 'no-store'
    })

    if (!req.ok) {
      throw new Error(`Error: ${req.status}`)
    }
    
    const res = await req.json()
    return res

  } catch (err) {
    throw err
  }
}

