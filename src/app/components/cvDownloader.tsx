'use client'
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import SpecialBTN from "./specialBTN"
import { useState } from "react"

export default function CVDownloader() {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover shouldBlockScroll shouldCloseOnBlur backdrop="blur" isOpen={open} placement="bottom">
      <PopoverTrigger>
        <a>
          <SpecialBTN name="Download CV" onPress={() => setOpen(prev => !prev)} />
        </a>
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <div className="w-full flex justify-between rounded-xl items-center">
          <p className="font-bold ms-2">Choose CV</p>
          <Button size="sm" className="font-extrabold" variant="light" radius="lg" isIconOnly onClick={() => setOpen(false)}>X</Button>
        </div>
        <div className="px-2 py-2 flex flex-col">
          <p className="font-bold">CV Language</p>
          <a className="py-2 hover:text-blue-500 transition duration-300" download href="/assets/docs/CV_YusufJuanda_En.pdf">
            Curriculum Vitae - English
          </a>
          <a className="hover:text-blue-500 transition duration-300" download href="/assets/docs/CV_YusufJuanda_Id.pdf">
            Curriculum Vitae - Indonesian
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}
