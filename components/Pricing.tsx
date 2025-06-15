"use client";

import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const Pricing = () => {
  return (
    <div id="precio" className="mb-8">
      <div className="flex flex-col items-center font-medium mt-12 mb-8 px-4 sm:px-8 lg:px-12 mx-auto max-w-[750px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          El éxito no tiene precio
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
        Todo el poder en un solo plan
        </div>

        <div className="text-center text-base sm:text-lg mb-6 md:text-xl px-4">
        Accede a todas las funciones sin restricciones. Sin letras pequeñas, sin complicaciones. Solo resultados.
        </div>
      </div>

      {/* Plan Pro mejorado y centrado */}
      <div className="flex justify-center pb-16 mt-2 px-4 sm:px-6 lg:px-0">
        <div className="relative w-full max-w-4xl">
          {/* Tarjeta principal con diseño mejorado */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
            {/* Efectos de fondo mejorados */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            {/* Contenido principal */}
            <div className="relative z-10 text-white">
              {/* Header del plan */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">Plan Pro</h3>
                  <p className="text-gray-300 text-lg">Todo lo que necesitas para hacer crecer tu negocio</p>
                </div>
              </div>

              {/* Layout principal: precio y características */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Sección de precio */}
                <div className="text-center lg:text-left">
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                      <span className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                        S/.189
                      </span>
                      <div className="flex flex-col">
                        <span className="text-2xl text-gray-400 font-semibold">/mes</span>
                      </div>
                    </div>
                  </div>

                  {/* Botón de acción principal */}
                  <a
                    href="https://app.invyperu.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton-prueba bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-bold py-4 px-16 rounded-2xl text-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl border-0 w-fit mx-auto lg:mx-0 text-center inline-block"
                  >
                    Solicitar Ahora
                  </a>
                  
                  <p className="text-gray-400 text-sm mt-4">
                    Sin compromiso • Cancela cuando quieras
                  </p>
                </div>

                {/* Características organizadas en dos columnas */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold mb-6 text-center lg:text-left">Lo que incluye:</h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Control de Inventario</span>
                        <p className="text-gray-400 text-sm">Completo y en tiempo real</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Reportes Avanzados</span>
                        <p className="text-gray-400 text-sm">Análisis y métricas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Productos Ilimitados</span>
                        <p className="text-gray-400 text-sm">Sin restricciones</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Alertas Inteligentes</span>
                        <p className="text-gray-400 text-sm">Notificaciones automáticas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Dashboard Interactivo</span>
                        <p className="text-gray-400 text-sm">Visualización moderna</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Soporte Prioritario</span>
                        <p className="text-gray-400 text-sm">24/7 disponible</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Usuarios Ilimitados</span>
                        <p className="text-gray-400 text-sm">Para todo tu equipo</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Actualizaciones</span>
                        <p className="text-gray-400 text-sm">Nuevas funciones gratis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemento de confianza */}
              <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
                <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    🔒 <span>Datos seguros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    ⚡ <span>Configuración en 5 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    ✅ <span>Garantía de satisfacción</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
