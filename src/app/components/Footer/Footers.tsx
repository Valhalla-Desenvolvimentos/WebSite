"use-client"

import { Separator } from "@/app/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import MeuSVG from "../../../../public/logo.svg"

import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import Logo from "../LogoSVG/LogoSVG"
import LogoSVG from "../LogoSVG/LogoSVG"

const Footer = () => {
  const LinkGroup = ({ children, header }) => {
    return (
      <>
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="mb-10 w-full">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              {header}
            </h4>
            <ul className="space-y-3">{children}</ul>
          </div>
        </div>
      </>
    )
  }

  const NavLink = ({ link, label }) => {
    return (
      <li>
        <a
          href={link}
          className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
        >
          {label}
        </a>
      </li>
    )
  }

  const currentYear = new Date().getFullYear()

  const fillVariants = {
    hidden: {
      fill: "none" // Preenchimento inicial transparente
    },
    visible: {
      fill: "rgba(0, 150, 255, 1)", // Preenchimento azul completo
      transition: {
        duration: 2, // Duração da animação (2 segundos)
        ease: "easeInOut"
      }
    }
  }
  const circleVariants = {
    hidden: {
      fill: "rgba(0, 150, 255, 0)",
      strokeDasharray: 314,
      strokeDashoffset: 314
    },
    visible: {
      fill: "rgba(0, 150, 255, 1)",
      strokeDasharray: 314,
      strokeDashoffset: 0,
      transition: {
        duration: 2, // Duração da animação (2 segundos)
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <footer className="container z-10 bg-gradient-to-t from-primary to-black rounded-3xl text-white pb-10 pt-2 lg:pb-6 lg:pt-10 shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center">
            <a href="/#" className="flex justify-center items-center">
              <Image
                src="/secundario.svg"
                alt="logo"
                width={30}
                height={30}
                className="min-w-[180px]"
              />

              <LogoSVG />

              <span className="text-[52px] bg-gradient-to-t from-primary to-white bg-clip-text text-transparent font-norse">
                Valhalla Dev
              </span>
            </a>
            {/* <div className="flex flex-col items-center">
              <h4 className="mb-4 text-3xl font-semibold">
                Nos siga nas redes sociais
              </h4>
              <div className="flex">
                <div className="bg-gradient-to-t ring-1 ring-primary from-primary to-blue-900 ring-inset hover:ring-re text-white duration-300 ease-in-out h-full p-4 rounded-md  hover:-translate-y-1.5 hover:from-primary hover:to-blue-950 hover:drop-shadow-lg">
                  <Link href="/">
                    <FaWhatsapp size={40} />
                  </Link>
                </div>
                <div className="mr-3 flex items-center justify-center rounded-full  text-dark hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                  <Link href="/">
                    <FaInstagram size={40} className="hover:text-pink-800" />
                  </Link>
                </div>
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                  <Link href="/">
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <Separator />
          <div className="flex flex-wrap pt-10">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  Forjando códigos épicos para você.
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Contato">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>
          </div>
        </div>
        <Separator />
        <div className="pt-4">
          <div className="text-center">
            <p>&copy; {currentYear} - Valhalla Dev</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
