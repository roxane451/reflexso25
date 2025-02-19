"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { name: "Accueil", href: "#hero" },
  { name: "La réflexologie", href: "#reflexologie" },
  { name: "Qui suis-je", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

import Image from 'next/image';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // h-16 = 4rem = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="relative block w-[200px] h-[50px]">
              <Image
                src="/logo.svg"
                alt="Sophie Réflexologue"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-squash-muted hover:text-squash-mint px-3 py-2 text-sm font-medium transition-colors relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-squash-mint transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-squash-muted hover:text-squash-mint p-2 transition-colors"
              aria-label="Menu principal"
            >
              {isOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-squash-border/10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-squash-muted hover:text-squash-mint block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
