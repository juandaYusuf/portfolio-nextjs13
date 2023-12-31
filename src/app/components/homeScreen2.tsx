'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation"


import SpecialBTN from "./specialBTN"

import { skills } from "../lib/types/card-skill";




export default function HomeScreen2() {

  const { theme } = useTheme()
  const pRef = useRef<HTMLParagraphElement>(null)
  const [themeSwitcher, setThemeSwitcher] = useState('')
  const routes = useRouter()

  const icons = skills

  useEffect(() => {
    setThemeSwitcher(theme!)
  }, [theme])



  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <p ref={pRef} className="text-center text-4xl md:text-5xl font-bold duration-1000 sticky top-[80px]">My Skills</p>
      <div className="flex md:hidden w-full max-w-[800px] px-1 justify-center flex-wrap duration-1000 gap-4">
        {
          icons.map((item) => {
            return (
              <div key={item.name} className={`${item.scroll_animation} origin-top [animation-timeline:scroll()] translate-y-20 duration-1000 sticky px-4`}>
                <Card
                  isBlurred
                  className={`py-4 border ${themeSwitcher === "dark" ? "border-slate-600" : "border-slate-300"}`}
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

      <div className="hidden md:flex w-full max-w-[800px] px-1 justify-center flex-wrap duration-1000 gap-6">
        {
          icons.map((item) => {
            return (
              <div key={item.name}  className={`${item.scroll_animation} origin-top [animation-timeline:scroll()] translate-y-20 duration-1000 w-full sticky px-4`}>
                <Card
                  shadow="md"
                  isBlurred
                  className={`w-full border ${themeSwitcher === "dark" ? "border-slate-600" : "border-slate-300"}`}
                >
                  <div className="flex w-full items-center">
                    <div className="w-2/4 h-full">
                      <Image src={item.thumbnail} className="object-center object-cover rounded-xl" alt="Thumbnail" />
                    </div>
                    <div className="w-2/4 flex justify-center align-center flex-col p-2">
                      <p className="text-xl font-semibold text-center md:text-4xl">{item.name}</p>
                      <p className="text-center text-xs md:text-md">{item.description}</p>
                      <div className="flex justify-center text-xs md:text-lg items-center w-full width-[100px]">
                        <SpecialBTN name="See Detail" onPress={() => routes.push(`skills/${item.name}/`)} />
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