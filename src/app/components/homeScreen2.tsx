'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { NextjsIcon, TypescriptIcon, JavaScriptIcon, HtmlIcon, CssIcon, TailwindIcon, ReactJSIcon, LinuxIcon } from "../svg/icons";
import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Reactjs from '../../../public/images/Reactjs.jpg'
import Nexjs from '../../../public/images/Nextjs.jpg'
import Typescript from '../../../public/images/Ts.jpg'
import Javascript from '../../../public/images/Js.jpg'
import HTMLCSS from '../../../public/images/Htmlcss.jpg'
import Linux from '../../../public/images/Linux.jpg'
import Tailwindcss from '../../../public/images/Tailwindcss.jpg'
import SpecialBTN from "./specialBTN";



type TIcons<T> = {
  name: string
  thumbnail: typeof Reactjs
  description: string
  scroll_animation: string
  refElements?: React.RefObject<T>
}


export default function HomeScreen2() {

  const { theme } = useTheme()
  const pRef = useRef<HTMLParagraphElement>(null)

  const icons: TIcons<HTMLParagraphElement>[] = [
    {
      name: "NextJS",
      scroll_animation: 'top-[100px] animate-scale-card1-on-scroll [animation-range:entry-crossing_29%_exit-crossing_33%]',
      description: "The React Framework for the Web",
      thumbnail: Nexjs,
      refElements: useRef<HTMLDivElement>(null)
    },
    {
      name: "TypeScript",
      scroll_animation: 'top-[100px] animate-scale-card2-on-scroll [animation-range:entry-crossing_35%_exit-crossing_38%]',
      description: "TypeScript is JavaScript with syntax for types.",
      thumbnail: Typescript,
      refElements: useRef<HTMLDivElement>(null)
    },
    {
      name: "JavaScript",
      scroll_animation: 'top-[100px] animate-scale-card3-on-scroll [animation-range:entry-crossing_44%_exit-crossing_47%]',
      description: "Code like a pro, write in JavaScript.",
      thumbnail: Javascript,
      refElements: useRef<HTMLDivElement>(null)
    },
    {
      name: "HTML & CSS",
      scroll_animation: 'top-[100px] animate-scale-card4-on-scroll [animation-range:entry-crossing_54%_exit-crossing_55%]',
      description: "Design, develop, and deliver with HTML and CSS.",
      thumbnail: HTMLCSS,
      refElements: useRef<HTMLDivElement>(null)
    },
    {
      name: "Linux",
      scroll_animation: 'top-[100px] animate-scale-card5-on-scroll [animation-range:entry-crossing_60%_exit-crossing_63%]',
      description: "One Operating System to rule them all.",
      thumbnail: Linux,
      refElements: useRef<HTMLDivElement>(null)
    },
    {
      name: "Tailwind",
      scroll_animation: 'top-[100px] animate-scale-card6-on-scroll [animation-range:entry-crossing_73%_exit-crossing_76%]',
      description: "Rapidly build modern websites without ever leaving HTML.",
      thumbnail: Tailwindcss,
      refElements: useRef<HTMLDivElement>(null)
    },
    {
      name: "ReactJS",
      scroll_animation: 'top-[100px] animate-scale-card7-on-scroll [animation-range:entry-crossing_77%_exit-crossing_77%]',
      description: "Create user interfaces from components.",
      thumbnail: Reactjs,
      refElements: useRef<HTMLDivElement>(null)
    },
  ]

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('translate-y-20', 'translate-y-0')
        } else {
          entry.target.classList.replace('translate-y-0', 'translate-y-20')
        }
      })
    })

    const observeP = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('scale-50', 'scale-100')
        } else {
          entry.target.classList.replace('scale-100', 'scale-50')
        }
      })
    })


    if (pRef.current) observeP.observe(pRef.current)

    icons.forEach(icon => {
      if (icon.refElements?.current) observe.observe(icon.refElements.current)
    })

    return () => {
      icons.forEach(icon => {
        if (icon.refElements?.current) observe.unobserve(icon.refElements.current)
      })
      if (pRef.current) observeP.unobserve(pRef.current)
    }

  }, [])



  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <p ref={pRef} className="text-center text-4xl md:text-5xl font-bold scale-50 duration-1000 sticky top-[80px]">My Skills</p>
      <div className="flex md:hidden w-full max-w-[800px] px-1 justify-center flex-wrap duration-1000 gap-4">
        {
          icons.map((item) => {
            return (
              <div key={item.name} ref={item.refElements} className={`${item.scroll_animation} origin-top [animation-timeline:scroll()] translate-y-20 duration-1000 sticky px-4`}>
                <Card
                  isBlurred
                  className={`py-4 border ${theme === "dark" ? "border-slate-600" : "border-slate-300"}`}
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{item.name}</p>
                    <small className="text-default-500 max-w-[250px]">{item.description}</small>
                    <SpecialBTN name="See Detail" className="text-sm" />
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      src={item.thumbnail}
                      width={270}
                      className="object-cover rounded-xl shadow-md"
                      alt="Card background"
                    />
                  </CardBody>
                </Card>
              </div>
            )
          })
        }
      </div>

      <div className="hidden md:flex w-full max-w-[800px] px-1 justify-center flex-wrap duration-1000 ">
        {
          icons.map((item) => {
            return (
              <div key={item.name} ref={item.refElements} className={`${item.scroll_animation} origin-top [animation-timeline:scroll()] translate-y-20 duration-1000 w-full sticky px-4`}>
                <Card
                  shadow="md"
                  isBlurred
                  className={`w-full mt-10 md:mt-32 border ${theme === "dark" ? "border-slate-600" : "border-slate-300"}`}
                >
                  <div className="flex w-full items-center">
                    <div className="w-2/4 h-full">
                      <Image src={item.thumbnail} className="object-center object-cover rounded-xl" alt="Thumbnail" />
                    </div>
                    <div className="w-2/4 flex justify-center align-center flex-col p-2">
                      <p className="text-xl font-semibold text-center md:text-4xl">{item.name}</p>
                      <p className="text-center text-xs md:text-md">{item.description}</p>
                      <div className="flex justify-center text-xs md:text-lg items-center w-full width-[100px]">
                        <SpecialBTN name="See Detail" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}