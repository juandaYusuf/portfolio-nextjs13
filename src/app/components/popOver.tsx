import { Chip, Popover, PopoverContent, PopoverTrigger, ScrollShadow, Tab, Tabs } from "@nextui-org/react"
import Image from "next/image"
import CstmButton from "./cstmButton"
import { GithubIcon } from "../svg/icons"
import { useState } from "react"
import { useTheme } from "next-themes"
import { TGitHubDatas } from "../lib/interfaces/githubDatas"
import Follow from "./follow"




type TProps = {
  ghdata: TGitHubDatas
  children: React.ReactNode
}


export default function CstmPopOver({ ghdata, children }: TProps) {

  const [openContainer, setOpenContainer] = useState(false)
  const { theme } = useTheme()
  const totalFollowers = ghdata.followers.length
  const totalFollowings = ghdata.followings.length


  return (
    <Popover
      placement="bottom"
      className="md:max-w-[360px] mx-2 md:mx-0"
      shouldBlockScroll
      onClose={() => setOpenContainer(false)}
    >
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent className={`${theme === "dark" ? "bg-[#28282870] backdrop-blur-lg" : "bg-[#ffffff70] backdrop-blur-lg"}`}>
        <div className="px-1 py-2 overflow-hidden ">
          {
            Object.keys(ghdata.profile).length
              ?
              <>
                <div className="flex gap-2 justify-center items-center text-small font-bold mb-3">
                  <GithubIcon size={24}/>
                  <span>My GitHub Account</span>
                </div>
                <div className="flex gap-2 w-full">
                  <div className="border-2 border-slate-400 rounded-full p-[2px] h-[40px] w-[40px]">
                    <Image
                      className="bg-slate-100 rounded-full"
                      src={ghdata.profile.avatar_url}
                      height={40}
                      width={40}
                      alt="profile" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">{ghdata.profile.name}</span>
                    <span className="text-tiny text-slate-400 lowercase">{ghdata.profile.email}</span>
                  </div>
                  <a href={ghdata.profile.html_url} className={theme === "dark" ? "text-black" : "text-white"} target="_blank">
                    <CstmButton className="ms-2" name={"Profile"} />
                  </a>
                </div>
                <p className="text-slate-400 tracking-wider mt-2">{`${ghdata.profile.bio} ✨🎉`}</p>
              </>
              :
              <p className="text-slate-400 text-center font-semibold">❌ Sorry. Something went wrong 😢</p>
          }

          <div className="flex mt-2 gap-4 items-center">
            <Chip className="tracking-wider shadow-sm"><span className="font-bold">{totalFollowers}</span> {" Followers "}</Chip>
            <Chip className="tracking-wider shadow-sm"><span className="font-bold">{totalFollowings}</span> {" Following "}</Chip>
            <span
              className="tracking-wider select-none hover:text-blue-500 cursor-pointer transition-all duration-300 w-full text-center"
              onClick={() => setOpenContainer(prev => !prev)}>{openContainer ? "Hide" : "More"} </span>
          </div>
          <div className={`w-full mt-3 rounded-xl mb-2 ease-in duration-300 ${openContainer ? "h-72" : "h-[1px]"}`}>
            <div className={`py-1 pt-4`}>
              <div className="w-full flex align-center flex-col items-center">
                <Tabs size="sm" aria-label="Tabs follow">
                  <Tab
                    key="followers"
                    className="w-full"
                    title="Followers" >
                    <ScrollShadow className="w-full h-[14rem]" hideScrollBar>
                      {ghdata.followers.map((item, index) => <Follow key={index} props={item} animate={`ease-in duration-200 ${openContainer ? 'opacity-100' : 'opacity-0'}`} />)}
                    </ScrollShadow>
                  </Tab>
                  <Tab
                    key="followings"
                    className="w-full"
                    title="Followings" >
                    <ScrollShadow className="w-full h-[14rem]" hideScrollBar>
                      {ghdata.followings.map((item, index) => <Follow key={index} props={item} animate={`ease-in duration-200 ${openContainer ? 'opacity-100' : 'opacity-0'}`} />)}
                    </ScrollShadow>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}


