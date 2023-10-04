import Nav from "./nav"
import Footer from "@/components/footer"
import { getGitHubFollowers } from "@/lib/apiRequests/githubFollowers"
import getGitHubFollowings from "@/lib/apiRequests/githubFolowings"
import { getGitHubProfile } from '@/lib/apiRequests/githubProfile'




export default async function HeaderAndFooter({ children }: { children: React.ReactNode }) {

  const profile = await getGitHubProfile()
  const follower = await getGitHubFollowers()
  const following = await getGitHubFollowings()

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

