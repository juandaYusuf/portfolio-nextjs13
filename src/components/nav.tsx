'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useState } from "react"
import BLogo from '../../public/logo/black.png'
import WLogo from '../../public/logo/white.png'
import Link from "next/link"
import CstmButton from "@/components/cstmButton"
import { usePathname } from "next/navigation"
import CstmPopOver from "@/components/popOver"
import { GithubIcon } from "../../public/svg/icons"
import { SunIcon } from "../../public/svg/icons"
import { MoonIcon } from "../../public/svg/icons"
import NavMenus from "./navMenu"
import { TGitHubDatas } from "@/lib/interfaces/githubDatas"



const Nav: React.FC<TGitHubDatas> = (props) => {

  const { theme, setTheme } = useTheme()
  const [windowScrollY, setWindowScrollY] = useState<number>(0)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const ghdata = {
    profile : props.profile, 
    followers : props.followers,
    followings : props.followings
  } 
  const menuItems = [
    "home",
    "portfolio",
    "skills",
    "introducing",
    "about",
    "download CV"
  ]


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
          <Image src={theme === "dark" ? WLogo : BLogo} width={60} height={60} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3 " justify="center">
        <NavbarBrand>
          <Image src={theme === "dark" ? WLogo : BLogo} width={60} height={60} alt="Logo" />
        </NavbarBrand>
        {
          menuItems.map((items, index) => (
            <NavbarItem key={index}>
              {
                items !== "download CV"
                  ?
                  <div className={`py-2 transition duration-200 ${pathname === `/${items}` || pathname === '/' && items === "home" ? theme === "dark" ? "border-b-3 border-white text-white" : "border-b-3 border-black text-black" : " border-b-3 border-transparent text-gray-400"}`}>
                    <Link
                      className={`capitalize font-semibold duration-200 py-1 px-3  ${theme === "dark" ? "hover:text-white hover:bg-gray-700 hover:rounded-md hover:border-0" : "hover:text-black hover:bg-gray-100 hover:rounded-md hover:border-0"}`}
                      href={items === 'home' ? '/' : items}>
                      {items}
                    </Link>
                  </div>
                  :
                  windowScrollY >= 560
                  &&
                  <CstmButton name={items} />
              }
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <CstmPopOver
        ghdata={ghdata}
        >
          <Button isIconOnly variant="light">
            <GithubIcon size={24}/>
          </Button>

        </CstmPopOver>
        <NavbarItem>
          <Switch
            size="sm"
            color="secondary"
            thumbIcon={({ isSelected, className }) => {
              if (isSelected) {
                setTheme('dark')
              } else {
                setTheme('light')
              }
              return (
                isSelected ?
                  <SunIcon className={className} />
                  :
                  <MoonIcon className={className} />
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