'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import SpecialBTN from "./specialBTN";
import { ArchLinuxIcon, CssIcon, GithubIcon, HtmlIcon, InstagramIcon, JavaScriptIcon, NextjsIcon, ReactJSIcon, TailwindIcon, TwitterIcon, TypescriptIcon, WhatsAppIcon } from "../svg/icons";


type TRef<T> = {
  id: string,
  ref: React.RefObject<T>
}

export default function HomeScreen1() {


  const elementsRef: TRef<HTMLImageElement | HTMLParagraphElement | HTMLDivElement>[] = [
    { id: "greating", ref: useRef<HTMLParagraphElement>(null) },
    { id: "first_name", ref: useRef<HTMLParagraphElement>(null) },
    { id: "last_name", ref: useRef<HTMLParagraphElement>(null) },
    { id: "description_mobile", ref: useRef<HTMLParagraphElement>(null) },
    { id: "special_btn_mobile", ref: useRef<HTMLDivElement>(null) },
    { id: "my_picture", ref: useRef<HTMLImageElement>(null) },
    { id: "description_desktop", ref: useRef<HTMLParagraphElement>(null) },
    { id: "special_btn_desktop", ref: useRef<HTMLDivElement>(null) }
  ]



  useEffect(() => {

    const observer = new IntersectionObserver((entires) => {
      entires.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('opacity-0', 'opacity-100')
          entry.target.classList.replace('translate-x-40', 'translate-x-0')
          entry.target.classList.replace('-translate-x-40', '-translate-x-0')
        } else {
          entry.target.classList.replace('opacity-100', 'opacity-0')
          entry.target.classList.replace('translate-x-0', 'translate-x-40')
          entry.target.classList.replace('-translate-x-0', '-translate-x-40')
        }
      })
    })

    elementsRef.forEach(element => {
      if (element.ref.current) observer.observe(element.ref.current)
    })

    return () => {

      elementsRef.forEach(element => {
        if (element.ref.current) observer.unobserve(element.ref.current)
      })
    }

  }, [])


  return (
    <div className="w-full overflow-hidden pb-4 relative">
      <div className="flex flex-wrap justify-evenly w-full h-full p-3 ">
        <div className="flex flex-col items-center mb-5 ">
          <p ref={elementsRef[0].ref} id={elementsRef[0].id} className="tracking-widest select-none duration-[1s] ease-in opacity-0 -translate-x-40 md:text-4xl">✨ Hello... My name is 😎</p>
          <p ref={elementsRef[1].ref} id={elementsRef[1].id} className="font-extrabold text-7xl select-none duration-[1s] ease-in opacity-0 translate-x-40 md:text-8xl md:tracking-widest md:ps-4">YUSUF</p>
          <p ref={elementsRef[2].ref} id={elementsRef[2].id} className="text-xl ps-4 tracking-[1rem] underline underline-offset-[16px] mb-5 select-none duration-[1s] ease-in opacity-0 -translate-x-40 md:text-6xl"> ..JUANDA..</p>
          <p ref={elementsRef[3].ref} id={elementsRef[3].id} className="text-center tracking-wider duration-[1s] ease-in opacity-0 translate-x-40 w-[489px] hidden md:block">I have an interest in JavaScript and Python, I studied FastAPI and ReactJS for 1 year. But I focus on the frontend development.</p>
          <SpecialBTN innerRef={elementsRef[4].ref} id={elementsRef[4].id} className="duration-[1s] ease-in opacity-0 -translate-x-40 hidden md:inline" name="Contact me" />
        </div>
        <div className="flex flex-col items-center relative">

          <div className="absolute top-0 right-72 blur-[1px] -rotate-12">
            <HtmlIcon size={30} />
          </div>

          <div className="absolute top-10 left-64 blur-[1px] rotate-12">
            <CssIcon size={20} />
          </div>

          <div className="absolute top-20 left-0 -rotate-6">
            <JavaScriptIcon size={75} />
          </div>

          <div className="absolute top-40 left-40 blur-[1px] rotate-6">
            <TypescriptIcon size={50} />
          </div>

          <div className="absolute top-40 left-[17rem] blur-[1px] rotate-45">
            <GithubIcon size={40} />
          </div>

          <div className="absolute top-5 right-52">
            <ReactJSIcon size={60} />
          </div>

          <div className="absolute top-10 right-20 rotate-12">
            <TwitterIcon size={50} />
          </div>

          <div className="absolute top-0 left-36 rotate-6">
            <TailwindIcon size={60} />
          </div>

          <div className="absolute top-28 right-32 blur-[.8px] -rotate-12">
            <ArchLinuxIcon size={25} />
          </div>

          <div className="absolute top-40 right-56 rotate-6">
            <NextjsIcon size={40} />
          </div>

          <div className="mt-10">
            <Image ref={elementsRef[5].ref as React.RefObject<HTMLImageElement>} id={elementsRef[5].id} className="saturate-0 border-b-4 border-foreground duration-[1s] ease-in opacity-0 translate-x-40 md:duration-[1s]" src="/images/img.png" alt="me" width={700} height={700} />
          </div>

          <p ref={elementsRef[6].ref} id={elementsRef[6].id} className="text-center tracking-wider duration-[1s] ease-in opacity-0 translate-x-40 md:hidden">I have an interest in JavaScript and Python, I studied FastAPI and ReactJS for 1 year. But I focus on the frontend development.</p>
          <SpecialBTN innerRef={elementsRef[7].ref} id={elementsRef[7].id} className="duration-[1s] ease-in opacity-0 -translate-x-40 md:hidden inline" name="Contact me" />

          <div className="absolute right-3 top-1 flex flex-col items-center gap-2">
            <div className="h-[2px] w-[2px] bg-foreground rounded-full" />
            <div className="h-[2px] w-[2px] bg-foreground rounded-full" />
            <div className="h-[2px] w-[2px] bg-foreground rounded-full" />
            <div className="h-[2px] w-[2px] bg-foreground rounded-full" />
            <a href="https://twitter.com/JuandaYusuf2" target="_blank" className="hover:scale-125 duration-150"><TwitterIcon size={20} /></a>
            <a href="https://www.instagram.com/__devmode__/" target="_blank" className="hover:scale-125 duration-150"><InstagramIcon size={20} /></a>
            <a href="https://wa.me/+6282318472536?text=Halo" target="_blank" className="hover:scale-125 duration-150"><WhatsAppIcon size={20} /></a>
            <div className="h-20 w-[2px] bg-foreground rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}