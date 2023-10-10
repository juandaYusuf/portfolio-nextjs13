'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import SpecialBTN from "./specialBTN";
import { InstagramIcon, TwitterIcon, WhatsAppIcon } from "../../public/svg/icons";


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
          entry.target.classList.replace('translate-y-20', 'translate-y-0')
        } else {
          entry.target.classList.replace('opacity-100', 'opacity-0')
          entry.target.classList.replace('translate-y-0', 'translate-y-20')
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
    <div className="w-full">
      <div className="flex flex-wrap justify-evenly w-full h-full p-3 ">
        <div className="flex flex-col items-center mb-5 ">
          <p ref={elementsRef[0].ref} id={elementsRef[0].id} className="tracking-widest select-none duration-[2s] ease-in opacity-0 translate-y-20 md:text-4xl">✨ Hello... My name is 😎</p>
          <p ref={elementsRef[1].ref} id={elementsRef[1].id} className="font-extrabold text-7xl select-none duration-[2s] ease-in opacity-0 translate-y-20 md:text-8xl md:tracking-widest md:ps-4">YUSUF</p>
          <p ref={elementsRef[2].ref} id={elementsRef[2].id} className="text-xl ps-4 tracking-[1rem] border-b-2 border-foreground select-none duration-[2s] ease-in opacity-0 translate-y-20 md:text-6xl"> ..JUANDA..</p>
          <p ref={elementsRef[3].ref} id={elementsRef[3].id} className="text-center tracking-wider duration-[2s] ease-in opacity-0 translate-y-20 w-[489px] hidden md:block">I have an interest in JavaScript and Python, I studied FastAPI and ReactJS for 1 year. But I focus on the frontend development.</p>
          <SpecialBTN innerRef={elementsRef[4].ref} id={elementsRef[4].id} className="duration-[2s] ease-in opacity-0 translate-y-20 hidden md:inline" name="Contact me" />
        </div>
        <div className="flex flex-col items-center relative">
          <Image ref={elementsRef[5].ref as React.RefObject<HTMLImageElement>} id={elementsRef[5].id} className="saturate-0 border-b-4 border-foreground duration-[2s] ease-in opacity-0 translate-y-20 md:delay-500 md:duration-[3s]" src="/images/img.png" alt="me" width={700} height={700} />
          <p ref={elementsRef[6].ref} id={elementsRef[6].id} className="text-center tracking-wider duration-[2s] ease-in opacity-0 translate-y-20 md:hidden">I have an interest in JavaScript and Python, I studied FastAPI and ReactJS for 1 year. But I focus on the frontend development.</p>
          <SpecialBTN innerRef={elementsRef[7].ref} id={elementsRef[7].id} className="duration-[2s] ease-in opacity-0 translate-y-20 md:hidden inline" name="Contact me" />

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