"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clients = [
    {
      name: "Luis Bernal",
      position: "CEO y fundador",
      company: "@metaverso.group",
      testimonial: "Antes en Excel siempre se nos pasaba algo. Ahora con esta plataforma todo está ordenado y es fácil de usar para todos.",
      video: "/assests/metaverso.mp4",
      social: {
        tiktok: "https://www.tiktok.com/@elblogdeluis?_t=ZM-8wgobwEpY98&_r=1",
        whatsapp: "https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2F63gwcs%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacVpTkd1aCNMXgHyi69F8FZCno_l1gFa9EYOMWqSmxpBHw0Tj4Jtl3ZG6KiQw_aem_qC86t7IXOYnbXDvIY5S3Lw&e=AT2uKxsu6up0OFR_im3XV8VY9ROwTr2TIIFzYxDITcYYnae5wt7NulmJTkXmonwPVEtk9_Y9uGGgAKZnm17F0XR-KggYZZ_Iw5wZTA",
        instagram: "https://www.instagram.com/metaverso.group/"
      }
    },
    {
      name: "Nicolas Valle",
      position: "CEO y fundador",
      company: "@alphafit.pe",
      testimonial: "Me encanta que sea bien fácil de usar y tiene todo lo que necesito para manejar mi inventario para mi marca de ropa deportiva.",
      video: "/assests/alphawomen.mp4",
      social: {
        facebook: "https://www.facebook.com/alphafit.pe",
        whatsapp: "https://wa.me/51946002785",
        instagram: "https://www.instagram.com/alphafit.pe"
      }
    }
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
      if (video) {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("La reproducción automática del video fue bloqueada.", error);
            });
          }
    }
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
  };

  const currentClient = clients[currentIndex];

  return (
    <section id="testimonios" className="pt-6 pb-0 md:pt-8 md:pb-0 lg:pt-10 lg:pb-0 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80 mx-auto mb-4">
            Ellos ya lo usan
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-4">
            Transformando negocios reales
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto hidden md:block">
            Descubre cómo empresas como la tuya han transformado su gestión de inventario con nuestra plataforma.
          </p>
        </div>

        {/* --- Testimonial Carousel --- */}
        <div className="relative">
          <div className="min-h-[550px] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full p-2 md:p-0">
                  {/* Card for Mobile, Flex container for Desktop */}
                  <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row md:items-center md:space-x-12">
                    
                    {/* Video */}
                    <div className="w-full md:w-1/2 lg:w-5/12">
                      <div className="aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-md bg-gray-900 group relative">
                        <video
                          ref={videoRef}
                          src={currentClient.video}
                          playsInline
                          loop
                          muted
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 lg:w-7/12 mt-6 md:mt-0 text-center md:text-left">
                      <p className="text-lg font-medium text-gray-700 leading-relaxed mb-4">
                        "{currentClient.testimonial}"
                      </p>
                      <div className="mb-4">
                        <p className="text-xl font-bold text-gray-900">{currentClient.name}</p>
                        <p className="text-blue-600 font-semibold">{currentClient.position}</p>
                        <p className="text-gray-500">{currentClient.company}</p>
                   </div>
                      <div className="flex items-center justify-center md:justify-start space-x-4">
                        {currentClient.social.facebook && (
                          <a href={currentClient.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors"><FaFacebook size={24}/></a>
                          )}
                        {currentClient.social.whatsapp && (
                          <a href={currentClient.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors"><FaWhatsapp size={24}/></a>
                          )}
                        {currentClient.social.instagram && (
                          <a href={currentClient.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors"><FaInstagram size={24}/></a>
                          )}
                        {currentClient.social.tiktok && (
                          <a href={currentClient.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors"><FaTiktok size={24}/></a>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-[70%] -translate-y-1/2 bg-white/50 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white/80 transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-[70%] -translate-y-1/2 bg-white/50 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white/80 transition-all duration-300 z-10"
            aria-label="Siguiente"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Client; 