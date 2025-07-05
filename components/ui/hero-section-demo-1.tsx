"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

export default function HeroSectionOne() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
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
        <Navbar />
        
        <div className="mt-12 text-center">
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
              href="https://app.invyperu.com/demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-60 transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <FaPlay className="text-sm" />
                Probar la demo gratuita
              </span>
            </a>
            <Link 
              href="/soporte"
              className="group w-60 transform rounded-xl border border-blue-200 bg-white/80 backdrop-blur-sm px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-blue-300 shadow-lg hover:shadow-xl hidden md:inline-block"
            >
              Hablar con un experto
            </Link>
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
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl bg-gray-900">
                    <video 
                      className="w-full h-auto aspect-video object-cover"
                      controls
                      preload="metadata"
                      poster="/assests/dashseparado.png"
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
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Elementos flotantes decorativos */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg"
              ></motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg"
              ></motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-6 w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
      <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold">
        <FaArrowLeft className="mr-2" />
        Volver al inicio
      </Link>
      <a 
        href="https://app.invyperu.com/demo" 
        target="_blank"
        rel="noopener noreferrer"
        className="transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
      >
        Demo gratis
      </a>
    </nav>
  );
}; 