"use client";

import DashboardImage from "@/public/assests/dashseparado.png";
import Pyramid from "@/public/assests/pyramid.png";
import Tube from "@/public/assests/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
      className="bg-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      {/* Sección de Estadísticas Rediseñada */}
      <div ref={statsRef} className="w-full max-w-6xl mx-auto mt-20 mb-12 px-4 sm:px-6">
        {/* Header de la sección con estilo consistente */}
        <div className="flex flex-col items-center font-medium mb-12 px-8 mx-auto md:w-[550px] lg:w-[630px]">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
            Números que hablan por sí solos
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
            Más de 500 usuarios confían en Invy
          </div>
          <div className="text-center text-lg mb-8 md:text-xl">
            Únete a cientos de empresas que ya optimizaron su gestión de inventario
          </div>
        </div>

        {/* Grid de estadísticas simplificado y elegante */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Estadística 1 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-2">
              {startAnimation ? (
                <CountUp end={611} duration={4} separator="," delay={0.2} />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-1">
              Empresas usando
            </div>
            <div className="text-sm text-gray-600">
              Invy diariamente
            </div>
          </div>

          {/* Estadística 2 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-2">
              {startAnimation ? (
                <CountUp end={63094} duration={4.5} separator="," delay={0.4} />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-1">
              Pedidos registrados
            </div>
            <div className="text-sm text-gray-600">
              En el último mes
            </div>
          </div>

          {/* Estadística 3 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-2">
              {startAnimation ? (
                <CountUp end={8460} duration={4.2} separator="," delay={0.6} />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-1">
              Productos creados
            </div>
            <div className="text-sm text-gray-600">
              En el último mes
            </div>
          </div>

          {/* Estadística 4 */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-2">
              {startAnimation ? (
                <CountUp end={2100} duration={3.8} separator="," delay={0.8} prefix="+" />
              ) : (
                <span>0</span>
              )}
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-1">
              Horas optimizadas
            </div>
            <div className="text-sm text-gray-600">
              Tiempo ahorrado mensual
            </div>
          </div>
        </div>
      </div>
      </div>

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
        
        {/* Botón Ver más características */}
        <div className="text-center mb-12">
          <Link href="/caracteristicas">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Ver más características
            </button>
          </Link>
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
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <Image 
          src={DashboardImage} 
          alt="Dashboard Image" 
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
          animate={{
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

    </div>
  );
};

export default ProductShowcase;
