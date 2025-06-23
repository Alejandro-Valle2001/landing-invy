import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Características - Invy | Sistema Completo de Gestión de Inventario",
  description: "Descubre todas las características y funcionalidades de Invy: gestión de inventario en tiempo real, análisis inteligentes, alertas personalizadas y seguridad de datos.",
  keywords: ["características", "funcionalidades", "gestión inventario", "análisis", "reportes", "alertas", "seguridad"],
};

export default function CaracteristicasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 