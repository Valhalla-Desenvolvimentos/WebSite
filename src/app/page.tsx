import Image from "next/image"

import { Button } from "@/components/ui/button"
import Footer from "./components/Footer/Footers"
import Stars from "./components/Stars/stars"
import Faq from "./components/Faq/Faq"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="text-red-400">HelloWorld</h1>
      <Button>Click me</Button>

      <Faq />

      <Footer />
      <Stars />
    </main>
  )
}
