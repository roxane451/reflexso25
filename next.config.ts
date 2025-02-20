import type { NextConfig } from "next";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Désactive ESLint pendant le build
  },
  /* Autres options de config ici */
};

export default nextConfig;
