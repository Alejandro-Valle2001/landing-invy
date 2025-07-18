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
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            poster="/assests/herovideo-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assests/herovideo.mp4" type="video/mp4" />
          </video>
          
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
               <span className="bg-yellow-300 text-black px-2 py-1 rounded">¿Estás perdiendo dinero por culpa de tu inventario?</span>
             </motion.p>

             {/* Headline */}
             <motion.h1 
               className="text-2xl sm:text-3xl font-black leading-tight tracking-tighter mb-6 text-white"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               Dale inteligencia a tu inventario y deja de perder ventas
             </motion.h1>

             {/* Description */}
             <motion.div 
               className="space-y-3 mb-8 max-w-md"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               <p className="text-sm text-white leading-relaxed font-semibold">
                 ✅ Stock inteligente = más ganancias
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
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base"
                containerClassName="w-full h-auto"
                borderClassName="h-20 w-20 bg-[radial-gradient(#3b82f6_60%,transparent_40%)] opacity-[1]"
              >
                <div className="flex items-center justify-center py-3 px-6">
                  Prueba Gratis
                </div>
              </MovingBorderButton>
              
              <button 
                onClick={() => {
                  const section = document.getElementById('testimonios');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 hover:bg-white/30"
              >
                Ver casos de éxito
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Video background card */}
      <div className="hidden lg:flex justify-center">
        <motion.div
          className="relative bg-black rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Video */}
          {shouldLoadVideo && !isSlowConnection ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              poster="/assests/herovideo-poster.jpg"
              onLoadedData={handleVideoLoad}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assests/herovideo.mp4" type="video/mp4" />
            </video>
          ) : (
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assests/herovideo-poster.jpg)' }}
            ></div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 flex justify-center items-center min-h-[80vh] lg:min-h-[700px] p-8 lg:p-16">
            
            {/* Centered Content */}
            <div className="max-w-2xl text-center space-y-8">
              
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
                <span className="bg-yellow-300 text-black px-2 py-1 rounded">¿Estás perdiendo dinero por culpa de tu inventario?</span>
              </motion.p>

              {/* Headline */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tighter text-white">
                  Dale inteligencia a tu inventario y deja de perder ventas
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-base text-white leading-relaxed font-semibold">
                  ✅ Stock inteligente = más ganancias
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  ❌ Exceso de stock = dinero atrapado
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  ❌ Sin stock = ventas perdidas
                </p>
                <p className="text-lg text-white font-medium mt-4">
                  Controla y predice tu inventario con INVY
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button 
                  onClick={() => {
                    const section = document.getElementById('testimonios');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 hover:bg-white/30"
                >
                  Ver casos de éxito
                </button>
                
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
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base"
                  containerClassName="w-auto h-auto"
                  borderClassName="h-20 w-20 bg-[radial-gradient(#3b82f6_60%,transparent_40%)] opacity-[1]"
                >
                  <div className="flex items-center justify-center py-3 px-6">
                    Prueba Gratis
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
