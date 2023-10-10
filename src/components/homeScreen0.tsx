'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SpecialBTN from "./specialBTN"


type TAnimateOptions = {
  scroll: number,
  scale: number,
  blur: number,
  display: string,
  translate: number
}



export default function homeScreen0() {


  const { theme } = useTheme()
  const [scrollAnimate, setScrollAnimate] = useState({ scroll: 0, scale: 1, blur: 0, display: ' ', translate: 0 } as TAnimateOptions)

  const scrollAnimation = () => {
    if (window.scrollY > 480) {
      setScrollAnimate({
        ...scrollAnimate,
        display: 'none',
      })
    } else {
      setScrollAnimate({
        scroll: window.scrollY,
        scale: 1 + window.scrollY / 100,
        blur: window.scrollY / 100 * 5,
        display: 1 + window.scrollY / 100 > 4.97 ? 'none' : ' ',
        translate: window.scrollY / 100 * 20
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation)
    return () => {
      window.removeEventListener('scroll', scrollAnimation)
    }
  }, [scrollAnimate.scroll])


  return (
    <main className="h-calc-4" >
      <div style={{
        transform: `scale(${scrollAnimate.scale})`,
        filter: `blur(${scrollAnimate.blur}px)`,
        display: scrollAnimate.display,
        position: 'fixed',
        zIndex: `${scrollAnimate.scroll > 50 ? "-1" : "1"}`
      }}>
        <div className="h-calc-4 w-screen flex flex-col justify-center items-center flex-wrap pt-10 ">
          <p className={`tracking-widest text-gray-400 font-semibold text-xs md:text-base`} style={{ transform: `translate(0px, -${scrollAnimate.translate}px)` }}>Welcome to my personal portfolio. I'm a</p>
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
            <span className={`text-gray-400 tracking-widest text-center text-xs md:text-base`} style={{ transform: `translate(0px, ${scrollAnimate.translate}px)` }}> Junior Frontend Web Developer using NextJS or ReactJS and I'm a fresh graduate of information systems</span>
            <SpecialBTN name="Download CV" />
          </div>
        </div>
      </div>
    </main>
  )
}