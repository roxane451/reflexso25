"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { IconClock, IconCurrencyEuro } from "@tabler/icons-react";

type Service = {
  img: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  benefits: string[];
};

const services: Service[] = [
  {
    img: "/services/reflexologie-plantaire.jpg",
    title: "Réflexologie Plantaire",
    description: "Massage des zones réflexes des pieds pour rééquilibrer l'énergie, soulager tensions et améliorer la santé.",
    duration: "45 minutes",
    price: 50,
    benefits: [
      "Anxiété & Tension nerveuse",
      "Tensions musculaires & Stress",
      "Troubles digestifs",
      "Troubles hormonaux",
      "Affections respiratoires",
      "Troubles circulatoires",
    ],
  },
  {
    img: "/services/reflexologie-cranienne-faciale.jpg",
    title: "Réflexologie Crânienne-Faciale",
    description: "Stimulation des points réflexes du crâne et visage pour la relaxation et le bien-être.",
    duration: "45 minutes",
    price: 50,
    benefits: [
      "Acouphènes & Vertiges",
      "Céphalées",
      "Troubles du sommeil",
      "Fatigue",
      "Baisse de moral",
      "Stress & cervicalgie"
    ],
  },
  {
    img: "/services/massage-kobido.jpg",
    title: "Kobido",
    description: "Massage facial japonais ancestral stimulant la circulation, raffermissant la peau et procurant détente et éclat naturel.",
    duration: "1 heure",
    price: 60,
    benefits: [
      "Ovale du visage",
      "Apparition des rides",
      "Circulation lymphatique",
      "Circulation sanguine",
      "Couperose",
      "Cernes & éclat du visage",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-squash-text mb-4">
            Mes Services
          </h2>
          <p className="text-squash-muted max-w-2xl mx-auto">
            Découvrez mes différentes prestations de réflexologie adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-squash-text mb-2">
                  {service.title}
                </h3>
                <p className="text-squash-muted mb-4">{service.description}</p>
                
                <div className="flex items-center mb-4 text-squash-muted">
                  <IconClock size={20} className="mr-2" />
                  <span>{service.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <span className="text-squash-mint mr-2">•</span>
                      <span className="text-squash-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-squash-text">
                    <IconCurrencyEuro size={20} className="mr-1" />
                    <span className="text-2xl font-bold">{service.price}</span>
                  </div>
                  <button className="px-4 py-2 bg-squash-mint text-white rounded-md hover:bg-squash-mint/90 transition-colors">
                    Réserver
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
