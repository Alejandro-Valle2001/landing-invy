"use client";

import { FaBook, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import Link from "next/link";
import { useMemo } from "react";

const SoportePage = () => {

  const supportOptions = useMemo(() => [
    {
      iconType: "book",
      title: "Manuales y Videos",
      description: "Encuentra tutoriales y las respuestas a las preguntas más frecuentes.",
      features: [
        "Guías paso a paso",
        "Videos explicativos",
        "Preguntas frecuentes",
        "Documentación completa"
      ],
      action: "Ver recursos",
      href: "#manuales",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      iconType: "phone",
      title: "Llámanos",
      description: "Te dejamos nuestro número de contacto para atención directa.",
      features: [
        "Atención inmediata",
        "Horario: Lun-Vie 9am-6pm",
        "Soporte técnico directo",
        "Consultas comerciales"
      ],
      action: "+51 977 739 546",
      href: "tel:+51977739546",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200"
    }
  ], []);

  const faqs = useMemo(() => [
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
      question: "¿Cómo puedo ver una demostración de la plataforma?",
      answer: "Puedes solicitar una demo gratuita desde nuestro sitio web. Te mostraremos todas las funcionalidades de INVY sin compromiso alguno."
    },
    {
      question: "¿Se puede integrar con mi tienda online?",
      answer: "Mas adelante se podrá integrar con las principales plataformas como Shopify, MercadoLibre y Falabella para sincronizar automáticamente tu inventario."
    },
    {
      question: "¿Cómo transfiero mis datos actuales a INVY?",
      answer: "Nuestro equipo de soporte te ayuda a configurar tu inventario inicial y migrar tus datos de manera segura. Te guiamos paso a paso en todo el proceso."
    }
  ], []);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "book":
        return <FaBook className="text-3xl text-blue-600" />;
      case "envelope":
        return <FaEnvelope className="text-3xl text-green-600" />;
      case "phone":
        return <FaPhone className="text-3xl text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <Header />
      <PromoBanner />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-gray-400 text-gray-300 mx-auto mb-6">
            Centro de ayuda
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mb-6">
            ¿Cómo podemos ayudarte?
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-2xl mx-auto">
            Te dejamos cuatro maneras para encontrar respuestas a tus dudas.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="pt-2 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${option.bgColor} border ${option.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full max-w-sm`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(option.iconType)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {option.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <a
                  href={option.href}
                  className="inline-flex items-center justify-center w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 group-hover:shadow-md"
                >
                  {option.action}
                  <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-300">
              Las dudas más comunes de nuestros usuarios
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
            <a
              href="https://api.whatsapp.com/send/?phone=51977739546&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+Invy+%EF%BF%BD&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contáctanos directamente
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoportePage; 