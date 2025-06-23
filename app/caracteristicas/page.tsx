"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaBox, 
  FaBell, 
  FaShieldAlt, 
  FaMobile, 
  FaCloud, 
  FaUsers, 
  FaCog,
  FaArrowLeft,
  FaCheck
} from "react-icons/fa";
import DashboardImage from "@/public/assests/dashseparado.png";
import Excel2 from "@/public/assests/excel2.png";
import Caja2 from "@/public/assests/caja2.png";
import Mundo from "@/public/assests/mundo.png";

export default function Caracteristicas() {
  const [activeCategory, setActiveCategory] = useState("gestion");

  const categories = {
    gestion: {
      title: "Gestión de Inventario",
      icon: <FaBox className="text-2xl" />,
      features: [
        {
          title: "Control de Stock en Tiempo Real",
          description: "Monitorea tus productos al instante con actualizaciones automáticas cada vez que realizas una venta o recepción.",
          benefits: ["Evita quiebres de stock", "Reduce sobrestocks", "Optimiza capital de trabajo"]
        },
        {
          title: "Gestión de Múltiples Almacenes",
          description: "Administra inventarios en diferentes ubicaciones desde una sola plataforma centralizada.",
          benefits: ["Visibilidad total", "Transferencias automáticas", "Control por ubicación"]
        },
        {
          title: "Códigos de Barras Inteligentes",
          description: "Genera y escanea códigos de barras para agilizar el proceso de entrada y salida de productos.",
          benefits: ["Reduce errores humanos", "Acelera procesos", "Mejora precisión"]
        },
        {
          title: "Categorización Avanzada",
          description: "Organiza tus productos por categorías, subcategorías y etiquetas personalizables.",
          benefits: ["Búsqueda rápida", "Reportes segmentados", "Organización eficiente"]
        }
      ]
    },
    analisis: {
      title: "Análisis y Reportes",
      icon: <FaChartLine className="text-2xl" />,
      features: [
        {
          title: "Dashboard Interactivo",
          description: "Visualiza métricas clave de tu negocio con gráficos dinámicos y datos en tiempo real.",
          benefits: ["Toma de decisiones rápida", "KPIs visuales", "Tendencias claras"]
        },
        {
          title: "Predicción de Demanda",
          description: "Algoritmos inteligentes que analizan patrones históricos para predecir futuras necesidades.",
          benefits: ["Reduce desperdicios", "Optimiza compras", "Mejora planificación"]
        },
        {
          title: "Análisis de Rentabilidad",
          description: "Calcula márgenes de ganancia por producto, categoría o período para maximizar beneficios.",
          benefits: ["Identifica productos estrella", "Optimiza precios", "Mejora rentabilidad"]
        },
        {
          title: "Reportes Personalizables",
          description: "Crea reportes a medida con los datos que necesitas, exportables en múltiples formatos.",
          benefits: ["Información relevante", "Formatos flexibles", "Automatización"]
        }
      ]
    },
    alertas: {
      title: "Alertas y Notificaciones",
      icon: <FaBell className="text-2xl" />,
      features: [
        {
          title: "Alertas de Stock Mínimo",
          description: "Recibe notificaciones automáticas cuando tus productos alcancen el nivel mínimo de stock.",
          benefits: ["Evita agotamientos", "Reabastecimiento oportuno", "Continuidad de ventas"]
        },
        {
          title: "Notificaciones de Vencimiento",
          description: "Mantén el control de fechas de vencimiento para productos perecederos.",
          benefits: ["Reduce pérdidas", "Cumple normativas", "Calidad asegurada"]
        },
        {
          title: "Alertas de Movimientos Inusuales",
          description: "Detecta automáticamente patrones anómalos en tu inventario que requieran atención.",
          benefits: ["Previene pérdidas", "Detecta errores", "Seguridad mejorada"]
        },
        {
          title: "Recordatorios Personalizados",
          description: "Configura recordatorios para tareas específicas como auditorías, pedidos o revisiones.",
          benefits: ["Mejor organización", "Procesos automatizados", "Eficiencia operativa"]
        }
      ]
    },
    seguridad: {
      title: "Seguridad y Confiabilidad",
      icon: <FaShieldAlt className="text-2xl" />,
      features: [
        {
          title: "Cifrado de Datos de Extremo a Extremo",
          description: "Toda tu información está protegida con los más altos estándares de cifrado de la industria.",
          benefits: ["Datos seguros", "Privacidad total", "Compliance normativo"]
        },
        {
          title: "Respaldos Automáticos",
          description: "Tu información se respalda automáticamente cada hora en múltiples servidores seguros.",
          benefits: ["Cero pérdida de datos", "Recuperación rápida", "Tranquilidad total"]
        },
        {
          title: "Control de Acceso por Roles",
          description: "Define permisos específicos para cada usuario según su rol en la organización.",
          benefits: ["Acceso controlado", "Responsabilidades claras", "Seguridad interna"]
        },
        {
          title: "Auditoría Completa",
          description: "Registro detallado de todas las acciones realizadas en el sistema con timestamps y usuarios.",
          benefits: ["Trazabilidad total", "Cumplimiento legal", "Transparencia operativa"]
        }
      ]
    }
  };

  const additionalFeatures = [
    {
      icon: <FaMobile className="text-4xl text-blue-600" />,
      title: "100% Móvil",
      description: "Accede desde cualquier dispositivo, en cualquier momento y lugar."
    },
    {
      icon: <FaCloud className="text-4xl text-blue-600" />,
      title: "En la Nube",
      description: "Sin instalaciones, sin mantenimiento. Todo en la nube de forma segura."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Múltiples Usuarios",
      description: "Todo tu equipo puede trabajar simultáneamente con permisos personalizados."
    },
    {
      icon: <FaCog className="text-4xl text-blue-600" />,
      title: "Integración API",
      description: "Conecta con tus sistemas existentes a través de nuestra API robusta."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <FaArrowLeft className="mr-2" />
              Volver al inicio
            </Link>
            <div className="flex items-center space-x-4">
                          <Link href="/demo" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Demo gratis
            </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título principal */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text mb-4"
            >
              Invy en solo 3 minutos
            </motion.h1>
          </div>

          {/* Dashboard visual con overlay de play - PREPARADO PARA VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mb-16 w-full max-w-5xl mx-auto"
          >
            {/* Container responsivo para video */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
              {/* Aspect ratio container para video */}
              <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                {/* Contenido actual - será reemplazado por video */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image 
                    src={DashboardImage} 
                    alt="Dashboard de Invy - Vista completa del sistema" 
                    className="w-full h-full object-cover rounded-2xl shadow-xl" 
                    width={1200} 
                    height={720}
                    priority
                  />
                </div>
                
                {/* Overlay del botón de play - permanecerá cuando agregues el video */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 rounded-2xl group cursor-pointer">
                  <button className="bg-black bg-opacity-80 hover:bg-opacity-90 text-white rounded-full p-4 md:p-6 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                    <svg className="w-8 h-8 md:w-12 md:h-12 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>

                {/* Indicador de duración del video */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  3:00
                </div>
              </div>

              {/* Controles de video opcionales - ocultos por defecto */}
              <div className="hidden" id="video-controls">
                <div className="mt-4 px-4">
                  <div className="flex items-center space-x-4">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    </button>
                    <div className="flex-1 bg-white bg-opacity-30 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-0 transition-all duration-300" id="progress-bar"></div>
                    </div>
                    <span className="text-white text-sm font-medium">0:00 / 3:00</span>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 
              INSTRUCCIONES PARA INSERTAR VIDEO:
              
              1. Reemplazar la imagen actual con el elemento video:
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                poster="/thumbnail-del-video.jpg"
                preload="metadata"
                id="dashboard-video"
              >
                <source src="/video-demo-invy.mp4" type="video/mp4" />
                <source src="/video-demo-invy.webm" type="video/webm" />
                Tu navegador no soporta videos HTML5.
              </video>

              2. JavaScript para controlar el video (opcional):
              - Mostrar controles al hacer clic en play
              - Ocultar overlay cuando el video esté reproduciéndose
              - Actualizar barra de progreso
              - Control de fullscreen

              3. El container ya está optimizado para:
              - Responsive design (se adapta a móvil, tablet, desktop)
              - Aspect ratio fijo para evitar layout shifts
              - Overlay de play que se puede ocultar dinámicamente
              - Controles personalizados preparados para activar
            */}
          </motion.div>

          {/* Tres beneficios principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-center h-full"
             >
               <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6 h-full flex flex-col justify-between">
                                  <div className="flex-grow flex flex-col">
                   <div className="flex justify-center mb-4">
                     <Image src={Excel2} alt="Excel" width={96} height={96} className="object-contain" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
                     Excel te ralentiza
                   </h3>
                   <p className="text-gray-600 leading-relaxed flex-grow">
                     Las hojas de cálculo son tediosas. Tienes que actualizarlas manualmente 
                     y son notoriamente difíciles de leer.
                   </p>
                 </div>
              </div>
            </motion.div>

                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="text-center h-full"
             >
               <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6 h-full flex flex-col justify-between">
                                  <div className="flex-grow flex flex-col">
                   <div className="flex justify-center mb-4">
                     <Image src={Caja2} alt="Inventario" width={96} height={96} className="object-contain" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
                     Inventario sin complicaciones
                   </h3>
                   <p className="text-gray-600 leading-relaxed flex-grow">
                     Invy muestra tu stock actual y pedidos de manera hermosa, 
                     haciendo más fácil ver información importante de un vistazo.
                   </p>
                 </div>
              </div>
            </motion.div>

                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="text-center h-full"
             >
               <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6 h-full flex flex-col justify-between">
                                  <div className="flex-grow flex flex-col">
                   <div className="flex justify-center mb-4">
                     <Image src={Mundo} alt="Mundo" width={96} height={96} className="object-contain" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
                     Trabaja desde cualquier lugar
                   </h3>
                   <p className="text-gray-600 leading-relaxed flex-grow">
                     Con tus pedidos e inventario online y accesible desde cualquier 
                     dispositivo, puedes trabajar desde donde sea.
                   </p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* CTA principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
              <Link href="/demo" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mr-4">
              Comenzar prueba gratuita
            </Link>
            <Link href="/soporte" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Hablar con un experto
            </Link>
          </motion.div>
        </div>
      </section>





      {/* Sección de características detalladas */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Lado izquierdo - Contenido */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                  GESTIÓN INTELIGENTE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Simplifica la gestión empresarial con Invy
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  La gestión de inventario tradicionalmente involucra mucho trabajo manual, 
                  como actualizar hojas de Excel y enviar reportes por email para recibir 
                  información actualizada. Invy optimiza todo este proceso para que puedas 
                  enfocarte en hacer crecer tu negocio.
                </p>
                <p className="text-lg text-gray-600">
                  En solo unos clics puedes enviar a tu equipo un dashboard en tiempo real 
                  con niveles de stock, fotografías, precios y mucho más.
                </p>
              </div>

              {/* Características destacadas */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Un inventario que se mantiene actualizado
                    </h3>
                    <p className="text-gray-600">
                      Puedes crear un sistema centralizado con toda la información de productos 
                      que ya tienes en Invy. Y como cada área está sincronizada con Invy, 
                      puedes actualizar automáticamente tu inventario cuando agregues nuevos productos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Gestiona pedidos en tiempo real
                    </h3>
                    <p className="text-gray-600">
                      Crea un ambiente personalizado para cada área de tu empresa, con precios 
                      y productos específicos. Tu equipo puede realizar pedidos en línea 
                      y verás las nuevas órdenes directamente en Invy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado derecho - Video/Demo Container */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Container preparado para video responsivo */}
              <div className="relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Aspect ratio container para video 16:9 o personalizado */}
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  {/* Placeholder actual - será reemplazado por video */}
                  <div className="absolute inset-0 bg-gray-50 rounded-xl p-6">
                    {/* Panel de producto - contenido temporal */}
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs md:text-sm text-gray-500">Inventario › Productos › Electrónicos</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        <div className="space-y-3">
                          <div className="bg-blue-100 rounded-lg h-20 md:h-24 flex items-center justify-center">
                            <span className="text-2xl md:text-3xl">📱</span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">iPhone 15 Pro - 256GB - Titanio Natural</h3>
                          <p className="text-xs text-gray-600 leading-relaxed hidden md:block">
                            Smartphone premium con chip A17 Pro para proyectos profesionales. 
                            Incluye cámara de 48MP y grabación en 4K ProRes.
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-base md:text-lg font-bold">S/4,299.00</span>
                            <span className="text-green-600 text-xs md:text-sm">● En stock</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">-</button>
                            <span className="px-2 text-sm">5</span>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">+</button>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Personalizar</span>
                            <span className="text-xs text-gray-600">Tema</span>
                          </div>
                          
                          <div className="flex space-x-2">
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-full border-2 border-blue-600"></div>
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-300 rounded-full"></div>
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-green-400 rounded-full"></div>
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full"></div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-gray-600">× Tu pedido</span>
                              <span className="text-xs">🛒</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-sm">📱</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-gray-900 truncate">iPhone 15 Pro</p>
                                <p className="text-xs text-gray-500">En stock ✓</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1">
                                  <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">5</span>
                                  <span className="bg-green-100 text-green-600 px-1.5 py-0.5 rounded text-xs">+</span>
                                </div>
                                <p className="text-xs font-bold">S/21,495</p>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2">
                              <div className="w-6 h-3 bg-gray-200 rounded"></div>
                              <div className="w-12 h-3 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay con botón de play - permanecerá cuando agregues el video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-xl">
                    <button className="bg-black bg-opacity-80 hover:bg-opacity-90 text-white rounded-full p-3 md:p-4 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                      <svg className="w-6 h-6 md:w-8 md:h-8 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Controles del video - preparado para funcionalidad futura */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-center space-x-4">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    </button>
                    <div className="flex-1 bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-600 h-1 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-xs text-gray-500">1:24 / 3:00</span>
                  </div>
                </div>
              </div>

              {/* Comentario para desarrolladores */}
              {/* 
                INSTRUCCIONES PARA INSERTAR VIDEO:
                1. Reemplazar el div con clase "bg-gray-50" por el elemento <video>
                2. El container ya tiene aspect ratio responsivo configurado
                3. Los controles del video están preparados para conectar con el video
                4. El botón de play se puede ocultar cuando el video esté reproduciéndose
                
                Ejemplo de estructura para video:
                <video 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  poster="/ruta-al-thumbnail.jpg"
                  controls={false}
                >
                  <source src="/ruta-al-video.mp4" type="video/mp4" />
                </video>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Características adicionales */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Más Ventajas que Te Encantarán
            </h2>
            <p className="text-xl text-gray-600">
              Características adicionales que hacen la diferencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a más de 500 empresas que ya optimizaron su gestión de inventario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link href="/demo" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Comenzar prueba gratuita
            </Link>
            <Link href="/soporte" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Hablar con un experto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 