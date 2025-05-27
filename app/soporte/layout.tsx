import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte - Invy | Centro de Ayuda y Asistencia",
  description: "¿Necesitas ayuda con Invy? Encuentra manuales, crea tickets de soporte o contáctanos directamente. Nuestro equipo está aquí para ayudarte.",
};

export default function SoporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 