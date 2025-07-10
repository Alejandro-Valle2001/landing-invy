import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { twMerge } from "tailwind-merge";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invy Perú",
  description: "Invy Perú - Sistema de Gestión de Inventario",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={twMerge(dmSans.className, "antialiased")}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
