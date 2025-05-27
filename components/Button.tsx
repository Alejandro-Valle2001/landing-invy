"use client";

import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ text, className = '', href, onClick }: ButtonProps) => {
  const buttonClasses = `text-white bg-black py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors ${className}`;

  // Si hay href, usar Link para navegación interna
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  // Si hay onClick, usar button normal
  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {text}
      </button>
    );
  }

  // Por defecto, si es "Prueba Gratis", navegar a la página correspondiente
  if (text === "Prueba Gratis") {
    return (
      <Link href="/prueba-gratis" className={buttonClasses}>
        {text}
      </Link>
    );
  }

  // Botón normal sin funcionalidad específica
  return (
    <button className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
