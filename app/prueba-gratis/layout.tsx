import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prueba Gratis - Invy | Sistema de Gestión de Inventario",
  description: "Comienza tu prueba gratuita de 30 días con Invy. No necesitas tarjeta de crédito. Optimiza tu inventario desde hoy.",
};

export default function PruebaGratisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 