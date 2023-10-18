'use client'

import { useTheme } from "next-themes"
import { TwitterIcon, GithubIcon, InstagramIcon, FacebookIcon, LinkedInIcon, WhatsAppIcon, NextjsIcon, ArchLinuxIcon, TypescriptIcon, JavaScriptIcon, HtmlIcon, CssIcon, TailwindIcon, ReactJSIcon } from "../svg/icons"


export default function Footer() {

  const { theme } = useTheme()


  return (
    <div className={`min-h-[40vh] w-full border-t-1 backdrop-blur-xl flex flex-col items-center ${theme === 'dark' ? 'border-slate-800  bg-[#00000058]' : 'border-slate-200 bg-[#ffffff58]'}`}>
      <p className="  tracking-wide text-center my-3 text-xl md:text-3xl font-semibold ">Thank's for scrolling</p>
      <div className="w-full flex justify-center pb-4">
        <div className="flex justify-center w-9/12 flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <p className="font-semibold">A little about me</p>
            <p className="text-slate-400">Welcome to my personal portfolio, Yusuf Juanda.I am a dedicated frontend developer committed to creating engaging and functional web experiences. With experience and expertise in the latest web technologies, I work tirelessly to deliver solutions that bring captivating and responsive designs to every project. Explore my portfolio to see a variety of projects I have worked on, including the creation of modern websites, interactive web applications, and performance optimization. I am always enthusiastic about delivering innovative and creative solutions in the world of web development. Let&#39;s collaborate and bring your ideas to life in the digital realm.</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-semibold">Thank you</p>
            <p className="text-slate-400">Thank's for visiting my portfolio website! I truly appreciate your time. I hope you enjoy looking at my work. Suggestions and questions are always welcomed. If you are interested in collaborating or have any further inquiries, please don't hesitate to contact me. Thank you for your support</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-semibold">What I Learned</p>
            <div className="flex gap-2 my-2 mb-4 flex-wrap">
              <NextjsIcon size={30} />
              <TypescriptIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
              <JavaScriptIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
              <HtmlIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
              <CssIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
              <TailwindIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
              <ReactJSIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
              <ArchLinuxIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} />
            </div>
            <p className="font-semibold">Contact Me</p>
            <div className="flex gap-2 my-2">
              <a href="https://www.linkedin.com/in/yusuf-juanda-283015218/" target="_blank"><LinkedInIcon size={30} color={theme === "dark" ? "#ffffff" : "#000000"} /></a>
              <a href="https://www.instagram.com/__devmode__/" target="_blank"><InstagramIcon size={30} /></a>
              <a href="https://web.facebook.com/JL30.JUANDAYUSUF" target="_blank"><FacebookIcon size={30} /></a>
              <a href="https://wa.me/+6282318472536?text=Halo" target="_blank"><WhatsAppIcon size={30} /></a>
              <a href="https://github.com/juandaYusuf" target="_blank"><GithubIcon size={35} color={theme === "dark" ? "#ffffff" : "#000000"} /></a>
              <a href="https://twitter.com/JuandaYusuf2" target="_blank"><TwitterIcon size={30} /></a>
            </div>
            <p className="text-slate-400">juandayusuf.bchlr@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}