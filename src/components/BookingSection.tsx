"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Gift, CalendarCheck } from "lucide-react";

export default function BookingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-squash-background to-squash-border text-center">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "ease-in-out" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-squash-text mb-4"
        >
          Prenez rendez-vous ou offrez une séance
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "ease-in-out" }}
          viewport={{ once: true }}
          className="text-lg text-squash-muted mb-8"
        >
          Offrez à vous-même ou à un proche un moment de bien-être et de détente profonde.
        </motion.p>

        {/* Cartes d'action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Carte Prendre Rendez-vous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "ease-in-out" }}
            viewport={{ once: true }}
            className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-lg p-6 rounded-xl transition-all shadow-lg"
          >
            <div className="flex flex-col items-center">
              <CalendarCheck className="text-squash-mint w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-squash-text mb-2">
                Prendre rendez-vous
              </h3>
              <p className="text-squash-muted mb-4">
                Réservez votre séance de réflexologie en ligne en quelques clics.
              </p>
              <Link
                href="/rendez-vous"
                aria-label="Prendre rendez-vous"
                className="px-6 py-3 rounded-full bg-squash-mint text-white font-medium flex items-center gap-2 transition-colors duration-300 hover:bg-indigo-600"
              >
                Réserver maintenant
              </Link>
            </div>
          </motion.div>

          {/* Carte Offrir une Séance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "ease-in-out" }}
            viewport={{ once: true }}
            className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-lg p-6 rounded-xl transition-all shadow-lg"
          >
            <div className="flex flex-col items-center">
              <Gift className="text-squash-mint w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-squash-text mb-2">
                Offrir une séance
              </h3>
              <p className="text-squash-muted mb-4">
                Faites plaisir à un proche avec un bon cadeau bien-être.
              </p>
              <Link
                href="/cadeau"
                aria-label="Offrir une séance"
                className="px-6 py-3 rounded-full bg-squash-mint text-white font-medium flex items-center gap-2 transition-colors duration-300 hover:bg-indigo-600"
              >
                Offrir un cadeau
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
