'use client'

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { ArchLinuxIcon, LinuxIcon, CssIcon, HtmlIcon, HtmlOutlineIcon, JavaScriptIcon, JavascriptOutlineIcon, NextjsIcon, NextjsOutlineIcon, ReactJSIcon, TailwindIcon, TypescriptIcon, TypescriptOutlineIcon } from "../svg/icons"



type TProps = {
  iconName: 'nextjs' | 'nextjsoutline' | 'typescript' | 'typescriptoutline' | 'javascript' | 'Javascriptoutline' | 'html' | 'htmloutline' | 'css' | 'tailwind' | 'reactjs' | 'arclinux' | 'linux'
  size: number
  color?: string | 'default'
}

type TIcons = {
  name: string
  icon: React.ReactNode
}

export default function DynamicIcons({ size, iconName, color }: TProps) {

  const { theme } = useTheme()
  const [themeSwitcher, setThemeSwitcher] = useState<string | undefined>('')
  const themeColor = color ? color : themeSwitcher === "dark" ? "#ffffff" : "#000000"
  const icons: TIcons[] = [
    { name: 'nextjs', icon: <NextjsIcon size={size} /> },
    { name: 'nextjsoutline', icon: <NextjsOutlineIcon size={size} color={themeColor} /> },
    { name: 'typescript', icon: <TypescriptIcon size={size} color={themeColor} /> },
    { name: 'typescriptoutline', icon: <TypescriptOutlineIcon size={size} color={themeColor} /> },
    { name: 'javascript', icon: <JavaScriptIcon size={size} color={themeColor} /> },
    { name: 'Javascriptoutline', icon: <JavascriptOutlineIcon size={size} color={themeColor} /> },
    { name: 'html', icon: <HtmlIcon size={size} color={themeColor} /> },
    { name: 'htmloutline', icon: <HtmlOutlineIcon size={size} color={themeColor} /> },
    { name: 'css', icon: <CssIcon size={size} color={themeColor} /> },
    { name: 'tailwind', icon: <TailwindIcon size={size} color={themeColor} /> },
    { name: 'reactjs', icon: <ReactJSIcon size={size} color={themeColor} /> },
    { name: 'arclinux', icon: <ArchLinuxIcon size={size} color={themeColor} /> },
    { name: 'linux', icon: <LinuxIcon size={size} color={themeColor} /> },
  ]

  useEffect(() => setThemeSwitcher(theme), [theme])

  return icons.find(icon => icon.name === iconName)?.icon
}
