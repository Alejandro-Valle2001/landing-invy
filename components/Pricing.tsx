"use client";

import { FaCheck, FaArrowRight, FaStar } from "react-icons/fa";
import Button from "./Button";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const Pricing = () => {
  return (
    <div id="precio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80 mx-auto mb-4">
            El éxito no tiene precio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-4">
            Todo el poder en un solo plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accede a todas las funciones sin restricciones. Sin letras pequeñas, sin complicaciones. Solo resultados.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          
          {/* Demo Access Card - Izquierda */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 overflow-hidden shadow-2xl lg:col-span-2">
            {/* Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Demo gratuita</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
            <div className="absolute top-12 right-16 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute top-16 right-12 w-3 h-3 bg-white/20 rounded-full"></div>
            
            <div className="relative z-10 text-white pt-16">
              <h3 className="text-4xl font-black mb-6 tracking-tight">
                VER<br/>
                DEMO
              </h3>
              
              <div className="bg-blue-800/30 rounded-xl p-4 mb-8 border border-blue-400/20">
                <div className="flex items-center gap-2 text-blue-200 mb-2">
                  <FaArrowRight className="text-sm" />
                  <span className="text-sm font-medium">DESCUBRE INVY</span>
                </div>
                <p className="text-white text-sm">
                  Conoce todas las funcionalidades de INVY en una demostración personalizada y sin compromiso.
                </p>
              </div>
              
              <a
                href="/demo"
                className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Solicitar demo
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Membership Card - Derecha */}
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 lg:col-span-3">
            {/* Star decoration */}
            <div className="absolute top-8 right-8">
              <FaStar className="text-2xl text-yellow-400" />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PLAN PRO</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black text-gray-900">S/.189</span>
                <span className="text-xl text-gray-600 font-medium">/mes</span>
              </div>
              <div className="text-sm text-gray-500 line-through mb-1">S/.300/mes</div>
              <div className="text-lg font-semibold text-blue-600">Acceso completo</div>
            </div>

                         <div className="mb-8">
               <h4 className="text-lg font-bold text-gray-900 mb-4">Incluye todo esto y más</h4>
               <div className="space-y-3">
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-500 flex-shrink-0" />
                   <span className="text-gray-700">Control total de inventario</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-500 flex-shrink-0" />
                   <span className="text-gray-700">Reportes y análisis avanzados</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-500 flex-shrink-0" />
                   <span className="text-gray-700">Crea productos ilimitados</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-500 flex-shrink-0" />
                   <span className="text-gray-700">Múltiples sucursales</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-500 flex-shrink-0" />
                   <span className="text-gray-700">Alertas inteligentes</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-500 flex-shrink-0" />
                   <span className="text-gray-700">Soporte prioritario 24/7</span>
                 </div>
               </div>
             </div>

                         <div className="space-y-4">
               <a
                 href="https://app.invyperu.com/formulario"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
               >
                 Solicitar ahora
                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              🔒 <span>Datos 100% seguros</span>
            </div>
            <div className="flex items-center gap-2">
              ⚡ <span>Configuración en 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              ✅ <span>Garantía de satisfacción</span>
            </div>
            <div className="flex items-center gap-2">
              💳 <span>Sin permanencia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
