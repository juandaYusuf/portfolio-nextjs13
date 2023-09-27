'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"



export default function Home() {

  const { theme } = useTheme()
  const [scrollY, setScrollY] = useState('transition-all duration-200 fixed')
  const txtTranslate = { 'toleft': ' ', 'toright': ' ', 'totop': ' ', 'tobottom': ' ' }
  const [translate, setTranslate] = useState(txtTranslate)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setScrollY('transition-all duration-200 fixed')
        setTranslate({ ...txtTranslate })
      } else if (window.scrollY > 1) {
        setScrollY(`scale-[1.5] transition-all duration-200 fixed blur-sm opacity-70`)
        setTranslate({
          'toleft': '-translate-x-10',
          'toright': 'translate-x-10',
          'totop': '-translate-y-10',
          'tobottom': 'translate-y-10',
        })
      } else return

      if (window.scrollY > 150) {
        setScrollY(`scale-[1.6] transition-all duration-200 fixed blur-md opacity-50`)
        setTranslate({
          'toleft': '-translate-x-16',
          'toright': 'translate-x-16',
          'totop': '-translate-y-16',
          'tobottom': 'translate-y-16',
        })
      } else return

      if (window.scrollY > 380) {
        setScrollY(`scale-[1.7] transition-all duration-200 fixed blur-lg opacity-30`)
        setTranslate({
          'toleft': '-translate-x-20',
          'toright': 'translate-x-20',
          'totop': '-translate-y-20',
          'tobottom': 'translate-y-20',
        })
      } else return

      if (window.scrollY > 500) {
        setScrollY(`scale-[2] transition-all duration-200 fixed blur-xl opacity-0 display-none`)
        setTranslate({
          'toleft': '-translate-x-40',
          'toright': 'translate-x-40',
          'totop': '-translate-y-40',
          'tobottom': 'translate-y-40',
        })
      } else return

    })
  }, [scrollY])



  return (
    <div>
      <div className={scrollY}>
        <div className="h-calc-4 w-screen flex flex-col justify-center items-center flex-wrap pt-10 ">
          <p className={`tracking-widest text-gray-400 font-semibold transition-all duration-500  ${translate.totop}`}>Hi, I'm Yusuf Juanda. I'm a</p>
          <div className="flex md:gap-5 flex-wrap justify-center">
            <p className={`font-extrabold text-6xl md:text-8xl select-none transition-all duration-500 ${translate.toleft}`}>Frontend</p>
            <div className={`relative transition-all duration-500 ${translate.toright}`}>
              <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-purple-200 via-pink-100 animate-gradient-x blur-2xl select-none">Developer</p>
              <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 via-pink-500 animate-gradient-x blur-lg  select-none">Developer</p>
              <p className="text-6xl md:text-8xl  font-extrabold bg-gradient-to-r from-sky-600 to-purple-700 via-pink-600 animate-gradient-x  bg-clip-text text-transparent select-none">Developer</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center">
            <div className="my-2">
              <div className="flex gap-[0.20rem]">
                <span className={`text-gray-400 text-center text-xs md:text-base transition-all duration-500 ${translate.toleft} ${translate.tobottom}`}> I have an interest in JavaScript and Python, I studied FastAPI and</span>
                <span className={`text-gray-400 text-center text-xs md:text-base transition-all duration-500 ${translate.toright} ${translate.tobottom}`}>ReactJS for 1 year. But I focus on the frontend development and</span>
              </div>
              <p className={`text-gray-400 text-center px-2 text-xs md:text-base transition-all duration-500 ${translate.tobottom}`}>I am a fresh graduate of information systems</p>
            </div>
            <div className={`shadow-lg rounded-xl cursor-pointer transition-all duration-500 ${translate.tobottom}`}>
              <div className="bg-gradient-to-r from-purple-500 to-amber-500 via-pink-600 animate-gradient-xy p-[2px] rounded-xl">
                <div className={`"p-2 rounded-[10px] flex justify-center w-40 " ${theme === 'dark' ? 'bg-black hover:opacity-[0.8]' : 'bg-white hover:opacity-[0.8]'}`}>
                  <p className="font-extrabold my-2 select-none">Download CV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen" />

      <div className="h-screen w-full">
        {/* <h1>Page 2</h1> */}
      </div>
    </div>
  )
}
