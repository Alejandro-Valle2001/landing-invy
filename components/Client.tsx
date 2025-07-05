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
                const playPromise = video.play();
                if (playPromise !== undefined) {
                  playPromise.catch((error) => {
                    console.log('Error en Intersection Observer:', error);
                  });
                }
              } else if (!entry.isIntersecting) {
                video.pause();
              }
            });
          },
          { threshold: 0.3 }
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
          // Intentar reproducir con manejo de errores mejorado
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log('Error al reproducir video:', error);
              // Si falla el autoplay, al menos asegurar que esté listo
              video.load();
            });
          }
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  // Reproducir el primer video al montar el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
        firstVideo.currentTime = 0;
        const playPromise = firstVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Error al reproducir primer video:', error);
          });
        }
      }
    }, 500); // Pequeño delay para asegurar que el video esté cargado

    return () => clearTimeout(timer);
  }, []);

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
    <section id="testimonios" className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80 mx-auto mb-4">
            Ellos ya lo usan
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-4">
            Transformando negocios reales
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo empresas como la tuya han transformado su gestión de inventario con nuestra plataforma.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-0">
          
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="space-y-6">
              
                             {/* Video Container - Mobile */}
               <div className="relative w-full max-w-sm mx-auto">
                 <div className="relative w-full h-[500px] bg-black rounded-2xl overflow-hidden shadow-2xl">
                   {clients.map((client, index) => (
                     <video
                       key={index}
                       ref={(el) => {
                         videoRefs.current[index] = el;
                       }}
                       className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer ${
                         index === currentIndex ? 'opacity-100' : 'opacity-0'
                       }`}
                       muted
                       loop
                       playsInline
                       autoPlay={index === currentIndex}
                       preload="metadata"
                       onClick={() => {
                         const video = videoRefs.current[index];
                         if (video && index === currentIndex) {
                           if (video.paused) {
                             video.play().catch(console.error);
                           } else {
                             video.pause();
                           }
                         }
                       }}
                     >
                       <source src={client.video} type="video/mp4" />
                       Tu navegador no soporta videos HTML5.
                     </video>
                   ))}
                  
                                     {/* Video Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                   
                   {/* Play Button Overlay - Mobile */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <button
                       onClick={() => {
                         const video = videoRefs.current[currentIndex];
                         if (video) {
                           if (video.paused) {
                             video.play().catch(console.error);
                           } else {
                             video.pause();
                           }
                         }
                       }}
                       className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 hover:opacity-100"
                       aria-label="Reproducir/Pausar video"
                     >
                       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                     </button>
                   </div>
                   
                   {/* Navigation Arrows */}
                   <button
                     onClick={prevSlide}
                     className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                     aria-label="Video anterior"
                   >
                     <FaChevronLeft size={16} />
                   </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                    aria-label="Siguiente video"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Dots Navigation - Mobile */}
              <div className="flex justify-center gap-2 py-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              {/* Content Section - Mobile */}
              <div className="text-center px-4">
                <div className="relative min-h-[280px]">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index === currentIndex 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                      }`}
                    >
                                             <blockquote className="text-base text-gray-700 mb-6 leading-relaxed italic max-w-sm mx-auto">
                         {client.testimonial}
                       </blockquote>
                      
                      {/* Client Info */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {client.name}
                        </h3>
                        <p className="text-sm text-blue-600 font-medium">
                          {client.position}
                        </p>
                        <p className="text-sm text-gray-600">
                          {client.company}
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3 justify-center pt-3">
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
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
                             {/* Video Section - Desktop */}
               <div className="relative">
                 <div className="relative w-full max-w-md h-[550px] mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl">
                   {clients.map((client, index) => (
                     <video
                       key={index}
                       ref={(el) => {
                         videoRefs.current[index] = el;
                       }}
                       className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer ${
                         index === currentIndex ? 'opacity-100' : 'opacity-0'
                       }`}
                       muted
                       loop
                       playsInline
                       autoPlay={index === currentIndex}
                       preload="metadata"
                       onClick={() => {
                         const video = videoRefs.current[index];
                         if (video && index === currentIndex) {
                           if (video.paused) {
                             video.play().catch(console.error);
                           } else {
                             video.pause();
                           }
                         }
                       }}
                     >
                       <source src={client.video} type="video/mp4" />
                       Tu navegador no soporta videos HTML5.
                     </video>
                   ))}
                  
                                     {/* Video Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                   
                   {/* Play Button Overlay - Desktop */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <button
                       onClick={() => {
                         const video = videoRefs.current[currentIndex];
                         if (video) {
                           if (video.paused) {
                             video.play().catch(console.error);
                           } else {
                             video.pause();
                           }
                         }
                       }}
                       className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 hover:opacity-100"
                       aria-label="Reproducir/Pausar video"
                     >
                       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                     </button>
                   </div>
                   
                   {/* Navigation Arrows */}
                   <button
                     onClick={prevSlide}
                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                     aria-label="Video anterior"
                   >
                     <FaChevronLeft size={16} />
                   </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                    aria-label="Siguiente video"
                  >
                    <FaChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Content Section - Desktop */}
              <div className="text-left">
                <div className="relative min-h-[400px]">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index === currentIndex 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                      }`}
                    >
                                             <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                         {client.testimonial}
                       </blockquote>
                      
                      {/* Client Info */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {client.name}
                        </h3>
                        <p className="text-base text-blue-600 font-medium">
                          {client.position}
                        </p>
                        <p className="text-base text-gray-600">
                          {client.company}
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3 pt-4">
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

            {/* Dots Navigation - Desktop */}
            <div className="flex justify-center mt-8 gap-2">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client; 