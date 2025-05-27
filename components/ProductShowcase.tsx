"use client";

import ProductImage from "@/public/assests/shot1.png";
import Pyramid from "@/public/assests/pyramid.png";
import Tube from "@/public/assests/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoBell, GoGoal } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import CountUp from "react-countup";

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Intersection Observer para activar la animación cuando la sección de estadísticas sea visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startAnimation) {
            setStartAnimation(true);
          }
        });
      },
      {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
        rootMargin: "0px 0px -50px 0px" // Margen para activar un poco antes
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Mejora tu productividad
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
        Una forma más inteligente de gestionar tu inventario

        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
        Controla tus productos, pedidos y reportes desde un panel intuitivo, en tiempo real y sin necesidad de instalaciones. 
        </div>
      </div>
      <div className="relative ">
        <motion.img
          src={Pyramid.src}
          alt="Pyramid Image"
          className="absolute -right-24 -top-20 w-72 h-72 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <Image 
          src={ProductImage} 
          alt="Product Image" 
          className="px-1 rounded-lg md:rounded-2xl shadow-[0_0_30px_5px_rgba(147,197,253,0.5)] hover:shadow-[0_0_35px_8px_rgba(147,197,253,0.6)] transition-shadow duration-300" 
          width={1200} 
          height={811} 
        />
        <motion.img
          src={Tube.src}
          alt="Tube Image"
          className="absolute w-72 h-72 top-64 -left-28 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 max-w-[1400px] lg:px-28">
        <div className="mt-16">
          <LuLeaf className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Gestión centralizada</div>
          <div className="text-lg my-2">
          Administra productos, pedidos y reportes desde un solo lugar, en tiempo real.
          </div>
        </div>

        <div className="mt-16">
          <GoGoal className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Control total de stock</div>
          <div className="text-lg my-2">
          Visualiza y actualiza tu inventario sin errores ni duplicados.
          </div>
        </div>

        <div className="mt-16">
          <MdLockOutline className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Seguridad de datos</div>
          <div className="text-lg my-2">
          Tu información protegida con cifrado y respaldos automáticos.
          </div>
        </div>

        <div className="mt-16">
          <GoBell className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Alertas inteligentes</div>
          <div className="text-lg my-2">
          Recibe notificaciones sobre nuevos pedidos, productos en stock mínimo y actividad reciente.
          </div>
        </div>
      </div>

      {/* Sección de Estadísticas Mejorada */}
      <div ref={statsRef} className="w-full max-w-7xl mx-auto mt-16 sm:mt-20 mb-12 px-4 sm:px-6">
        {/* Header de la sección */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 sm:px-4 py-2 rounded-full mb-4 text-xs sm:text-sm">
            <span className="text-lg sm:text-2xl">📊</span>
            <span className="font-semibold text-gray-700">Números que hablan por sí solos</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 px-4">
            Más de <span className="text-blue-600">500 usuarios</span> confían en Invy
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Únete a cientos de empresas que ya optimizaron su gestión de inventario
          </p>
        </div>

        {/* Grid de estadísticas con diseño mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Estadística 1 */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200/50">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">🏢</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-2 sm:mb-3 leading-none">
              {startAnimation ? (
                <CountUp end={611} duration={4} separator="," delay={0.2} />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-1">
              Empresas usando
            </div>
            <div className="text-xs md:text-sm text-blue-600 font-medium">
              Invy diariamente
            </div>
          </div>

          {/* Estadística 2 */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-200/50">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">📋</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-600 mb-2 sm:mb-3 leading-none">
              {startAnimation ? (
                <CountUp end={63094} duration={4.5} separator="," delay={0.4} />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-1">
              Pedidos registrados
            </div>
            <div className="text-xs md:text-sm text-purple-600 font-medium">
              Procesados exitosamente
            </div>
          </div>

          {/* Estadística 3 */}
          <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-200/50">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">📦</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-green-600 mb-2 sm:mb-3 leading-none">
              {startAnimation ? (
                <CountUp end={28460} duration={4.2} separator="," delay={0.6} />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-1">
              Productos creados
            </div>
            <div className="text-xs md:text-sm text-green-600 font-medium">
              En el ultimo mes
            </div>
          </div>

          {/* Estadística 4 */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-orange-200/50">
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">⏰</span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-600 mb-2 sm:mb-3 leading-none">
              {startAnimation ? (
                <CountUp end={2100} duration={3.8} separator="," delay={0.8} prefix="+" />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-1">
              Horas optimizadas
            </div>
            <div className="text-xs md:text-sm text-orange-600 font-medium">
              Tiempo ahorrado mensual
            </div>
          </div>
        </div>

        {/* Elemento decorativo inferior */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 px-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-center">Datos actualizados en tiempo real</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
