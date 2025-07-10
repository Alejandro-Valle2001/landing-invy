"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assests/invylogo1.png";
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
      className={`relative sticky top-0 z-[100] bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-xl transition-all duration-300
        ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      {/* Contenedor principal con glassmorphism */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" className="cursor-pointer h-12 w-auto" width={180} height={48} />
          </div>

          {/* Menú centrado absolutamente - Solo desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <nav className="bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg px-2 py-1">
              <ul className="flex items-center gap-1">
                <li>
                  <a 
                    href="/caracteristicas" 
                    onClick={handleNavClick} 
                    className="block py-2 px-4 text-white hover:text-blue-200 hover:bg-white/20 transition-all duration-300 cursor-pointer font-bold rounded-full"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('precio')} 
                    className="block py-2 px-4 text-white hover:text-blue-200 hover:bg-white/20 transition-all duration-300 cursor-pointer font-bold rounded-full"
                  >
                    Precio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonios')} 
                    className="block py-2 px-4 text-white hover:text-blue-200 hover:bg-white/20 transition-all duration-300 cursor-pointer font-bold rounded-full"
                  >
                    Testimonios
                  </button>
                </li>
                <li>
                  <a href="/soporte" onClick={handleNavClick} className="block py-2 px-4 text-white hover:text-blue-200 hover:bg-white/20 transition-all duration-300 font-bold rounded-full">Soporte</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Botones de acción con glassmorphism */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://app.invyperu.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full hover:bg-white transition-all duration-300 font-medium text-center inline-block border border-white/20 shadow-lg"
            >
              Iniciar Sesión
            </a>
            <a 
              href="https://app.invyperu.com/demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400/90 backdrop-blur-lg text-gray-800 py-2 px-4 rounded-full cursor-pointer hover:bg-yellow-500 transition-all duration-300 font-medium text-center inline-block border border-yellow-300/20 shadow-lg"
            >
              Probar Demo
            </a>
          </div>

          {/* Botón menú móvil */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-[110] bg-white/10 backdrop-blur-lg p-2 rounded-full border border-white/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil con glassmorphism */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-xl z-[105]">
          <nav className="px-6 py-4">
            <ul className="space-y-2">
              <li>
                <a 
                  href="/caracteristicas" 
                  onClick={handleNavClick} 
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-bold rounded-lg"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('precio')} 
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-bold rounded-lg w-full text-left"
                >
                  Precio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')} 
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-bold rounded-lg w-full text-left"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <a href="/soporte" onClick={handleNavClick} className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-bold rounded-lg">Soporte</a>
              </li>
            </ul>
            
            {/* Botones móviles */}
            <div className="flex flex-col gap-3 mt-6">
              <a 
                href="https://app.invyperu.com/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 bg-white px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center border shadow-sm"
              >
                Iniciar Sesión
              </a>
              <a 
                href="https://app.invyperu.com/demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-800 py-3 px-4 rounded-lg cursor-pointer hover:bg-yellow-500 transition-colors font-medium text-center shadow-sm"
              >
                Probar Demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
