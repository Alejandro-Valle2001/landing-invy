"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assests/logomoderno.png";
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
      // Cerrar el menú al hacer scroll en móvil solo si está abierto
      if (window.innerWidth < 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevenir scroll del body cuando el menú está abierto en móvil
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      className={`relative flex flex-col md:flex-row justify-between items-center px-6 py-4 backdrop-blur-md sticky top-0 z-[100] 
        bg-white shadow-md transition-all duration-300
        ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="w-full md:w-auto flex justify-between items-center">
        <Image src={Logo} alt="Logo" className="cursor-pointer h-10 w-auto" width={150} height={40} />
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none z-[110]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú de navegación */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0 ${isMenuOpen ? 'absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none z-[105]' : ''}`}>
        <ul className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto py-4 md:py-0 px-6 md:px-0">
          <li className="w-full text-center md:w-auto">
            <a 
              href="/caracteristicas" 
              onClick={handleNavClick} 
              className="block py-2 hover:text-blue-600 transition-colors w-full cursor-pointer"
            >
              Beneficios
            </a>
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
            <a 
              href="https://app.invyperu.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-center inline-block"
            >
              Iniciar Sesión
            </a>
            <a 
              href="https://app.invyperu.com/demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors font-medium text-center inline-block"
            >
              Probar Demo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
