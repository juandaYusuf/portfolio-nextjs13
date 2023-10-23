'use client'
import CVDownloader from "./cvDownloader";

export default function HomeScreen0() {


  return (
    <div className="h-calc-5 md:h-calc-4 flex items-center" >
      <div
        className="fixed animate-fade-out-on-scroll [animation-timeline:scroll()] [animation-range:0%_30%]"
      >
        <div className="w-screen flex flex-col justify-center items-center flex-wrap pt-10 ">
          <p className="tracking-widest text-gray-400 font-semibold text-xs md:text-base"
          >
            Welcome to my personal portfolio. I'm a
          </p>
          <div className="flex md:gap-5 flex-wrap justify-center">
            <p
              className="font-extrabold text-6xl md:text-8xl select-none"
            >
              Frontend
            </p>
            <div
              className='relative'
            >
              <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-purple-200 via-pink-100 animate-gradient-x blur-2xl select-none">Developer</p>
              <p className="text-6xl md:text-8xl  absolute font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500 via-pink-500 animate-gradient-x blur-lg  select-none">Developer</p>
              <p className="text-6xl md:text-8xl  font-extrabold bg-gradient-to-r from-sky-600 to-purple-700 via-pink-600 animate-gradient-x  bg-clip-text text-transparent select-none">Developer</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center px-5">
            <span className="text-gray-400 tracking-widest text-center text-xs md:text-base"
            >
              Junior Frontend Web Developer using NextJS or ReactJS and I'm a fresh graduate of information systems
            </span>

            <CVDownloader/>
            
          </div>
        </div>
      </div>
    </div>
  )
}