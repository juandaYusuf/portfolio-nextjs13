'use client'

import CstmButton from "@/components/cstmButton";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavMenus () {
  
  const { theme } = useTheme()
  const menuItems = [
    "home",
    "portfolio",
    "skills",
    "introducing",
    "about",
    "download CV"
  ]

  return(
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
    </NavbarMenu>
  )
} 