import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import React from "react"

import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6"

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

  return (
    <>
      <footer className="container z-10 bg-gradient-to-t from-[#0C2853] to-black rounded-3xl text-white pb-10 pt-2 lg:pb-6 lg:pt-10 shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center">
            <a href="/#" className="flex justify-center items-center">
              <Image
                src="/logo-white.svg"
                alt="logo"
                width={30}
                height={30}
                className="min-w-[200px]"
              />
              <span className="text-[52px] bg-gradient-to-t from-[#0C2853] to-white bg-clip-text text-transparent">
                Valhalla Dev
              </span>
            </a>
            <div className="flex flex-col items-center">
              <h4 className="mb-4 text-3xl font-semibold">
                Nos siga nas redes sociais
              </h4>
              <div className="flex">
                <a href="javascript:void(0)" className="">
                  <FaWhatsapp size={40} />
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex items-center justify-center rounded-full  text-dark hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaInstagram size={40} className="hover:text-pink-800" />
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaGithub size={40} />
                </a>
              </div>
            </div>
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
            <LinkGroup header="Quick Links">
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
