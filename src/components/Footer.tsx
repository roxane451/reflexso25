"use client";

import React from "react";
import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-squash-text mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+33612345678"
                className="flex items-center text-squash-muted hover:text-squash-mint transition-colors"
              >
                <IconPhone size={20} className="mr-2" />
                <span>06 12 34 56 78</span>
              </a>
              <a
                href="mailto:contact@reflexso25.fr"
                className="flex items-center text-squash-muted hover:text-squash-mint transition-colors"
              >
                <IconMail size={20} className="mr-2" />
                <span>contact@reflexso25.fr</span>
              </a>
              <div className="flex items-start text-squash-muted">
                <IconMapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Lieu-dit Cassou<br />32330 GONDRIN</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-squash-text mb-4 " href="#accueil">
              Accueil
            </h3>
            <ul className="space-y-2">
              {[
                // { name: "Accueil", href: "#hero" },
                { name: "La réflexologie", href: "#lareflexologie" },
                { name: "Qui suis-je", href: "#quisuisje" },
                { name: "Services", href: "#services" },
                { name: "Témoignages", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-squash-muted hover:text-squash-mint transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="text-lg font-semibold text-squash-text mb-4">
              Horaires
            </h3>
            <div className="text-squash-muted mb-6">
              <p>Lundi - Vendredi : 9h - 19h</p>
              <p>Samedi : 9h - 12h</p>
              <p>Dimanche : Fermé</p>
            </div>

            <h3 className="text-lg font-semibold text-squash-text mb-4">
              Suivez-moi
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-squash-muted hover:text-squash-mint transition-colors"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-squash-muted hover:text-squash-mint transition-colors"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-squash-muted text-sm">
          <p>© {currentYear} Reflexso25. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
