'use client'

import { useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch
} from "@nextui-org/react"
import CstmButton from "../../components/cstmButton"
import CstmPopOver from "@/components/popOver"
import { CycleIcon } from "../../../public/svg/cycleIcon"
import { GithubIcon } from "../../../public/svg/githubIcon"
import { MoonIcon } from "../../../public/svg/moonIcon"
import { SunIcon } from "../../../public/svg/sunIcon"
import Image from "next/image"
import BLogo from '../../../public/logo/black.png'
import WLogo from '../../../public/logo/white.png'


function NavigationBar({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [windowScrollY, setWindowScrollY] = useState<number>(0)
  const { theme, setTheme } = useTheme()
  const txtColorInverter = theme === "dark" ? "text-white" : "text-black"
  const menuItems = [
    "home",
    "portfolio",
    "skills",
    "introducing",
    "about",
    "download CV"
  ]


  const navMenuItems = (
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          {
            item === "download CV"
              ?
              <CstmButton name={item} />
              :
              <Link className="capitalize" href={item === 'home' ? '/' : item}>
                {item}
              </Link>
          }
        </NavbarMenuItem>
      ))}
      <NavbarMenuItem>
        <CstmButton>
          <Link className={theme === "dark" ? "text-black font-bold capitalize" : "text-white font-bold capitalize"} href='/update'>Update</Link>
        </CstmButton>
      </NavbarMenuItem>
    </NavbarMenu>)



  return (
    <>
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
            <Image src={theme === "dark"? WLogo : BLogo} width={60} height={60} alt="Logo"/>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-5" justify="center">
          <NavbarBrand>
            <Image src={theme === "dark"? WLogo : BLogo} width={60} height={60} alt="Logo"/>
          </NavbarBrand>
          {
            menuItems.map((item, index) => (
              <NavbarItem key={index}>
                {
                  item !== "download CV"
                    ?
                    <Link className="capitalize" href={item === 'home' ? '/' : item}>
                      {item}
                    </Link>
                    :
                    windowScrollY >= 560
                    &&
                    <CstmButton name={item} />
                }
              </NavbarItem>
            ))
          }
        </NavbarContent>

        <NavbarContent justify="end">
          {/* <GithubIcon /> */}
          <CstmPopOver title="Skill improvment" content="Belum ada yang baru">
            <Button isIconOnly variant="light">
              <CycleIcon color={txtColorInverter} style="cursor-pointer" />
            </Button>
          </CstmPopOver>

          <NavbarItem>
            <Switch
              size="sm"
              color="default"
              thumbIcon={({ isSelected, className }) => {
                if (isSelected) {
                  setTheme('dark')
                  return <SunIcon className={className} />
                } else {
                  setTheme('light')
                  return <MoonIcon className={className} />
                }
              }}>
            </Switch>
          </NavbarItem>
        </NavbarContent>
        {navMenuItems}
      </Navbar>

      {children}
    </>
  )
}

export default NavigationBar
