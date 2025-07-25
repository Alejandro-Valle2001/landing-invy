"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

const ExcelVsInvy = () => {
  // Estado para controlar la posición del divisor
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Función para obtener posición desde evento (mouse o touch)
  const getPositionFromEvent = (e: MouseEvent | TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0]?.clientX ?? e.changedTouches[0]?.clientX : e.clientX;
    return clientX;
  };

  // Función para manejar el movimiento (mouse y touch)
  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    // Prevenir el comportamiento por defecto para evitar selección
    e.preventDefault();
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = getPositionFromEvent(e) - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, [isDragging]);

  // Función para manejar cuando termina la interacción
  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Función para iniciar el arrastre
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Efectos para agregar y remover event listeners
  React.useEffect(() => {
    if (isDragging) {
      // Event listeners para mouse
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      
      // Event listeners para touch (móvil)
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      
      // Prevenir selección de texto durante el arrastre
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    } else {
      // Restaurar selección de texto
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
      
      // Asegurar que se restaure la selección
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, [isDragging, handleMove, handleEnd]);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-gray-400 text-white mx-auto mb-4">
            Excel vs Invy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mb-4">
            Transformando la gestión de inventario
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Descubre cómo Invy supera las limitaciones de Excel para ofrecerte un control total sobre tu inventario con una interfaz moderna e intuitiva.
          </p>
        </div>

        {/* Componente de Comparación Personalizado */}
        <div className="mx-auto max-w-4xl">
          <div 
            ref={containerRef}
            className="relative w-full rounded-xl overflow-hidden border border-gray-600 select-none"
            style={{ 
              aspectRatio: "16 / 9",
              WebkitUserSelect: 'none',
              userSelect: 'none',
              WebkitTouchCallout: 'none',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {/* Imagen de Excel (lado izquierdo) */}
            <div className="absolute inset-0">
              <Image
                src="/assests/excel2.png"
                alt="Excel: Limitado y propenso a errores"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Imagen de Invy (lado derecho) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              <Image
                src="/assests/invydash.png"
                alt="Invy: Intuitivo y automatizado"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Línea divisoria y control deslizante */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10 select-none"
              style={{ 
                left: `${sliderPosition}%`, 
                transform: 'translateX(-50%)',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              {/* Círculo de control */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-8 md:h-8 bg-white rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center touch-manipulation">
                <div className="w-1 h-4 bg-gray-400 rounded"></div>
                <div className="w-1 h-4 bg-gray-400 rounded ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcelVsInvy;
