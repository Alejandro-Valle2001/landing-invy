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
      className={`relative sticky top-0 z-[100] bg-gradient-to-r from-gray-900 via-gray-800 to-black backdrop-blur-xl transition-all duration-300 border-b border-gray-700/30
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
            <nav className="bg-white/5 backdrop-blur-lg rounded-full border border-white/10 shadow-2xl px-2 py-1">
              <ul className="flex items-center gap-1">
                <li>
                  <button 
                    onClick={() => router.push('/')} 
                    className="block py-2 px-6 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 cursor-pointer font-medium rounded-full"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <a 
                    href="/caracteristicas" 
                    onClick={handleNavClick} 
                    className="block py-2 px-6 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 cursor-pointer font-medium rounded-full"
                  >
                    Funcionalidades
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Botones de acción modernos */}
          <div className="hidden md:flex items-center gap-3">
            {/* Botón Crea tu cuenta hoy */}
            <a 
              href="https://app.invyperu.com/formulario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group px-6 py-2.5 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 rounded-full text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Crea tu cuenta hoy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            {/* Botón Hablar con ventas */}
            <a 
              href="https://app.invyperu.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative px-6 py-2.5 bg-gradient-to-r from-purple-700 to-purple-900 rounded-full text-white font-medium text-sm border border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-800"
            >
              Hablar con ventas
            </a>
          </div>

          {/* Botón menú móvil */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-[110] bg-white/5 backdrop-blur-lg p-2 rounded-full border border-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil con glassmorphism */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/30 shadow-xl z-[105]">
          <nav className="px-6 py-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { router.push('/'); handleNavClick(); }} 
                  className="block py-3 px-4 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg w-full text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <a 
                  href="/caracteristicas" 
                  onClick={handleNavClick} 
                  className="block py-3 px-4 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg"
                >
                  Funcionalidades
                </a>
              </li>
            </ul>
            
            {/* Botones móviles modernos */}
            <div className="flex flex-col gap-3 mt-6">
              <a 
                href="https://app.invyperu.com/formulario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400 text-white py-3 px-4 rounded-lg font-medium text-center shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Crea tu cuenta hoy
              </a>
              <a 
                href="https://app.invyperu.com/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-4 rounded-lg font-medium text-center border border-purple-500/30 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Hablar con ventas
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
