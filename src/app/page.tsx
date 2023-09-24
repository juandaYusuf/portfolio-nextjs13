'use client'
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div className="w-screen flex flex-col justify-center items-center flex-wrap pt-10">
        <p className="tracking-widest text-gray-400 font-semibold">Hi, I'm Yusuf Juanda and I'm a</p>
        <div className="flex md:gap-5 flex-wrap justify-center">
          <p className="font-extrabold text-6xl md:text-8xl select-none">Frontend</p>
          <div className="relative">
            <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl md:blur-2xl select-none">Developer</p>
            <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl md:blur-xl select-none">Developer</p>
            <p className="text-6xl md:text-8xl  font-extrabold  z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-400 select-none">Developer</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center">
            <p className="text-gray-400  mt-2 text-center"> I have an interest in JavaScript and Python, I studied FastAPI and ReactJS for 1 year. But I focus on the </p>
            <p className="text-gray-400  mb-2 text-center">I am a fresh graduate of information systems</p>
            <Button className="font-bold">Download CV</Button>
        </div>
      </div>
      {/* <div className="h-screen w-full">
        <h1>Page 2</h1>
      </div> */}
    </div>
  )
}
