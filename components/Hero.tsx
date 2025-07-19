"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import WomanImage from "@/public/assests/woman.png";
import AlphaImage from "@/public/assests/alpha.jpg";
import MetaImage from "@/public/assests/meta.jpg";
import AgurtoImage from "@/public/assests/agurto.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

// Declarar el tipo para Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

const Hero = () => {
  const heroRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Detectar conexión lenta
  useEffect(() => {
    // @ts-ignore
    if (navigator.connection) {
      // @ts-ignore
      const connection = navigator.connection;
      const slowConnections = ['slow-2g', '2g', '3g'];
      if (slowConnections.includes(connection.effectiveType) || connection.saveData) {
        setIsSlowConnection(true);
      }
    }
  }, []);

  // Cargar video solo cuando el componente está visible y no hay conexión lenta
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSlowConnection) {
            setShouldLoadVideo(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [isSlowConnection]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Función para crear poster del video si no existe
  const generateVideoPoster = (videoElement: HTMLVideoElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      ctx.drawImage(videoElement, 0, 0);
      return canvas.toDataURL('image/jpeg', 0.8);
    }
    return '';
  };

  return (
    <section
      ref={heroRef}
      className="bg-white px-4 lg:px-8 pt-6 pb-8"
    >
      {/* Mobile Layout - Video background card */}
      <div className="block lg:hidden">
        <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/assests/fotohero.jpg)' }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Content centered in card */}
          <div className="relative z-10 flex flex-col justify-center items-center px-6 py-12 text-center">
            
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
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                <span className="font-bold text-white">611</span> EMPRESAS YA LO USAN
              </span>
             </motion.div>

             {/* Opening Question */}
             <motion.p 
               className="text-lg sm:text-xl text-white font-medium mb-4"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
               <span className="bg-yellow-300 text-black px-2 py-1 rounded">¿Tienes una tienda y necesitas un mejor control de ventas?</span>
             </motion.p>

             {/* Headline */}
             <motion.h1 
               className="text-2xl sm:text-3xl font-black leading-tight tracking-tighter mb-6 text-white"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               Ordena tu inventario, aumenta tus ventas y gestiona tus clientes desde cualquier lugar.
             </motion.h1>

             {/* Description */}
             <motion.div 
               className="space-y-3 mb-8 max-w-md"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               <p className="text-sm text-white leading-relaxed">
                 Empieza gratis hoy. Nosotros te guiamos paso a paso.
               </p>
             </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col gap-4 w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MovingBorderButton
                borderRadius="1rem"
                as="a"
                href="https://app.invyperu.com/prueba30dias"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'InitiateCheckout');
                  }
                }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base"
                containerClassName="w-full h-auto"
                borderClassName="h-20 w-20 bg-[radial-gradient(#eab308_60%,transparent_40%)] opacity-[1]"
              >
                <div className="flex flex-col items-center justify-center py-3 px-6">
                  <span>Pruébalo por 30 días gratis</span>
                  <span className="text-xs mt-1 opacity-80">
                    (Oferta disponible hasta el {(() => {
                      const today = new Date();
                      const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
                      const cycleDay = daysSinceEpoch % 4;
                      const daysToAdd = 4 - cycleDay;
                      const offerEndDate = new Date(today.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
                      return offerEndDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
                    })()})
                  </span>
                </div>
              </MovingBorderButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Video background card */}
      <div className="hidden lg:flex justify-center">
        <motion.div
          className="relative bg-black rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/assests/fotohero.jpg)' }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 flex justify-center items-center min-h-[80vh] lg:min-h-[700px] p-8 lg:p-16">
            
            {/* Centered Content */}
            <div className="max-w-4xl text-center space-y-8">
              
              {/* Social Proof */}
              <motion.div 
                className="flex items-center justify-center gap-3"
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
                <span className="text-base font-semibold text-white uppercase tracking-wide">
                  <span className="font-bold text-white">611</span> EMPRESAS YA LO USAN
                </span>
              </motion.div>

              {/* Opening Question */}
              <motion.p 
                className="text-xl lg:text-2xl text-white font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="bg-yellow-300 text-black px-2 py-1 rounded">¿Tienes una tienda y necesitas un mejor control de ventas?</span>
              </motion.p>

              {/* Headline */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tighter text-white">
                  Ordena tu inventario, aumenta tus ventas y gestiona tus clientes desde cualquier lugar.
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg text-white font-medium">
                  Empieza gratis hoy. Nosotros te guiamos paso a paso.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex justify-center pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <MovingBorderButton
                  borderRadius="1rem"
                  as="a"
                  href="https://app.invyperu.com/prueba30dias"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.fbq) {
                      window.fbq('track', 'InitiateCheckout');
                    }
                  }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base"
                  containerClassName="w-auto h-auto"
                  borderClassName="h-20 w-20 bg-[radial-gradient(#eab308_60%,transparent_40%)] opacity-[1]"
                >
                  <div className="flex flex-col items-center justify-center py-3 px-6">
                    <span>Pruébalo por 30 días gratis</span>
                    <span className="text-xs mt-1 opacity-80">
                      (Oferta disponible hasta el {(() => {
                        const today = new Date();
                        const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
                        const cycleDay = daysSinceEpoch % 4;
                        const daysToAdd = 4 - cycleDay;
                        const offerEndDate = new Date(today.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
                        return offerEndDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
                      })()})
                    </span>
                  </div>
                </MovingBorderButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
