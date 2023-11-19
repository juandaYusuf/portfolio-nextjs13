'use client'
import { Button } from "@nextui-org/react"


type TProps = {
  name: string,
  id?: string,
  className?: string
  isButton?: boolean
  onPress?: () => void
  innerRef?: React.RefObject<HTMLDivElement>
}


export default function SpecialBTN(props: TProps) {

  const { name, id, className, innerRef, isButton = true } = props
  return (
    <div ref={innerRef} id={id} className={`shadow-lg rounded-xl cursor-pointer mt-2 ${className}`}>
      {
        !isButton
          ?
          <div className="bg-gradient-to-r from-purple-500 to-amber-500 via-pink-600 animate-gradient-xy p-[2px] rounded-xl">
            <div className="p-1 px-4 rounded-[10px] flex justify-center bg-background hover:bg-background/50 duration-200">
              <p className="font-extrabold my-2 select-none">{name}</p>
            </div>
          </div>
          :
          <Button onPress={props.onPress} className="p-0">
            <div className="bg-gradient-to-r from-purple-500 to-amber-500 via-pink-600 animate-gradient-xy p-[2px] py-[4px] rounded-xl">
              <div className=" px-2 rounded-[10px] flex justify-center bg-background hover:bg-background/50 duration-200">
                <p className="font-extrabold my-2">{name}</p>
              </div>
            </div>
          </Button>
      }

    </div>
  )
}