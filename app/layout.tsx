import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/nav-bar"

export const metadata = {
  title: "Personal Portfolio",
  description: "A Netflix-inspired personal portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/netflix-sans" rel="stylesheet" />
      </head>
      <body className="bg-[#141414] text-white min-h-screen font-netflix-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
