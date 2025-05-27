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
          <div className="font-bold text-gray-500">Starter</div>
          <div className="py-4 sm:py-5">
            <span className="font-extrabold text-4xl sm:text-5xl">
              S/.{isAnnual ? '37' : '49'}
            </span>
            <span className="font-semibold text-gray-600 text-lg sm:text-xl">/mes</span>
            {isAnnual && (
              <div className="text-sm text-gray-600 font-medium">
                Facturado anualmente
              </div>
            )}
            {isAnnual && (
              <div className="text-sm text-green-600 font-medium">
                Ahorras S/.144 al año
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 flex-grow">
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Control de Inventario
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-500" /> Reportes básicos
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
            Solicita Ahora
          </button>
        </div>

        <div className="shadow-2xl border-2 rounded-2xl p-5 sm:p-6 bg-black text-white w-full max-w-sm flex flex-col">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="font-bold text-gray-500">Pro</div>
            <div className="border-2 w-fit p-0.5 px-2 sm:px-3 text-xs rounded-xl border-slate-300/20 bg-gradient-to-r from-pink-500  via-lime-600 to-sky-400 text-transparent bg-clip-text font-bold tracking-tighter">
              Recomendado
            </div>
          </div>
          <div className="py-4 sm:py-5">
            <span className="font-extrabold text-4xl sm:text-5xl">
              S/.{isAnnual ? '97' : '129'}
            </span>
            <span className="font-semibold text-gray-600 text-lg sm:text-xl">/mes</span>
            {isAnnual && (
              <div className="text-sm text-gray-600 font-medium">
                Facturado anualmente
              </div>
            )}
            {isAnnual && (
              <div className="text-sm text-green-600 font-medium">
                Ahorras S/.384 al año
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 flex-grow">
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Control de Inventario
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Reportes Avanzados
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Productos ilimitados
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Alertas Claves
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Graficos Avanzados
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Soporte Prioritario 24/7
            </div>
            <div className="text-sm sm:text-base">
              <IoMdCheckmark className="inline mr-2 text-green-400" /> Sin limite de usuarios
            </div>
          </div>
          <button className="text-black font-medium mt-4 sm:mt-6 bg-white py-2.5 w-full rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            Solicita Ahora
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
              <IoMdCheckmark className="inline mr-2 text-green-500" />Agente de Inteligencia Artificial
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
