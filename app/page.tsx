"use client";

import { useEffect } from "react";
import BrandSlide from "@/components/BrandSlide";
import Client from "@/components/Client";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProductCard from "@/components/ProductCard";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  // Manejar scroll automático cuando se navega con hash
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Pequeño delay para asegurar que la página se ha cargado
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    // Ejecutar al cargar la página
    handleHashNavigation();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero/>
      <BrandSlide/>
      <ProductShowcase/>
      <ProductCard/>
      <Pricing/>
      <Client/>
      <Testimonials/>
      <CTA/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
