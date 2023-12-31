'use client'
import { Avatar, Card, CardBody, ScrollShadow } from "@nextui-org/react"
import { useRouter, usePathname } from "next/navigation"


import { useState, useRef, createRef, useEffect } from "react"

type TItems = {
  no: number
  key: string
  lable: string
  startIcon: React.ReactNode
}

type TProps = {
  className?: string
  items?: TItems[]
}

export default function LeftSideBar({
  className, items
}: TProps) {


  const [position, setPosition] = useState<string>('hidden')
  const pointerRef = useRef<HTMLDivElement>(null)
  const listItemRefs = useRef(items?.map(() => createRef<HTMLDivElement>()))
  const router = useRouter()
  const pathName = usePathname()

  const listBoxAction = (key: string) => {
    router.push(`/skills/${key}`)
    if (listItemRefs.current) {
      const ref = listItemRefs.current.find((refItem) => refItem.current?.id === key)?.current
      const listItemParent = ref?.offsetParent?.getBoundingClientRect().top
      const listItem = ref?.getBoundingClientRect().top
      const top = listItem && listItemParent ? listItem - listItemParent : 0
      // setPosition(`translate-y-[${top}px]`)
      console.log({ listItemParent, listItem }, top)
    }
  }

  useEffect(() => {
    if (pathName === '/skills/NextJS') {
      setPosition('translate-y-[26px]')
    } else if (pathName === '/skills/TypeScript') {
      setPosition('translate-y-[77px]')
    } else if (pathName === '/skills/JavaScript') {
      setPosition('translate-y-[126px]')
    } else if (pathName === '/skills/HTML%20&%20CSS') {
      setPosition('translate-y-[176px]')
    } else if (pathName === '/skills/Linux') {
      setPosition('translate-y-[228px]')
    } else if (pathName === '/skills/Tailwind') {
      setPosition('translate-y-[278px]')
    } else if (pathName === '/skills/ReactJS') {
      setPosition('translate-y-[327px]')
    } else {
      setPosition('hidden')
    }
  }, [pathName])


  return (
    <ScrollShadow className={className} hideScrollBar>
      <Card
        className="ms-1 me-1 my-2"
        isPressable
        shadow="sm">
        {/* <CardBody className="py-2 "> */}
          {/* <div className="flex justify-center items-center gap-2">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <div>
              <p className=" font-semibold">Yusuf Juanda</p>
              <small className="me-2 text-slate-500">juandayusuf.bchlr@gmail.com</small>
            </div>
          </div> */}
          <div className="group w-[300px] p-[4px] bg-secondary relative rounded-xl overflow-hidden h-[60px] flex justify-center items-center">
            <div className="flex absolute w-[18%] h-[70px] bg-gradient-to-l from-blue-400 via-purple-600 origin-bottom bottom-[70%] rounded-full animate-line-around" />
            <div className="h-full left-0 bottom-0 z-10 w-full rounded-xl bg-secondary flex justify-center items-center gap-2">
              <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <div>
                <p className=" font-semibold">Yusuf Juanda</p>
                <small className="me-2 text-slate-500">juandayusuf.bchlr@gmail.com</small>
              </div>
            </div>
          </div>
        {/* </CardBody> */}
      </Card>

      <div className="mb-10 relative">
        <div className="w-full ms-1 pe-1 pt-4 flex flex-col select-none" >
          {
            items?.map((item) => (
              <div
                className=" cursor-pointer text-slate-500 hover:text-foreground hover:bg-secondary/50 border border-secondary/0 hover:border hover:border-danger p-2 rounded-xl flex gap-3 items-center "
                key={item.key}
                id={item.key}
                onClick={() => listBoxAction(`${item.key}`)}
                ref={listItemRefs.current?.[item.no]} >
                <span className="text-foreground">{item.startIcon}</span>
                <span className="font-semibold">{item.lable}</span>
              </div>
            )
            )
          }
        </div>
        <div className={`top-[0px] left-[3px] ${position} duration-200 absolute rounded-full w-[3px] h-[25px] bg-blue-500`} />
      </div>
    </ScrollShadow>
  )
}