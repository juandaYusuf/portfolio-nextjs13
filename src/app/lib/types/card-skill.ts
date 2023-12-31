import { StaticImageData } from "next/image"

import Reactjs from '../../../../public/images/Reactjs.jpg'
import Nexjs from '../../../../public/images/Nextjs.jpg'
import Typescript from '../../../../public/images/Ts.jpg'
import Javascript from '../../../../public/images/Js.jpg'
import HTMLCSS from '../../../../public/images/Htmlcss.jpg'
import Linux from '../../../../public/images/Linux.jpg'
import Tailwindcss from '../../../../public/images/Tailwindcss.jpg'



type TCardSkill = {
  name: string
  thumbnail: StaticImageData
  description: string
  scroll_animation: string
}


export const skills : TCardSkill[] = [
  {
    name: "NextJS",
    scroll_animation: 'top-[100px] animate-scale-card1-on-scroll [animation-range:entry-crossing_25%_exit-crossing_30%]',
    description: "The React Framework for the Web",
    thumbnail: Nexjs,
  },
  {
    name: "TypeScript",
    scroll_animation: 'top-[100px] animate-scale-card2-on-scroll [animation-range:entry-crossing_30%_exit-crossing_35%]',
    description: "TypeScript is JavaScript with syntax for types.",
    thumbnail: Typescript,
  },
  {
    name: "JavaScript",
    scroll_animation: 'top-[100px] animate-scale-card3-on-scroll [animation-range:entry-crossing_38%_exit-crossing_41%]',
    description: "Code like a pro, write in JavaScript.",
    thumbnail: Javascript,
  },
  {
    name: "HTML&CSS",
    scroll_animation: 'top-[100px] animate-scale-card4-on-scroll [animation-range:entry-crossing_42%_exit-crossing_44%]',
    description: "Design, develop, and deliver with HTML and CSS.",
    thumbnail: HTMLCSS,
  },
  {
    name: "Linux",
    scroll_animation: 'top-[100px] animate-scale-card5-on-scroll [animation-range:entry-crossing_46%_exit-crossing_52%]',
    description: "One Operating System to rule them all.",
    thumbnail: Linux,
  },
  {
    name: "Tailwind",
    scroll_animation: 'top-[100px] animate-scale-card6-on-scroll [animation-range:entry-crossing_55%_exit-crossing_61%]',
    description: "Rapidly build modern websites without ever leaving HTML.",
    thumbnail: Tailwindcss,
  },
  {
    name: "ReactJS",
    scroll_animation: 'top-[100px] animate-scale-card7-on-scroll [animation-range:entry-crossing_66%_exit-crossing_71%]',
    description: "Create user interfaces from components.",
    thumbnail: Reactjs,
  }
]