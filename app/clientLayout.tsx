"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/nav-bar"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isRootPath = pathname === "/"

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/netflix-sans" rel="stylesheet" />
      </head>
      <body className="bg-[#141414] text-white min-h-screen font-netflix-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {!isRootPath && <NavBar />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
