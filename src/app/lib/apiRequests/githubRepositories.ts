import { IRespositories } from "../interfaces/githubDatas"

type TRes = Partial<IRespositories>


export const GithubRepositories = async () : Promise<TRes[]> => {
  
  const apiURL = `${process.env.API_BASEURL}/users/juandaYusuf/repos`
  const headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": "Bearer " + process.env.GITHUB_TOKEN,
    "X-GitHub-Api-Version" : "2022-11-28" 
  }
  
  try {
    const req = await fetch(apiURL, {headers, cache: 'no-store'})

    if (!req.ok) {
      throw new Error(`Error: ${req.status}`)
    }

    const res = await req.json()
    return res

  }catch (err) {
    throw err
  }
}