"use client";

import logo_supbase from "@/public/assests/supbase.png";
import logo_vercel from "@/public/assests/vercel.png";
import logo_alpha1 from "@/public/assests/alpha1.png";
import logo_hostinger from "@/public/assests/hostinger.png";
import logo_pulse from "@/public/assests/logo-pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";

const BrandSlide = () => {
  return (
    <div className="pt-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black px-4 md:p-12 flex justify-center">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-[1200px]">
        <motion.div
          className="flex gap-14 flex-none items-center justify-center pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image src={logo_supbase} alt="logo_supbase" className="h-8 w-auto" />
          <Image src={logo_vercel} alt="logo_vercel" className="h-8 w-auto" />
          <Image src={logo_alpha1} alt="logo_alpha1" className="h-8 w-auto" />
          <Image src={logo_hostinger} alt="logo_hostinger" className="h-8 w-auto" />
          <Image src={logo_pulse} alt="logo_pulse" className="h-8 w-auto" />

          <Image src={logo_supbase} alt="logo_supbase" className="h-8 w-auto" />
          <Image src={logo_vercel} alt="logo_vercel" className="h-8 w-auto" />
          <Image src={logo_alpha1} alt="logo_alpha1" className="h-8 w-auto" />
          <Image src={logo_hostinger} alt="logo_hostinger" className="h-8 w-auto" />
          <Image src={logo_pulse} alt="logo_pulse" className="h-8 w-auto" />

          <Image src={logo_supbase} alt="logo_supbase" className="h-8 w-auto" />
          <Image src={logo_vercel} alt="logo_vercel" className="h-8 w-auto" />
          <Image src={logo_alpha1} alt="logo_alpha1" className="h-8 w-auto" />
          <Image src={logo_hostinger} alt="logo_hostinger" className="h-8 w-auto" />
          <Image src={logo_pulse} alt="logo_pulse" className="h-8 w-auto" />

          <Image src={logo_supbase} alt="logo_supbase" className="h-8 w-auto" />
          <Image src={logo_vercel} alt="logo_vercel" className="h-8 w-auto" />
          <Image src={logo_alpha1} alt="logo_alpha1" className="h-8 w-auto" />
          <Image src={logo_hostinger} alt="logo_hostinger" className="h-8 w-auto" />
          <Image src={logo_pulse} alt="logo_pulse" className="h-8 w-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlide;
