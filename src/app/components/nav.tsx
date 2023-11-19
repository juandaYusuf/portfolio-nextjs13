'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Popover, PopoverContent, PopoverTrigger, Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import BLogo from '../../../public/logo/black.png'
import WLogo from '../../../public/logo/white.png'
import Link from "next/link"
import CstmButton from "@/app/components/cstmButton"
import { usePathname } from "next/navigation"
import CstmPopOver from "@/app/components/popOver"
import { GithubIcon } from "../svg/icons"
import { SunIcon } from "../svg/icons"
import { MoonIcon } from "../svg/icons"
import NavMenus from "./navMenu"
import { TGitHubDatas } from "@/app/lib/interfaces/githubDatas"



const Nav: React.FC<TGitHubDatas> = (props) => {

  const { theme, setTheme } = useTheme()
  const [translateX, setTranslateX] = useState('hidden')
  const [themeSwitcher, setThemeSwitcher] = useState(false)
  const [windowScrollY, setWindowScrollY] = useState<number>(0)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const ghdata = {
    profile: props.profile,
    followers: props.followers,
    followings: props.followings
  }
  const menuItems = [
    "home",
    "portfolio",
    "skills",
    "introducing",
    "about",
    "download CV"
  ]

  useEffect(() => {
    let localThemes = localStorage.getItem('theme')
    setTheme(localThemes ? localThemes : 'light')
    setThemeSwitcher(localThemes ? localThemes === 'dark' : false)
  }, [theme])

  useEffect(() => {
    if (pathname === '/') {
      setTranslateX('translate-x-[10px] w-[50px]')
    } else if (pathname === '/portfolio') {
      setTranslateX('translate-x-[83px] w-[69px]')
    }else if (pathname === '/skills') {
      setTranslateX('translate-x-[176px] w-[40px]')
    }else if (pathname === '/introducing') {
      setTranslateX('translate-x-[241px] w-[90px]')
    }else if (pathname === '/about') {
      setTranslateX('translate-x-[355px] w-[50px]')
    }
  }, [pathname])


  return (
    <Navbar
      position="sticky"
      height="4rem"
      isBordered={windowScrollY !== 0}
      onScrollPositionChange={(y) => setWindowScrollY(y)}
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Image src={themeSwitcher ? WLogo : BLogo} width={60} height={60} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3 " justify="center">
        <NavbarBrand>
          <Image src={themeSwitcher ? WLogo : BLogo} width={60} height={60} alt="Logo" />
        </NavbarBrand>
        <div className="flex flex-col">
          <div className="flex h-[40px] items-center">
            {
              menuItems.map((items, index) => (
                <NavbarItem key={index}>
                  {
                    items !== "download CV"
                      ?
                      <Link
                        className={`capitalize font-semibold duration-200 py-1 px-3  ${themeSwitcher ? "hover:text-white hover:bg-gray-700 hover:rounded-md hover:border-0" : "hover:text-black hover:bg-gray-100 hover:rounded-md hover:border-0"}`}
                        href={items === 'home' ? '/' : items}>
                        {items}
                      </Link>
                      :
                      windowScrollY >= 560
                      &&
                      <Popover>
                        <PopoverTrigger>
                          <a>
                            <CstmButton name={items} />
                          </a>
                        </PopoverTrigger>
                        <PopoverContent className="p-1">
                          <div className="px-2 py-2 flex flex-col gap-2">
                            <p className="font-bold">Select CV language</p>
                            <a className={`${themeSwitcher ? 'bg-slate-800' : 'bg-slate-100'}  p-2 rounded-lg hover:text-blue-500 transition duration-300`} download href="/assets/docs/CV_YusufJuanda_En.pdf">
                              Curriculum Vitae - English
                            </a>
                            <a className={`${themeSwitcher ? 'bg-slate-800' : 'bg-slate-100'}  p-2 rounded-lg hover:text-blue-500 transition duration-300`} download href="/assets/docs/CV_YusufJuanda_Id.pdf">
                              Curriculum Vitae - Indonesian
                            </a>
                          </div>
                        </PopoverContent>
                      </Popover>
                  }
                </NavbarItem>
              ))
            }
          </div>
          <div className={`${translateX} h-[3px] rounded-full duration-300 bg-white`} />
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <CstmPopOver
          ghdata={ghdata}
        >
          <Button isIconOnly variant="light">
            <GithubIcon size={24} />
          </Button>

        </CstmPopOver>
        <NavbarItem>
          <Switch
            isSelected={themeSwitcher}
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            size="sm"
            onValueChange={(value) => setTheme(value ? "dark" : "light")}
            thumbIcon={({ isSelected, className }) => {
              return isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }}>
          </Switch>
        </NavbarItem>
      </NavbarContent>
      <NavMenus />
    </Navbar>
  )
}

export default Nav