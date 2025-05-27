"use client";

import { FaBook, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      iconType: "envelope",
      title: "Ticket de ayuda",
      description: "Deja tus datos con tu solicitud y nuestro equipo te contactará para asesorarte.",
      features: [
        "Soporte personalizado",
        "Respuesta en 24 horas",
        "Seguimiento de ticket",
        "Asistencia especializada"
      ],
      action: "Crear ticket",
      href: "#ticket",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
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
      question: "¿Cómo empiezo a usar Invy?",
      answer: "Es muy fácil. Solo regístrate con tu correo, confirma tu cuenta y comienza a cargar tus productos. Te guiamos paso a paso en el proceso."
    },
    {
      question: "¿Puedo importar mis datos desde Excel?",
      answer: "¡Sí! Invy permite importar tus inventarios desde archivos Excel. También ofrecemos asistencia gratuita para la migración de datos."
    },
    {
      question: "¿Qué incluye la prueba gratuita?",
      answer: "La prueba de 30 días incluye todas las funciones principales: gestión de inventario, reportes, alertas de stock bajo y soporte técnico."
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer: "Para nada. Invy está diseñado para ser intuitivo y fácil de usar. Si has usado WhatsApp, puedes usar Invy sin problemas."
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80 mx-auto mb-6">
            Centro de ayuda
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-6">
            ¿Cómo podemos ayudarte?
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            Te dejamos cuatro maneras para encontrar respuestas a tus dudas.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="pt-2 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${option.bgColor} border ${option.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
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
            <Link
              href="/prueba-gratis"
              className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contáctanos directamente
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoportePage; 