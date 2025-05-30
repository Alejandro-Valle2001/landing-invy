"use client";

import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div id="precio" className="mb-8">
      <div className="flex flex-col items-center font-medium mt-12 mb-8 px-4 sm:px-8 lg:px-12 mx-auto max-w-[550px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          El exito no tiene precio
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
        Planes flexibles para cada objetivo
        </div>

        <div className="text-center text-base sm:text-lg mb-6 md:text-xl px-4">
        Elige el plan que se adapta a tus metas y empieza a optimizar tu tiempo desde hoy.
        </div>

        {/* Toggle para Mensual/Anual - Diseño compacto */}
        <div className="relative inline-flex items-center bg-gray-100 rounded-full p-1 mb-4">
          <button
            onClick={() => setIsAnnual(false)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              !isAnnual 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              isAnnual 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Anual
          </button>
          {/* Badge de descuento */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
            -25%
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center pb-16 gap-6 lg:gap-8 mt-2 px-4 sm:px-6 lg:px-0">
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-5 sm:p-6 w-full max-w-sm flex flex-col">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="font-bold text-gray-500">Starter</div>
            <div className="border-2 w-fit p-0.5 px-2 sm:px-3 text-xs rounded-xl border-slate-300/80 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold tracking-tighter">
              Gratis
            </div>
          </div>
          <div className="py-4 sm:py-5">
            <span className="font-extrabold text-4xl sm:text-5xl">
              S/.{isAnnual ? '0' : '0'}
            </span>
            <span className="font-semibold text-gray-600 text-lg sm:text-xl">/mes</span>
            {isAnnual && (
              <div className="text-sm text-gray-600 font-medium">
                
              </div>
            )}
            {isAnnual && (
              <div className="text-sm text-green-600 font-medium">
                ¡Completamente gratis!
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 flex-grow">
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Control de Inventario
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Sin agregar datos de tarjeta de crédito
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Limite de 10 productos
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Limite de 1 usuario
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Soporte 24/7
            </div>
          </div>
          <button className="text-white mt-4 sm:mt-6 bg-black py-2.5 w-full rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors">
            Empezar Ahora
          </button>
        </div>

        <div className="shadow-2xl border-2 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-full max-w-sm flex flex-col relative overflow-hidden">
          {/* Efecto de brillo en el fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
          
          <div className="flex justify-between items-center flex-wrap gap-2 relative z-10">
            <div className="font-bold text-white text-lg">Pro</div>
            <div className="relative">
              <div className="border-2 w-fit p-1 px-3 text-xs rounded-xl border-gradient bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold tracking-tighter shadow-lg animate-pulse">
                Recomendado
              </div>
            </div>
          </div>
          <div className="py-4 sm:py-5 relative z-10">
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                S/.{isAnnual ? '97' : '129'}
              </span>
              <span className="font-semibold text-gray-400 text-lg sm:text-xl">/mes</span>
            </div>
            {isAnnual && (
              <div className="text-sm text-gray-400 font-medium mt-1">
                Facturado anualmente
              </div>
            )}
            {isAnnual && (
              <div className="text-sm bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold mt-1">
                Ahorras S/.384 al año
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 flex-grow relative z-10">
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Control de Inventario Completo</span>
            </div>
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Reportes y Análisis Avanzados</span>
            </div>
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Productos Ilimitados</span>
            </div>
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Alertas Inteligentes</span>
            </div>
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Dashboard Interactivo</span>
            </div>
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Soporte Prioritario 24/7</span>
            </div>
            <div className="text-sm sm:text-base flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-3 flex-shrink-0">
                <IoMdCheckmark className="text-white text-xs" />
              </div>
              <span>Usuarios Ilimitados</span>
            </div>
          </div>
          <button className="text-black font-bold mt-4 sm:mt-6 bg-gradient-to-r from-white to-gray-100 py-3 w-full rounded-lg cursor-pointer hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg transform hover:scale-105 relative z-10">
            Empezar Ahora
          </button>
        </div>
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-5 sm:p-6 w-full max-w-sm flex flex-col">
          <div className="font-bold text-gray-500">Business</div>
          <div className="py-4 sm:py-5">
            <span className="font-extrabold text-4xl sm:text-5xl">
              S/.{isAnnual ? '187' : '249'}
            </span>
            <span className="font-semibold text-gray-600 text-lg sm:text-xl">/mes</span>
            {isAnnual && (
              <div className="text-sm text-gray-600 font-medium">
                Facturado anualmente
              </div>
            )}
            {isAnnual && (
              <div className="text-sm text-green-600 font-medium">
                Ahorras S/.744 al año
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 flex-grow">
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Todo lo del plan Pro
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Documentos de Venta
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Punto de Venta
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Cierre de Caja
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Exportación Masiva
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Integración con Shopify
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Integración con MercadoLibre
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Integración con Falabella
            </div>
            
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" />Múltiples Sucursales
            </div>
          </div>
          <button className="text-white mt-4 sm:mt-6 bg-black py-2.5 w-full rounded-lg cursor-pointer font-medium hover:bg-gray-800 transition-colors">
            Proximamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
