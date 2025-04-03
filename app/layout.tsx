import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COGAAN - Coding Gaming and Animation",
  description: "Official website of COGAAN - Coding Gaming and Animation Club",
  generator: "v0.dev",
  openGraph: {
    images: [
      {
        url: "/images/LogoBlackBg.jpeg",
        width: 1200,
        height: 630,
        alt: "COGAAN Logo",
      },
    ],
  },
  icons: {
    icon: "/images/LogoBlackBg.jpeg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'