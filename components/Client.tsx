"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const clients = [
    {
      name: "Nicolas Valle",
      position: "CEO y fundador",
      company: "@alphafit.pe",
      testimonial: "Lo que mas me gusta de Invy es que es super intuitivo y facil de usar, y tiene todo lo necesario para la gestion de mi marca deportiva.",
      video: "/assests/alphawomen.mp4",
      social: {
        facebook: "https://www.facebook.com/alphafit.pe",
        whatsapp: "https://wa.me/51946002785",
        instagram: "https://www.instagram.com/alphafit.pe"
      }
    },
    {
      name: "Luis Bernal",
      position: "CEO y fundador",
      company: "@metaverso.group",
      testimonial: "Llevábamos años controlando todo en Excel, y siempre se nos pasaba algo. Desde que usamos esta plataforma, tenemos orden en los almacenes y nuestros alumnos también la entienden fácil. Es una solución práctica que de verdad usamos en el día a día.",
      video: "/assests/metaverso.mp4",
      social: {
        tiktok: "https://www.tiktok.com/@elblogdeluis?_t=ZM-8wgobwEpY98&_r=1",
        whatsapp: "https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2F63gwcs%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacVpTkd1aCNMXgHyi69F8FZCno_l1gFa9EYOMWqSmxpBHw0Tj4Jtl3ZG6KiQw_aem_qC86t7IXOYnbXDvIY5S3Lw&e=AT2uKxsu6up0OFR_im3XV8VY9ROwTr2TIIFzYxDITcYYnae5wt7NulmJTkXmonwPVEtk9_Y9uGGgAKZnm17F0XR-KggYZZ_Iw5wZTA",
        instagram: "https://www.instagram.com/metaverso.group/"
      }
    }
  ];

  // Intersection Observer para reproducir videos automáticamente
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && index === currentIndex) {
                video.play().catch(console.error);
              } else {
                video.pause();
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [currentIndex]);

  // Reproducir video cuando cambia el índice
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonios" className="min-h-screen flex flex-col justify-center py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="border-2 w-fit p-0.5 px-3 text-xs sm:text-sm rounded-xl border-slate-300/80 mx-auto mb-3 sm:mb-4">
          Ellos ya lo usan
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-3 sm:mb-4 px-4">
          Transformando negocios reales
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Descubre cómo empresas como la tuya han transformado su gestión de inventario con nuestra plataforma.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative flex-1 flex items-center">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full">
            
            {/* Video Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-[400px] sm:h-[500px] lg:h-[550px] mx-auto bg-black rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                {clients.map((client, index) => (
                                     <video
                     key={index}
                     ref={(el) => {
                       videoRefs.current[index] = el;
                     }}
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                       index === currentIndex ? 'opacity-100' : 'opacity-0'
                     }`}
                     style={{ minHeight: '500px' }}
                     muted
                     loop
                     playsInline
                     preload="metadata"
                   >
                    <source src={client.video} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                ))}
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                  aria-label="Video anterior"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                  aria-label="Siguiente video"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
              <div className="relative min-h-[250px] lg:min-h-[300px]">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentIndex 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    {/* Quote */}
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 mb-2 lg:mb-3 font-serif leading-none">&quot;</div>
                    <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 lg:mb-4 leading-relaxed italic">
                      {client.testimonial}
                    </blockquote>
                    
                    {/* Client Info & Social Links - Todo junto */}
                    <div className="space-y-1 lg:space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {client.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-600 font-medium">
                        {client.position}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 lg:mb-3">
                        {client.company}
                      </p>
                      
                      {/* Social Links integrados */}
                      <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
                        {client.social.facebook && (
                          <a 
                            href={client.social.facebook} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                            aria-label="Facebook"
                          >
                            <FaFacebook size={16} />
                          </a>
                        )}
                        {client.social.tiktok && (
                          <a 
                            href={client.social.tiktok} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                            aria-label="TikTok"
                          >
                            <FaTiktok size={16} />
                          </a>
                        )}
                        {client.social.whatsapp && client.social.whatsapp !== "#" && (
                          <a 
                            href={client.social.whatsapp} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                            aria-label="WhatsApp"
                          >
                            <FaWhatsapp size={16} />
                          </a>
                        )}
                        {client.social.instagram && client.social.instagram !== "#" && (
                          <a 
                            href={client.social.instagram} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                            aria-label="Instagram"
                          >
                            <FaInstagram size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client; 