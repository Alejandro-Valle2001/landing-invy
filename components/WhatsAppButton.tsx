"use client";

import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número de WhatsApp (puedes cambiarlo por el número real)
    const phoneNumber = "51977739546";
    const message = "¡Hola! Me interesa conocer más sobre Invy 👋";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Chatea con nosotros!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton; 