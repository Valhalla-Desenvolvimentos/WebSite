"use-client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  const totalLoadingTime = 3600

  const updateInterval = totalLoadingTime / 100 // Atualiza 100 vezes durante o tempo total

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1
        if (newProgress >= 100) {
          clearInterval(intervalId)
        }
        return newProgress
      })
    }, updateInterval) // Intervalo de atualização calculado

    return () => clearInterval(intervalId)
  }, [updateInterval])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg[radial-gradient(ellipse at bottom, #1b3a60 0%, #0c0d13 100%);] z-50">
      <Image
        src="./logo.svg"
        alt="Loading"
        width={200}
        height={200}
        className="animate-[spin_5s_linear_infinite] w-1/2 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      />

      <div className="text-center mt-4 text-white">
        <h1 className="font-norse text-4xl md:text-8xl bg-gradient-to-t from-primary to-white bg-clip-text text-transparent">
          Valhalla Dev
        </h1>
        <p className="text-xl md:text-2xl bg-gradient-to-t from-primary to-white bg-clip-text text-transparent">
          Forjando códigos épicos
        </p>
      </div>

      {/* Barra de Progresso */}
      <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-secondary transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
