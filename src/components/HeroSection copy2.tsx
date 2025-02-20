"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const words = [
    { text: "Découvrez", className: "text-squash-text" },
    { text: "la", className: "text-squash-text" },
    { text: "puissance", className: "text-squash-text" },
    { text: "de", className: "text-squash-text" },
    { text: "la", className: "text-squash-text" },
    { text: "réflexologie", className: "text-squash-mint" },
  ];

  const renderWords = () => (
    <div className="flex flex-wrap items-center justify-center md:justify-start">
      {words.map((word, idx) => (
        <div key={idx} className="relative inline-flex mx-1">
          <span className={`relative z-10 text-3xl md:text-5xl font-bold ${word.className}`}>
            {word.text}
          </span>
          {word.text === "réflexologie" && (
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-3 bg-squash-mint/20 z-0"
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="min-h-[70vh] w-full pt-24 relative flex flex-col items-center justify-center overflow-hidden bg-squash-background"
      // style={{
      //   backgroundImage: "url('/hero-reflexologie.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left">
          {renderWords()}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-lg md:text-xl text-squash-muted max-w-2xl mx-auto md:mx-0"
          >
            Une approche naturelle et holistique pour votre bien-être. 
            Retrouvez l&apos;équilibre et l&apos;harmonie à travers des soins personnalisés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8"
          >
            <button className="px-6 py-3 rounded-full bg-squash-mint text-white font-medium flex items-center gap-2 mx-auto md:mx-0 hover:bg-squash-lavender transition-colors">
              Prendre rendez-vous
              <IconArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
