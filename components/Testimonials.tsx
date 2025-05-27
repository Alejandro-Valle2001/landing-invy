"use client";

import Image from "next/image";
import Avatar1 from "@/public/assests/mujer1.jpg";
import Avatar2 from "@/public/assests/parra.jpg.jpeg";
import Avatar3 from "@/public/assests/alejo.png";
import Avatar4 from "@/public/assests/paco.jpeg";
import Avatar5 from "@/public/assests/marce.jpg";
import Avatar6 from "@/public/assests/mujer2.jpg";
import Avatar7 from "@/public/assests/agurto.jpg";
import Avatar8 from "@/public/assests/stefan.jpg";
import Avatar9 from "@/public/assests/alejobot.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  // Testimonios únicos para evitar duplicación
  const testimonialColumns = [
    // Columna 1 (izquierda - oculta en móvil)
    [
      {
        text: "Invy cambió todo. Ya no perdemos ventas por falta de stock.",
        name: "Alejandra Rivera",
        username: "@alerivera_tech",
        avatar: Avatar1
      },
      {
        text: "Los reportes automáticos de Invy nos ahorran horas cada día.",
        name: "Juana Martínez",
        username: "@jmartinez_biz",
        avatar: Avatar6
      },
      {
        text: "Invy transformó mi almacén. Todo está bajo control.",
        name: "Alejandro Bustios",
        username: "@bustiosalejandro",
        avatar: Avatar3
      }
    ],
    // Columna 2 (centro - siempre visible)
    [
      {
        text: "Súper fácil de usar. En 2 días ya dominábamos Invy.",
        name: "Carlos Agurto",
        username: "@carlos_agurto_o",
        avatar: Avatar7
      },
      {
        text: "Con Invy veo todas mis sucursales en tiempo real. Increíble.",
        name: "Christian Rodriguez",
        username: "@cricri_0605",
        avatar: Avatar2
      },
      {
        text: "Las alertas de Invy son perfectas. Nunca más nos quedamos sin stock.",
        name: "Marcelo Alvarado",
        username: "@marceloalvardo",
        avatar: Avatar5
      }
    ],
    // Columna 3 (derecha - oculta en móvil)
    [
      {
        text: "Invy mejoró la comunicación entre nuestros departamentos.",
        name: "Neo Zapata",
        username: "@neo_mzg",
        avatar: Avatar4
      },
      {
        text: "Todo en un solo lugar con Invy. Productos, movimientos, reportes.",
        name: "Nabil Atta",
        username: "@nabilattavelazco",
        avatar: Avatar8
      },
      {
        text: "Interfaz súper intuitiva. Invy se adapta a todo tipo de negocio.",
        name: "Yoser Aranda",
        username: "@yoser_03",
        avatar: Avatar9
      }
    ]
  ];

  const renderTestimonialColumn = (testimonials: any[], isHidden = false) => (
    <div className={isHidden ? "hidden md:block" : ""}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={`shadow-xl w-[310px] rounded-2xl p-8 ${index === 1 ? 'my-6' : ''}`}>
          <div className="font-medium pb-4">
            {testimonial.text}
          </div>
          <div className="flex items-center gap-3">
            <Image src={testimonial.avatar} alt="Avatar" className="h-12 w-12" />
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div>{testimonial.username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-12">
      <div className="flex flex-col items-center px-4 sm:px-12 lg:px-28 pb-16">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl font-semibold border-slate-300/80 mx-auto">
          Testimonios reales
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text max-w-2xl mx-auto leading-tight">
          Lo que dicen nuestros clientes
        </div>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] h-[750px] mb-12 md:mb-28 lg:mb-36">
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col"
        >
          {/* Primera instancia de testimonios */}
          <div className="flex items-center justify-center overflow-x-hidden pb-4 gap-4">
            {renderTestimonialColumn(testimonialColumns[0], true)}
            {renderTestimonialColumn(testimonialColumns[1])}
            {renderTestimonialColumn(testimonialColumns[2], true)}
          </div>
          
          {/* Segunda instancia idéntica para loop perfecto */}
          <div className="flex items-center justify-center overflow-x-hidden pb-4 gap-4">
            {renderTestimonialColumn(testimonialColumns[0], true)}
            {renderTestimonialColumn(testimonialColumns[1])}
            {renderTestimonialColumn(testimonialColumns[2], true)}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
