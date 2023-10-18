'use client'
import { useTheme } from "next-themes"


type TProps = {
  name : string,
  id? : string,
  className? : string
  innerRef? : React.RefObject<HTMLDivElement>
}


export default function SpecialBTN(props : TProps) {

  const { theme } = useTheme()
  const {name, id, className, innerRef} = props

  return (
    <div ref={innerRef} id={id} className={`shadow-lg rounded-xl cursor-pointer mt-2 ${className}`}>
      <div className="bg-gradient-to-r from-purple-500 to-amber-500 via-pink-600 animate-gradient-xy p-[2px] rounded-xl">
        <div className={`"p-2 rounded-[10px] flex justify-center w-40 " ${theme === 'dark' ? 'bg-black hover:opacity-[0.8]' : 'bg-white hover:opacity-[0.8]'}`}>
          <p className="font-extrabold my-2 select-none">{name}</p>
        </div>
      </div>
    </div>
  )
}