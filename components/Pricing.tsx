"use client";

import { FaCheck, FaArrowRight, FaStar } from "react-icons/fa";
import Button from "./Button";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const Pricing = () => {
  return (
    <div id="precio" className="pt-16 pb-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-gray-400 text-gray-300 mx-auto mb-4">
            El éxito no tiene precio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mb-4">
            Todo el poder en un solo plan
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Accede a todas las funciones sin restricciones. Sin letras pequeñas, sin complicaciones. Solo resultados.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center max-w-4xl mx-auto">
          
          {/* Membership Card - Plan Pro centrado */}
          <div className="relative rounded-3xl p-8 shadow-2xl border border-gray-200 w-full max-w-lg overflow-hidden">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assests/fotoprecio.jpg)' }}
            ></div>
            
            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Contenido sobre el video */}
            <div className="relative z-10">
              {/* Star decoration */}
              <div className="absolute top-0 right-0">
                <FaStar className="text-2xl text-yellow-400" />
              </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">PLAN PROFESIONAL</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black text-white">S/.79</span>
                <span className="text-xl text-gray-200 font-medium">/mes</span>
              </div>
            </div>

                         <div className="mb-8">
              
               <div className="space-y-3">
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Panel Administrativo</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Módulo de Inventario</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Módulo de Clientes</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Módulo de Pedidos</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Modulo de Reportes</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Graficos Avanzados</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Punto de Venta POS</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Hasta 3 sucursales</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Hasta 6 usuarios</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <FaCheck className="text-green-400 flex-shrink-0" />
                   <span className="text-white">Soporte Personalizado</span>
                 </div>
               </div>
             </div>

                         <div className="space-y-4">
               <a
                 href="https://app.invyperu.com/formulario"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-yellow-500 text-black font-bold py-4 px-6 rounded-xl hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
               >
                 Contratar Ahora
                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Pricing;
