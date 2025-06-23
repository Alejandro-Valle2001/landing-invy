"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué es este sistema?",
      answer: "Es una plataforma en la nube para gestionar tu inventario, ventas y reportes en tiempo real."
    },
    {
      question: "¿Para quién está pensado?",
      answer: "Está diseñado para empresas que necesitan controlar su inventario, gestionar ventas y tomar decisiones basadas en datos precisos."
    },
    {
      question: "¿Necesito instalar algo?",
      answer: "No, es una aplicación web que funciona desde cualquier navegador. Solo necesitas una conexión a internet para acceder desde cualquier dispositivo."
    },
    {
      question: "¿Funciona en celular?",
      answer: "Sí, la plataforma está completamente optimizada para dispositivos móviles. Puedes gestionar tu inventario desde tu smartphone o tablet sin problemas."
    },
    {
      question: "¿Tiene comisiones por ventas?",
      answer: "No cobramos comisiones por ventas. Solo pagas la suscripción mensual del plan, sin costos adicionales por transacciones."
    },
    {
      question: "¿En qué se diferencia de Excel?",
      answer: "A diferencia de Excel, nuestra plataforma ofrece actualizaciones en tiempo real, acceso desde múltiples dispositivos, reportes automáticos, alertas de stock y integración con plataformas de venta."
    },
    {
      question: "¿Se puede integrar con mi tienda online?",
      answer: "Mas adelante se podrá integrar con las principales plataformas como Shopify, MercadoLibre y Falabella para sincronizar automáticamente tu inventario."
    },
    {
      question: "¿Pueden usarlo mas usuarios?",
      answer: "Absolutamente, pueden usarlo mas de un usuario."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Respuestas a las dudas más comunes sobre nuestro sistema de inventario.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-slate-800 text-white shadow-lg' 
                  : 'bg-white hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-lg">
                  {faq.question}
                </span>
                <span className={`transition-transform duration-300 ${
                  openIndex === index ? 'text-white' : 'text-blue-600'
                }`}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className={`${
                    openIndex === index ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <button className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 