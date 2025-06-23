import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assests/fotologo.png";
import {
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white p-12 md:p-16 gap-8 justify-between md:px-20 xl:px-44">
      {/* Sección principal con logo y descripción */}
      <div className="flex flex-col gap-6 text-gray-300/85 max-w-[350px]">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Invy Logo" className="h-10 w-auto" width={120} height={40} />
          <span className="text-2xl font-bold text-white">invy</span>
        </div>
        <div className="text-lg text-gray-300">
          Optimiza tu inventario, impulsa tu negocio
        </div>
        
        {/* Redes sociales */}
        <div>
          <div className="font-bold text-lg text-white mb-4">Síguenos en redes sociales</div>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:scale-125 transition-transform hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:scale-125 transition-transform hover:text-pink-500">
              <AiFillInstagram />
            </a>
            <a href="#" className="hover:scale-125 transition-transform hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="hover:scale-125 transition-transform hover:text-white">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Recursos */}
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg text-white">Recursos</div>
        <Link href="/manuales" className="cursor-pointer text-gray-300/85 hover:text-white transition-colors">
          · Manuales
        </Link>
        <Link href="/condiciones-de-uso" className="cursor-pointer text-gray-300/85 hover:text-white transition-colors">
          · Condiciones de uso
        </Link>
        <Link href="/politicas-de-privacidad" className="cursor-pointer text-gray-300/85 hover:text-white transition-colors">
          · Política de privacidad
        </Link>
        <a href="https://librovirtual.pe/r/valbe-technologies-sac" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-gray-300/85 hover:text-white transition-colors">
          · Libro de reclamaciones
        </a>
      </div>

      {/* Sección de Contacto */}
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg text-white">Contacto</div>
        <div className="flex items-center gap-3 text-gray-300/85">
          <FaEnvelope className="text-blue-400" />
          <a href="mailto:valbelperu@gmail.com" className="hover:text-white transition-colors">
            valbeperu@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-300/85">
          <FaPhone className="text-green-400" />
          <a href="tel:+51977739546" className="hover:text-white transition-colors">
            +51 977 739 546
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
