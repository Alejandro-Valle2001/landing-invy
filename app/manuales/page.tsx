"use client";

import { FaPlay, FaChevronRight, FaArrowLeft, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function ManualesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "intro",
      title: "Introducción a Invy",
      description: "Conoce las funcionalidades principales de Invy y cómo puede transformar la gestión de tu inventario.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - reemplazar con video real
    },
    {
      id: "productos",
      title: "Cómo agregar productos",
      description: "Aprende paso a paso cómo agregar productos a tu inventario de manera rápida y eficiente.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - reemplazar con video real
    },
    {
      id: "stock",
      title: "Control de stock avanzado",
      description: "Domina las herramientas avanzadas para el control y seguimiento de tu stock en tiempo real.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - reemplazar con video real
    },
    {
      id: "ventas",
      title: "Análisis de ventas",
      description: "Descubre cómo generar reportes y analizar las tendencias de ventas para optimizar tu negocio.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - reemplazar con video real
    },
    {
      id: "reportes",
      title: "Generando reportes detallados",
      description: "Crea reportes personalizados para tomar decisiones basadas en datos precisos.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - reemplazar con video real
    },
    {
      id: "configuracion",
      title: "Configuración avanzada",
      description: "Personaliza Invy según las necesidades específicas de tu negocio.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - reemplazar con video real
    }
  ];

  const toggleVideo = (videoId: string) => {
    setActiveVideo(activeVideo === videoId ? null : videoId);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manuales</h1>
          <p className="text-xl text-blue-100">
            Encuentra tutoriales y las respuestas a las preguntas más frecuentes.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Videos explicativos */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <div className="bg-red-100 p-4 rounded-lg mr-4">
              <FaPlay className="text-red-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Videos explicativos</h2>
              <p className="text-gray-600 mt-2">
                Tutoriales en video que te ayudarán a dominar Invy de forma visual y práctica.
              </p>
            </div>
          </div>
          
          {/* Lista de videos acordeón */}
          <div className="space-y-4">
            {videos.map((video) => (
              <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Header del video */}
                <button
                  onClick={() => toggleVideo(video.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <FaPlay className="text-red-600 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{video.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{video.description}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    {activeVideo === video.id ? (
                      <FaChevronDown className="text-gray-500 transform rotate-180 transition-transform" />
                    ) : (
                      <FaChevronRight className="text-gray-500" />
                    )}
                  </div>
                </button>
                
                {/* Contenido del video */}
                {activeVideo === video.id && (
                  <div className="p-4 bg-white border-t">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={video.videoUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sección de ayuda adicional */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-blue-100 mb-6">
            Nuestro equipo de soporte está aquí para ayudarte con cualquier duda específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:valbeperu@gmail.com"
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contactar por email
            </a>
            <a
              href="tel:+51977739546"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
            >
              Llamar al soporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 