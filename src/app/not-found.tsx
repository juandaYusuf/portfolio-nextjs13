'use client'

import Image from "next/image";
import { PageNotfoundIcon } from "../../public/svg/pagenotfound"
import { useTheme } from "next-themes";


export default function NotFound() {

  const { theme } = useTheme()

  return (
    <div className="h-calc-4 w-screen flex flex-col justify-center items-center">

      <div className="relative">
        <div className="absolute w-full h-full bg-purple-500 blur-3xl animate-spin-slow -z-10 opacity-70">
          <div className="absolute h-20 w-20 bg-lime-300 rounded-t-full" />
          <div className="absolute h-20 w-20 bg-red-500 right-16 bottom-16 " />
          <div className="absolute h-20 w-20 bg-sky-500 right-0 bottom-0" />
        </div>
        <PageNotfoundIcon
          cscreen={theme === 'dark' ? "#000000" : "#ffffff"}
          cframe={theme === 'dark' ? "#475569" : "#000000"}
          ccircle={theme === 'dark' ? "#475569" : "#000000"}
          cbottomline={theme === 'dark' ? "#ffffff" : "#000000"}
          cleaf={theme === 'dark' ? "#ffffff" : "#000000"}
        />
      </div>

      <p className="font-bold text-xl tracking-wide">404 | Page Not Found</p>
    </div>
  )
}