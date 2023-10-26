'use client'
// import CVDownloader from "./cvDownloader";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import SpecialBTN from "./specialBTN"
import { useTheme } from "next-themes"

export default function HomeScreen0() {


  const { theme } = useTheme()


  return (
    <div className="h-calc-5 md:h-calc-4 flex items-center" >
      <div
        className="w-full animate-fade-out-on-scroll [animation-timeline:scroll()] [animation-range:0%_30%]"
      >
        <div className="w-full flex flex-col justify-center items-center flex-wrap pt-10 ">
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
            <Popover shouldBlockScroll shouldCloseOnBlur placement="bottom">
              <PopoverTrigger>
                <a>
                  <SpecialBTN name="Download CV" isButton={false} />
                </a>
              </PopoverTrigger>
              <PopoverContent className="p-1">
                <div className="px-2 py-2 flex flex-col gap-2">
                  <p className="font-bold">Select CV language</p>
                  <a className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}  p-2 rounded-lg hover:text-blue-500 transition duration-300`} download href="/assets/docs/CV_YusufJuanda_En.pdf">
                    Curriculum Vitae - English
                  </a>
                  <a className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}  p-2 rounded-lg hover:text-blue-500 transition duration-300`} download href="/assets/docs/CV_YusufJuanda_Id.pdf">
                    Curriculum Vitae - Indonesian
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}