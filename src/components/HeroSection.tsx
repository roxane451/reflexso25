"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-[url('/hero-reflexologie.jpg')]"> 
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Retrouver votre équilibre naturel
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Découvrez les bienfaits de la réflexologie pour votre corps et votre esprit.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
<button className="px-6 py-3 rounded-full bg-squash-mint text-white font-medium flex items-center gap-2 mx-auto md:mx-0 hover:bg-indigo-600 transition-colors">
  Prendre rendez-vous
  <IconArrowRight className="w-4 h-4" />
</button>
          {/* <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-full shadow-lg">
            Prendre rendez-vous
          </Button> */}
        </motion.div>
      </div>
    </div>
  );
}
