'use client'

import { useTheme } from "next-themes"

export default function Footer () {
  
  const { theme } = useTheme()

  
  return (
    <div className={`h-[40vh] w-full border-t-1 backdrop-blur-xl  ${theme === 'dark' ? 'border-slate-800  bg-[#00000058]' : 'border-slate-200 bg-[#ffffff58]'}`}>
      <h1 className="w-100">This is a footer</h1>
    </div>
  )
}