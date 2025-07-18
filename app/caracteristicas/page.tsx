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
import HeroSectionOne from "@/components/ui/hero-section-demo-1";
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
      {/* Hero Section con Aceternity UI */}
      <HeroSectionOne />







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
                          <a 
              href="https://app.invyperu.com/prueba30dias" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Prueba Gratis 30 días
            </a>
            <Link href="/soporte" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Hablar con un experto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 