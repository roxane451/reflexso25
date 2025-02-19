"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconQuote } from "@tabler/icons-react";

type Testimonial = {
  name: string;
  role: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    role: "Cliente régulière",
    content: "Les séances de réflexologie avec Sophie m'ont permis de retrouver un meilleur sommeil. Son professionnalisme et sa bienveillance sont remarquables.",
  },
  {
    name: "Pierre D.",
    role: "Sportif",
    content: "Grâce aux soins de Sophie, j'ai pu soulager mes douleurs musculaires chroniques. Je recommande vivement ses services à tous les sportifs.",
  },
  {
    name: "Isabelle M.",
    role: "Enseignante",
    content: "Un véritable moment de détente et de bien-être. Sophie est à l'écoute et propose des soins parfaitement adaptés à nos besoins.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-squash-text mb-4">
            Témoignages
          </h2>
          <p className="text-squash-muted max-w-2xl mx-auto">
            Découvrez ce que mes clients disent de leur expérience en réflexologie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <IconQuote
                className="absolute top-4 right-4 text-squash-mint/20"
                size={40}
              />
              <p className="text-squash-muted mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-squash-mint/20 rounded-full flex items-center justify-center">
                  <span className="text-squash-mint font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-squash-text">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-squash-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
