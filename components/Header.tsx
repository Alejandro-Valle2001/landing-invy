"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assests/fotologo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Cerrar el menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // Cerrar el menú al hacer scroll en móvil
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Manejar clic en enlaces del menú móvil
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  // Función para scroll suave a secciones o navegación
  const scrollToSection = (sectionId: string) => {
    // Si estamos en la página principal, hacer scroll
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Si estamos en otra página, navegar a la página principal con hash
      router.push(`/#${sectionId}`);
    }
    handleNavClick(); // Cerrar menú móvil si está abierto
  };

  return (
    <header 
      className={`relative flex flex-col md:flex-row justify-between items-center px-6 py-4 backdrop-blur-md sticky top-0 z-50 
        bg-gradient-to-r from-[#E0E7FD] to-[#FDFEFF] shadow-md transition-all duration-300
        ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="w-full md:w-auto flex justify-between items-center">
        <Image src={Logo} alt="Logo" className="cursor-pointer h-10 w-auto" width={150} height={40} />
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú de navegación */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
          <li className="w-full text-center md:w-auto">
            <button 
              onClick={() => scrollToSection('beneficios')} 
              className="block py-2 hover:text-blue-600 transition-colors w-full cursor-pointer"
            >
              Beneficios
            </button>
          </li>
          <li className="w-full text-center md:w-auto">
            <button 
              onClick={() => scrollToSection('precio')} 
              className="block py-2 hover:text-blue-600 transition-colors w-full cursor-pointer"
            >
              Precio
            </button>
          </li>
          <li className="w-full text-center md:w-auto">
            <button 
              onClick={() => scrollToSection('testimonios')} 
              className="block py-2 hover:text-blue-600 transition-colors w-full cursor-pointer"
            >
              Testimonios
            </button>
          </li>
          <li className="w-full text-center md:w-auto">
            <a href="/soporte" onClick={handleNavClick} className="block py-2 hover:text-blue-600 transition-colors">Soporte</a>
          </li>
          <li className="w-full flex flex-col md:flex-row gap-3 justify-center md:w-auto">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Iniciar Sesión
            </button>
            <Button text="Probar Demo" className="w-full md:w-auto max-w-xs" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
