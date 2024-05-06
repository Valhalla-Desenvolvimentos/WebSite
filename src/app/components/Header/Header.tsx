"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { titleVariants } from "@/utils/motion"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  // Adiciona um evento de rolagem para controlar o estado `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const menuItems = [
    { label: "Sobre", href: "/about" },
    { label: "Serviços", href: "/services" },
    { label: "Contato", href: "/contact" }
  ]

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4
      }
    })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 p-2 pb-0 md:pb-4 backdrop-blur-[30px] shadow-lg shadow-primary bg-white/5 transition-all ${
        isScrolled
          ? "backdrop-blur-md bg-white/5 shadow-md shadow-blue-900 border-t-blue-900 "
          : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="flex items-center">
          <Image
            src="./secundario.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <span className="text-4xl md:text-5xl bg-gradient-to-t from-primary to-white bg-clip-text text-transparent font-norse">
            Valhalla Dev
          </span>
        </Link>

        {/* Menu de navegação normal */}
        <nav className="hidden md:flex gap-4 h-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              custom={index} // Índice para o delay de animação
              className="relative h-full p-4 text-white hover:text-secondary rounded-md hover:-translate-y-1.5 duration-300 ease-in-out hover:after:w-full hover:after:bg-secondary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300"
            >
              <Link href={item.href}>
                <span className="">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Botão de menu hamburguer para dispositivos móveis */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu móvel */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4  h-full">
          {menuItems.map(item => (
            <Link key={item.label} href={item.href} className="">
              <span className="block p-2 text-gray-300 border-t border-gray-400 text-center">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
