import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    title: "Gestion du stress",
    description: "La Réflexologie baisse l\'Axe du Stress en relançant la production d'hormones du Bien-être. Sa pratique régulière permet un meilleur recul face aux symptômes de l\'Anxiété, de la Dépression et de la Tension Nerveuse.",
    icon: "🧘‍♀️",
  },
  {
    title: "Régulation Système Digestif",
    description: "Par le massage de la voûte plantaire, la Réflexologie agit sur les zones du Système Digestif (côlon, intestins, estomac, foie..) Elle stimule l\'absorption des aliments, apaise le Syndrome du côlon irritable et la constipation.",
    icon: "💆‍♀️",
  },
  {
    title: "Détente Musculo-Squelettique",
    description: "La Réflexologie joue le rôle de pompe et permet une meilleure circulation des liquides. Elle diminue la sensation de jambes lourdes, la douleur des contractions musculaires et protège les articulations de l\'Arthrose.",
    icon: "🦶",
  },
  {
    title: "Potentiel Vital Fonctionnel",
    description: "La Réflexologie possède un effet détoxifiant en activant le liquide lymphatique et diminue la fatigue chronique. Par sa répétition, cette pratique permet une régulation du corps et de l'esprit, un équilibre.",
    icon: "✨",
  },
];

export default function BenefitsSection() {
  return (
    <Link href="/reflexologie">
      <section className="py-20 cursor-pointer transition-all duration-300 group relative bg-gradient-to-b from-squash-background to-squash-border hover:bg-gradient-to-b hover:from-squash-background hover:to-squash-border/80">
      {/* Overlay effect on hover */}
      <div className="absolute inset-0 group-hover:bg-squash-mint/5 transition-colors duration-300" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* <div className="flex items-center justify-center gap-2 text-blue-300/70 group-hover:text-blue-300 transition-colors duration-300 mb-2">
            {/* <span>Cliquez pour en savoir plus</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-squash-text mb-4">
            Pourquoi la Réflexologie ?
          </h2>
          <p className="text-xl text-squash-mint font-bold mb-2">Découvrez les bienfaits</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-squash-border/10 hover:bg-squash-border/20 backdrop-blur-sm p-6 rounded-xl transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="text-xl font-semibold text-squash-text">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-squash-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Link>
  );
}
