"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TherapistSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-squash-background to-squash-border relative overflow-hidden">
      {/* Fond avec un effet de grille */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image avec effet de profondeur */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:w-1/3 flex justify-center"
          >
            <div className="relative w-72 h-96 lg:w-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
              <Image
                src="/therapist.jpg"
                alt="Sophie De Cuetos - Réflexologue dans le Gers"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 288px, 400px"
              />
            </div>
          </motion.div>

          {/* Texte avec meilleure hiérarchie visuelle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3 text-center lg:text-left space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-squash-text">
              Sophie De Cuetos
            </h2>
            <h3 className="text-xl text-squash-mint font-bold">
              Réflexologue dans le Gers
            </h3>

            <p className="text-squash-muted leading-relaxed">
              Passionnée par le Bien-être depuis des années, j\’ai décidé de me spécialiser dans ce domaine et d\’en faire mon métier.
            </p>

            <p className="text-squash-muted leading-relaxed">
              En 2012, je découvre la Réflexologie plantaire thaïlandaise et le modelage Californien. En pratiquant régulièrement, j\’ai rapidement constaté des effets durables sur le corps et l\’état émotionnel de mes patients.
            </p>

            <p className="text-squash-muted leading-relaxed">
              Pour approfondir mes connaissances, j\’ai intégré l\’école Elisabeth Le Breton à Versailles et obtenu mon diplôme en 2018. Aujourd’hui, j\’exerce en cabinet médical aux côtés de Kinésithérapeutes et Ostéopathes.
            </p>

            <p className="italic text-squash-muted">
              "Impatiente de vous recevoir et de vous faire découvrir les bienfaits de la réflexologie, je vous invite à partager une heure de profonde détente."
            </p>

            <p className="text-right font-bold text-squash-mint">
              Bien à vous, Sophie
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
