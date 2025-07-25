"use client";

import { useState, useEffect } from "react";

const PromoBanner = () => {
  // Estado para almacenar el tiempo restante (solo 24 horas como máximo)
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Intentar recuperar el tiempo objetivo guardado en localStorage
    let targetTime;
    const savedTargetTime = localStorage.getItem('promoCountdownTarget');
    
    if (savedTargetTime) {
      // Si hay un tiempo guardado, lo usamos
      targetTime = parseInt(savedTargetTime);
      
      // Si el tiempo ya pasó, creamos uno nuevo (24 horas desde ahora)
      const now = new Date().getTime();
      if (targetTime <= now) {
        targetTime = now + (24 * 60 * 60 * 1000); // 24 horas desde ahora
        localStorage.setItem('promoCountdownTarget', targetTime.toString());
      }
    } else {
      // Si no hay tiempo guardado, establecer 24 horas desde ahora
      targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
      localStorage.setItem('promoCountdownTarget', targetTime.toString());
    }
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        // Todavía queda tiempo
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Si el tiempo llegó a cero, reiniciar con 24 horas más
        const newTargetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('promoCountdownTarget', newTargetTime.toString());
        setTimeLeft({ hours: 24, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white py-3 px-4 text-center relative overflow-hidden">
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 max-w-6xl mx-auto">
        {/* Contador */}
        <div className="flex items-center gap-1 text-lg font-bold">
          <span className="bg-white/20 px-2 py-1 rounded text-sm">
            {formatTime(timeLeft.hours)}
          </span>
          <span className="text-sm">:</span>
          <span className="bg-white/20 px-2 py-1 rounded text-sm">
            {formatTime(timeLeft.minutes)}
          </span>
          <span className="text-sm">:</span>
          <span className="bg-white/20 px-2 py-1 rounded text-sm">
            {formatTime(timeLeft.seconds)}
          </span>
        </div>

        {/* Texto promocional */}
        <div className="text-sm md:text-base font-medium">
          Empieza hoy y obtén un <span className="font-bold">50% de descuento en tu primer mes</span>
        </div>

        {/* Botón CTA */}
        <a
          href="https://app.invyperu.com/formulario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
        >
          Aprovecha esta oferta ahora
        </a>
      </div>
    </div>
  );
};

export default PromoBanner; 