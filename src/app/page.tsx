'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


type TAnimateOptions = {
  scroll : number,
  scale: number,
  blur: number,
  display: string,
  translate: number
}


export default function Home() {

  const { theme } = useTheme()
  const [scrollAnimate, setScrollAnimate] = useState<TAnimateOptions>({
    scroll:0,
    scale: 1,
    blur: 0,
    display: ' ',
    translate: 0
  })

  const scrollAnimation = () => {
    if (window.scrollY > 480) return
    setScrollAnimate({
      scroll: window.scrollY,
      scale: 1 + window.scrollY / 100,
      blur: window.scrollY / 100 * 5,
      display: 1 + window.scrollY / 100 > 4.97 ? 'none' : ' ',
      translate: window.scrollY / 100 * 20
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation)
    return () => {
      window.removeEventListener('scroll', scrollAnimation)
    }
  }, [])



  return (
    <div>
      <div className="h-screen" >
        <div style={{
          transform: `scale(${scrollAnimate.scale})`,
          filter: `blur(${scrollAnimate.blur}px)`,
          display: scrollAnimate.display,
          position: 'fixed',
          zIndex: `${scrollAnimate.scroll > 50 ? "-1" : "1"}`
        }}>
          <div className="h-calc-4 w-screen flex flex-col justify-center items-center flex-wrap pt-10 ">
            <p className={`tracking-widest text-gray-400 font-semibold`} style={{transform: `translate(0px, -${scrollAnimate.translate}px)`}}>Hi, I'm Yusuf Juanda. I'm a</p>
            <div className="flex md:gap-5 flex-wrap justify-center">
              <p
                className={`font-extrabold text-6xl md:text-8xl select-none`}
                style={{ transform: `translate(-${scrollAnimate.translate}px, 0px)` }}
              >
                Frontend
              </p>
              <div
                className='relative'
                style={{ transform: `translate(${scrollAnimate.translate}px, 0px)` }}
              >
                <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-purple-200 via-pink-100 animate-gradient-x blur-2xl select-none">Developer</p>
                <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 via-pink-500 animate-gradient-x blur-lg  select-none">Developer</p>
                <p className="text-6xl md:text-8xl  font-extrabold bg-gradient-to-r from-sky-600 to-purple-700 via-pink-600 animate-gradient-x  bg-clip-text text-transparent select-none">Developer</p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-center px-5">

              <span className={`text-gray-400 text-center mt-2 text-xs md:text-base`} style={{transform: `translate(0px, ${scrollAnimate.translate}px)`}}> I have an interest in JavaScript and Python, I studied FastAPI and ReactJS for 1 year. But I focus on the frontend development and</span>
              <span className={`text-gray-400 text-center px-2 text-xs md:text-base`} style={{transform: `translate(0px, ${scrollAnimate.translate}px)`}}>I am a fresh graduate of information systems</span>

              <div className='shadow-lg rounded-xl cursor-pointer mt-2' style={{transform: `translate(0px, ${scrollAnimate.translate}px)`}}>
                <div className="bg-gradient-to-r from-purple-500 to-amber-500 via-pink-600 animate-gradient-xy p-[2px] rounded-xl">
                  <div className={`"p-2 rounded-[10px] flex justify-center w-40 " ${theme === 'dark' ? 'bg-black hover:opacity-[0.8]' : 'bg-white hover:opacity-[0.8]'}`}>
                    <p className="font-extrabold my-2 select-none">Download CV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full">
        <h1 className="w-100 bg-red-200">Page 2</h1>
      </div>
    </div>
  )
}
