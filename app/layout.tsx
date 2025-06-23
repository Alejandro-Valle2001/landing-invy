import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invy Perú",
  description: "Invy Perú - Sistema de Gestión de Inventario",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/assests/faviconcorto.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assests/faviconcorto.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/assests/faviconcorto.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assests/faviconcorto.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assests/faviconcorto.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assests/faviconcorto.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileImage" content="/assests/faviconcorto.png" />
      </head>
      <body className={twMerge(dmSans.className, "antialiased")}>
        <Link href="/demo" className="block bg-black text-white p-3 text-sm text-center cursor-pointer hover:bg-gray-800 transition-colors">
          <span className="hidden sm:inline pr-2 opacity-80">
            Simplifica tu gestión y haz más en menos tiempo.
          </span>
          <span className="pr-1">
            Comienza gratis ahora <FaArrowRight className="inline h-2 w-2" />
          </span>
        </Link>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
