"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import NavBar from "@/components/nav-bar"

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isRootPath = pathname === "/"

  return (
    <>
      {!isRootPath && <NavBar />}
      {children}
    </>
  )
}
