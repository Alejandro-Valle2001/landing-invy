import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manuales - Invy",
  description: "Encuentra tutoriales y las respuestas a las preguntas más frecuentes sobre Invy.",
};

export default function ManualesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 