"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TherapistSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-squash-background to-squash-border relative overflow-hidden">
      <div key="pattern" className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:20px_20px]" />
      </div>
      <div key="overlay" className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 transition-colors duration-300" />
      <div key="content" className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          <motion.div
            key="image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-72 h-96 lg:w-[450px] lg:h-[600px] rounded-2xl overflow-hidden bg-squash-border/20 backdrop-blur-sm p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/therapist.jpg"
                  alt="Sophie De Cuetos - Réflexologue dans le Gers"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 288px, 450px"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            key="text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3 text-center lg:text-left lg:pl-12"
          >
            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-squash-mint/70 hover:text-squash-mint transition-colors duration-300 mb-4 group"
            >
              <span>En savoir plus sur mon parcours</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <h2 className="text-3xl md:text-4xl font-bold text-squash-text mb-3">
              Sophie De Cuetos
            </h2>
            <h3 className="text-xl text-squash-mint mb-6">
              Réflexologue dans le Gers
            </h3>

            <div className="space-y-4 text-squash-muted leading-relaxed">
              <p>
                Passionnée par le monde du Bien-être depuis des années, j'ai décidé de me spécialiser et de faire de ce domaine, mon activité.
              </p>
              <p>
                En 2012, je m'initie à la Réflexologie plantaire thaïlandaise ainsi qu'au modelage Californien. En exerçant la Réflexologie régulièrement sur de nombreuses personnes, j'ai pu voir rapidement les effets durables sur leur corps et le changement sur leur quotidien.
              </p>
              <p>
                Il m'a paru donc évident de me perfectionner dans cette voie, en intégrant l'école Elisabeth Le Breton à Versailles. Relaxologue-Réflexologue diplômée depuis Février 2018, j'exerce dans un Cabinet Médical en collaboration avec des Kinésithérapeutes et Ostéopathes.
              </p>
              <p className="italic text-squash-lavender">
                Impatiente de vous recevoir et de vous faire découvrir les bienfaits de la réflexologie, je vous attend pour partager une heure de profonde détente.
              </p>
              <p className="text-right text-squash-mint">
                Bien à vous. Sophie
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
