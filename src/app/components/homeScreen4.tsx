'use client'

import { useTheme } from "next-themes";
import { IRespositories } from "../lib/interfaces/githubDatas";
import GHRepos from "./ghRepo";
import { useRef, useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import FavMusic from "./favMusic";
import Hobbies from "./hobbies";


type TMenus = {
  title: string
  component: React.ReactNode
}


export default function HomeScreen4({ repoDatas }: { repoDatas: Partial<IRespositories>[] }) {
  const { theme } = useTheme()
  const [showMenu, setShowMenu] = useState<number>(0)
  const repoRef = useRef<HTMLDivElement | null>(null)

  const menus: TMenus[] = [
    {
      title: "GitHub Repositories",
      component: <GHRepos repoDatas={repoDatas} />
    },
    {
      title: "Favorite Music",
      component: <p className="animate-slide-left bg-amber-200 h-full">Music</p>
    },
    {
      title: "My Hobbies",
      component: <p className="animate-slide-left bg-red-200 h-full">Hobbies</p>
    },
  ]

  const showElementByScroll = (value: number, isNextMenu: boolean) => {
    if (repoRef.current) {
      repoRef.current.scrollBy({
        left: value,
        behavior: 'smooth'
      })
    }

    if(isNextMenu){
      setShowMenu(prev => prev >= 2 ? 2 : prev + 1)
    }else{
      setShowMenu(prev => prev <= 0 ? 0 : prev - 1)
    }
  }


  return (
    <div className="h-screen flex flex-col items-center pt-20 ">
      <p className="text-4xl md:text-5xl font-bold mb-2">Others</p>
      <div className="flex p-4 w-full h-full md:max-w-[60%] justify-center">
        <div className={`${theme === 'dark' ? 'border border-gray-700' : 'border'} w-full h-[90%] md:h-[80%] relative rounded-xl overflow-hidden shadow-xl bg-secondary`}>
          <div className={`${theme === 'dark' ? 'border-b border-gray-600' : 'border-b'} h-[30px] absolute z-10 min-w-full flex items-center justify-between px-2 bg-danger/80 backdrop-blur-xl shadow-md rounded-t-xl`}>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full shadow-sm bg-red-500" />
              <div className="h-3 w-3 rounded-full shadow-sm bg-green-500" />
              <div className="h-3 w-3 rounded-full shadow-sm bg-yellow-500" />
            </div>
            <div className="flex w-full justify-center">
              <small className={`${theme === 'dark' ? 'text-slate-300 bg-gray-500/60 border border-slate-500' : 'text-slate-500 bg-gray-100/60 border border-slate-300'} text-center  w-full mx-2 md:w-[40%] rounded-md`}>{menus[showMenu].title}</small>
              <div
                onClick={() => showElementByScroll(-window.innerWidth / 2, false)}
                className={`${theme === 'dark' ? 'text-slate-300 bg-gray-500/60 border border-slate-500' : 'text-slate-500 bg-gray-100/60 border border-slate-300'} cursor-pointer px-1 flex justify-center items-center rounded-md mr-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
              </div>
              <div
                onClick={() => showElementByScroll(window.innerWidth / 2, true)}
                className={`${theme === 'dark' ? 'text-slate-300 bg-gray-500/60 border border-slate-500' : 'text-slate-500 bg-gray-100/60 border border-slate-300'} cursor-pointer px-1 flex justify-center items-center rounded-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
            </div>
            <div className="w-[39px] rounded-full shadow-sm" />
          </div>
          <ScrollShadow ref={repoRef} isEnabled={false} orientation="horizontal" hideScrollBar className="flex snap-mandatory snap-x gap-6 h-full w-full ">
            <div className="min-w-full mt-5 snap-center">
              <GHRepos repoDatas={repoDatas} />
            </div>
            <div className="min-w-full snap-center">
              <FavMusic />
            </div>
            <div className="min-w-full snap-center">
              <Hobbies />
            </div>
          </ScrollShadow>
        </div>
      </div>
    </div>
  )
}