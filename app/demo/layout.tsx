import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Gratuita - Invy | Sistema de Gestión de Inventario",
  description: "Accede a tu demo gratuita de 30 días con Invy. No necesitas tarjeta de crédito. Optimiza tu inventario desde hoy.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 