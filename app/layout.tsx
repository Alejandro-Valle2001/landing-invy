import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";
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
        <a 
          href="https://app.invyperu.com/demo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block bg-black text-white p-3 text-sm text-center cursor-pointer hover:bg-gray-800 transition-colors"
        >
          <span className="hidden sm:inline pr-2 opacity-80">
            Simplifica tu gestión y haz más en menos tiempo.
          </span>
          <span className="pr-1">
            Comienza gratis ahora <FaArrowRight className="inline h-2 w-2" />
          </span>
        </a>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
