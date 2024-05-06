"use client"

import Footer from "./components/Footer/Footers"
import Stars from "./components/Stars/stars"
import Faq from "./components/Faq/Faq"
import Header from "./components/Header/Header"
import { useEffect, useState } from "react"
import Loading from "./components/Loading/Loagind"
import Hero from "./components/Hero/Hero"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-[var(--novaFlat)]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Hero />
          <Faq />
          <Footer />
          <Stars />
        </>
      )}
    </main>
  )
}
