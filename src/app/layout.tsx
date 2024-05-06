"use-client"

import type { Metadata } from "next"
import { Nova_Flat } from "next/font/google"
import "./globals.scss"

import localFont from "next/font/local"

const norse = localFont({
  src: [
    {
      path: "../../public/fonts/Norse.otf"
    }
  ],
  variable: "--font-norse"
})

const novaFlat = Nova_Flat({
  weight: "400",
  subsets: ["latin"] // Adicionando a configuração de subsets
})

export const metadata: Metadata = {
  title: "Valhalla Dev",
  description:
    "Criando sites, sistemas web e aplicativos com tecnologia moderna e mitológica!",
  icons: {
    icon: "/vercel.svg"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${norse.variable} ${novaFlat.className}`}
        suppressHydrationWarning={true}
      >
        <link rel="icon" href="/logo.svg" sizes="any" />
        {children}
      </body>
    </html>
  )
}
