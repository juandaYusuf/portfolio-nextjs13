import HomeScreen1 from './components/homeScreen1'
import HomeScreen0 from './components/homeScreen0'
import HomeScreen2 from './components/homeScreen2'
import HomeScreen3 from './components/homeScreen3'
import HomeScreen4 from './components/homeScreen4'
import { GithubRepositories } from './lib/apiRequests/githubRepositories'

export default async function Home() {

  const repositoryDatas = await GithubRepositories().then(res => res).catch(() => [])
  

  return (
    <>
      <HomeScreen0 />
      <HomeScreen1 />
      <HomeScreen2 />
      <HomeScreen3 />
      <HomeScreen4  repoDatas={repositoryDatas}/>
    </>
  )
}
