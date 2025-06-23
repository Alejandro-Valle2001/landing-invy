"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Star from "@/public/assests/emojistar 1.png";
import Helix from "@/public/assests/helix2 1.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center pt-16 pb-24 px-14 bg-gradient-to-t from-[#afbbe4] to-white  overflow-x-clip"
    >
      <div className="max-w-[570px] flex flex-col items-center relative">
        <motion.img
          src={Star.src}
          alt="Star"
          className="absolute -left-[345px] -top-28 pr-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.img
          src={Helix.src}
          alt="Helix"
          className="absolute -right-80 -top-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
          animate={{
            y: [0, 18, 0],
            rotate: [0, -4, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <div className="text-4xl md:text-5xl lg:text-6xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
        Regístrate gratis hoy
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
        Celebra cada avance con una plataforma pensada para mostrar tu progreso, motivarte y ayudarte a lograr más con menos esfuerzo.
        </div>

        <div className="flex items-center gap-4 mt-4 text-lg">
          <Button text="Prueba Gratis" />
          <div className="font-semibold cursor-pointer  hover:underline">
            Solicita ahora
            <FaArrowRight className="h-3 w-3 inline ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
