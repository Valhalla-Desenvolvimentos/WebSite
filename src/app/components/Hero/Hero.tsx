import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-16">
      {/* Coluna da esquerda */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="lg:w-1/2 flex flex-col items-start justify-center"
      >
        <span className="text-sm text-secondary mb-4">
          Forjando códigos épicos
        </span>
        <h1 className="text-5xl font-bold mb-4 text-white neon">
          Bem-vindo à <span className="text-primary">Valhalla Dev</span>
        </h1>

        <p className="text-lg text-white mb-6 ">
          Desenvolvemos soluções digitais exclusivas para levar sua empresa ao
          próximo nível.
        </p>
        <Link href="/contato">
          <span className="px-6 py-3 text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 focus:outline-none shadow-lg hover:shadow-[0_0_10px_rgba(0,150,255,0.5),0_0_20px_rgba(0,150,255,0.5),0_0_30px_rgba(0,150,255,0.5)]">
            Entre em contato
          </span>
        </Link>
      </motion.div>

      {/* Coluna da direita */}
      <div className="lg:w-1/2 flex justify-center lg:justify-center mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center w-full h-full"
        >
          <Image
            src="/frame1.png" // Altere para o caminho correto da imagem
            alt="Hero"
            width={500}
            height={500}
            className="object-cover rounded-md skew-y-3"
          />
        </motion.div>
      </div>
    </section>
  )
}
