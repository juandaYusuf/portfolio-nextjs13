'use client'

import CstmButton from "@/app/components/cstmButton";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NavMenus() {

  const { theme } = useTheme()
  const menuItems = [
    "home",
    "portfolio",
    "skills",
    "introducing",
    "about",
    "download CV"
  ]

  return (
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
    </NavbarMenu>
  )
} 