"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  // El fondo se moverá hasta 150px al scrollear, pero como el div es 20% más grande, nunca dejará huecos.
  const y = useTransform(scrollY, [0, 2000], [0, 150]);

  return (
    <motion.div 
      className="fixed inset-[-20%] w-[140%] h-[140%] z-0 pointer-events-none" 
      style={{ 
        background: siteConfig.theme.backgroundImage 
          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${siteConfig.theme.backgroundImage}) center/cover no-repeat`
          : siteConfig.theme.backgroundMain,
        y
      }}
    >
      {/* Minimal noise overlay for texture depth */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </motion.div>
  );
}
