"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import DashHeroImage from "@/public/assests/dashhero.png";
import AlphaImage from "@/public/assests/alpha.jpg";
import MetaImage from "@/public/assests/meta.jpg";
import AgurtoImage from "@/public/assests/agurto.jpg";

// Declarar el tipo para Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-black px-4 lg:px-8 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido de texto */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Social Proof */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex -space-x-3">
                <img
                  src={AlphaImage.src}
                  alt="Usuario satisfecho"
                  className="w-10 h-10 rounded-full border-3 border-white object-cover shadow-lg"
                />
                <img
                  src={MetaImage.src}
                  alt="Usuario satisfecho"
                  className="w-10 h-10 rounded-full border-3 border-white object-cover shadow-lg"
                />
                <img
                  src={AgurtoImage.src}
                  alt="Usuario satisfecho"
                  className="w-10 h-10 rounded-full border-3 border-white object-cover shadow-lg"
                />
              </div>
              <span className="text-base font-semibold text-white uppercase tracking-wide">
                SÉ PARTE DE INVY
              </span>
            </motion.div>

            {/* Título principal */}
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Controla tu inventario con
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                  el sistema #1 para emprendedores en Perú
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Automatiza procesos y olvídate del Excel complicado con Invy, la herramienta fácil y asequible para tu negocio
              </motion.p>
            </div>

            {/* Botón CTA */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="https://app.invyperu.com/formulario"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'InitiateCheckout');
                    window.fbq('trackCustom', 'HeroCTAClick', {
                      button_text: 'Quiero INVY para mi negocio',
                      section: 'hero_main',
                      page: 'homepage'
                    });
                  }
                }}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Quiero INVY para mi negocio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>


          </motion.div>

          {/* Imagen del dashboard */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-3xl shadow-2xl border border-gray-700">
              <Image
                src={DashHeroImage}
                alt="Dashboard de Invy - Sistema de gestión empresarial"
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
              />
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
