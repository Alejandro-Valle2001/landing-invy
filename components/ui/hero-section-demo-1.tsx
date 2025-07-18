"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Header from "../Header";

export default function HeroSectionOne() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen pt-6">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
        </div>

        {/* Puntos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/60 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-indigo-400/40 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-blue-400/50 rounded-full"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-8">
        
        <div className="mt-6 text-center">
          {/* Título principal */}
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold md:text-5xl lg:text-6xl">
            {"Invy en solo 3 minutos"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block bg-gradient-to-b from-gray-900 via-blue-800 to-blue-600 text-transparent bg-clip-text"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          {/* Texto descriptivo - Solo desktop */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-gray-600 hidden md:block"
          >
            Descubre cómo gestionar tu inventario de manera inteligente y eficiente.
            Una plataforma completa para optimizar tu negocio.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="https://app.invyperu.com/prueba30dias" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-80 transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <FaPlay className="text-sm" />
                Prueba Gratuita 30 días
              </span>
            </a>
          </motion.div>

          {/* Video container moderno */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative z-10 mt-12 md:mt-16"
          >
            <div className="relative mx-auto max-w-4xl">
              {/* Contenedor del video con efectos modernos */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Video container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-1 md:p-3 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl bg-gray-900">
                    <video 
                      className="w-full h-auto aspect-video object-contain"
                      controls
                      preload="metadata"
                      id="dashboard-video-hero"
                    >
                      <source src="/assests/0703.mp4" type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                    
                    {/* Botón de play moderno */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/20 to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-300 cursor-pointer opacity-100 hover:opacity-0"
                      onClick={() => {
                        const video = document.getElementById('dashboard-video-hero') as HTMLVideoElement;
                        if (video) {
                          video.play();
                          (video.parentElement?.querySelector('.absolute') as HTMLElement).style.display = 'none';
                        }
                      }}
                    >
                      <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1 animate-pulse">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full w-full h-full"></div>
                        </div>
                        
                        {/* Play button */}
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                          <FaPlay className="w-8 h-8 text-blue-600 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicadores decorativos */}
                  <div className="absolute top-3 left-3 md:top-6 md:left-6 flex gap-1 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </>
  );
}

 