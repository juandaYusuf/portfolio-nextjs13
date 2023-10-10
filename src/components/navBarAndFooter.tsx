import Nav from "./nav"
import Footer from "@/components/footer"
import { getGitHubFollowers } from "@/lib/apiRequests/githubFollowers"
import { getGitHubFollowings } from "@/lib/apiRequests/githubFolowings"
import { getGitHubProfile } from '@/lib/apiRequests/githubProfile'
import { TProfile } from "@/lib/interfaces/githubDatas"

export default async function HeaderAndFooter({ children }: { children: React.ReactNode }) {

  const profile = await getGitHubProfile().then(res => res).catch(() => {return {} as TProfile} )
  const follower = await getGitHubFollowers().then(res => res).catch(() => [])
  const following = await getGitHubFollowings().then(res => res).catch(() => [])

  return (
    <>
      <Nav
        profile={profile}
        followers={follower}
        followings={following}
      />
      {children}
      <Footer />
    </>
  )
}

