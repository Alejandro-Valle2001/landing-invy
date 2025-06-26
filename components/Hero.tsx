"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import WomanImage from "@/public/assests/woman.png";
import AlphaImage from "@/public/assests/alpha.jpg";
import MetaImage from "@/public/assests/meta.jpg";
import AgurtoImage from "@/public/assests/agurto.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={heroRef}
      className="bg-gray-50 px-4 lg:px-8 pt-12 pb-8"
    >
      {/* Mobile Layout - White card */}
      <div className="block lg:hidden">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Content centered in white card */}
          <div className="flex flex-col justify-center items-center px-6 py-12 text-center">
            
            {/* Social Proof */}
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex -space-x-3">
                <img
                  src={AlphaImage.src}
                  alt="Usuario satisfecho"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-lg"
                />
                <img
                  src={MetaImage.src}
                  alt="Usuario satisfecho"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-lg"
                />
                <img
                  src={AgurtoImage.src}
                  alt="Usuario satisfecho"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-lg"
                />
              </div>
                                           <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                <span className="font-bold text-gray-900">611</span> EMPRESAS YA AUMENTARON SUS VENTAS
              </span>
             </motion.div>

             {/* Opening Question */}
             <motion.p 
               className="text-lg sm:text-xl text-gray-700 font-medium mb-4"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
               <span className="bg-yellow-300 px-2 py-1 rounded">¿Tu inventario te está costando dinero?</span>
             </motion.p>

             {/* Headline */}
             <motion.h1 
               className="text-2xl sm:text-3xl font-black leading-tight tracking-tighter mb-6 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               Convierte tu stock en
               <span className="block">
                 una maquina de ventas
               </span>
             </motion.h1>

             {/* Description */}
             <motion.div 
               className="space-y-3 mb-8 max-w-md"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               <p className="text-sm text-gray-600 leading-relaxed">
                 ❌ Sin stock = ventas perdidas
               </p>
               <p className="text-sm text-gray-600 leading-relaxed">
                 ❌ Exceso de stock = dinero atrapado
               </p>
               <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                 ✅ Stock inteligente = más ganancias
               </p>
               <p className="text-base text-gray-700 font-medium mt-4">
                 Controla, predice y optimiza tu inventario con INVY
               </p>
             </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col gap-4 w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="https://app.invyperu.com/demo" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                Probar gratis
                <FaArrowRight className="text-sm" />
              </a>
              
              <button 
                onClick={() => {
                  const section = document.getElementById('testimonios');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 hover:shadow-md"
              >
                Ver casos de éxito
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex justify-center">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-7xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex min-h-[80vh] lg:min-h-[700px]">
            
            {/* Left Content - Text */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
              <div className="max-w-lg space-y-8">
                
                {/* Social Proof */}
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
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
                  <span className="text-base font-semibold text-gray-800 uppercase tracking-wide">
                    <span className="font-bold text-gray-900">611</span> EMPRESAS YA AUMENTARON SUS VENTAS
                  </span>
                </motion.div>

                {/* Opening Question */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="bg-yellow-300 px-2 py-1 rounded">¿Tu inventario te está costando dinero?</span>
                </motion.p>

                {/* Headline */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
                    Convierte tu stock en
                    <span className="block">
                      una maquina de ventas
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <p className="text-base text-gray-600 leading-relaxed">
                    ❌ Sin stock = ventas perdidas
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    ❌ Exceso de stock = dinero atrapado
                  </p>
                  <p className="text-base text-gray-800 leading-relaxed font-semibold">
                    ✅ Stock inteligente = más ganancias
                  </p>
                                     <p className="text-lg text-gray-700 font-medium mt-4">
                     Controla, predice y optimiza tu inventario con INVY
                   </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-start gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <button 
                    onClick={() => {
                      const section = document.getElementById('testimonios');
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 hover:shadow-md"
                  >
                    Ver casos de éxito
                  </button>
                  
                  <a href="https://app.invyperu.com/demo" target="_blank" rel="noopener noreferrer" className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                    Probar gratis
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Single Image */}
            <div className="relative flex-1 bg-gray-100 overflow-hidden rounded-r-3xl">
              <motion.div
                className="relative h-full w-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ translateY }}
              >
                {/* Single Main Image */}
                <img
                  src={WomanImage.src}
                  alt="Profesional gestionando inventario"
                  className="w-full h-full object-cover"
                />
                
                {/* Stock alert notification */}
                <motion.div 
                  className="absolute top-8 right-8 bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2 border border-gray-100"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800">Stock bajo detectado</span>
                </motion.div>

                {/* Inventory icon */}
                <motion.div 
                  className="absolute bottom-8 left-8 bg-white rounded-full p-4 shadow-xl border border-gray-100"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="relative">
                    {/* Blue dot indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                      <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
