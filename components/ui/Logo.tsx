"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  isScrolled?: boolean;
}

/**
 * Logo — Identidad Premium de Matias Mantenimiento
 * Restaurado a la versión V1 (Cinzel) aprobada por el usuario.
 */
export default function Logo({ className, showText = true, size = "md", isScrolled = false }: LogoProps) {
  const theme = siteConfig.theme;

  const sizeClasses = {
    sm: { icon: "text-2xl md:text-3xl", text: "text-[9px] md:text-[10px]", gap: "gap-0" },
    md: { icon: "text-4xl md:text-5xl", text: "text-[10px] md:text-xs", gap: "gap-1" },
    lg: { icon: "text-6xl md:text-7xl", text: "text-xs md:text-sm", gap: "gap-2" },
    xl: { icon: "text-8xl md:text-9xl", text: "text-sm md:text-lg", gap: "gap-3" },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={cn("flex flex-col items-center justify-center leading-none select-none group", className)}>
      <div className="relative flex items-center justify-center">
        {/* Las MM Entrelazadas - Estilo Cinzel (Clásico Premium) */}
        <div className={cn("relative flex items-center font-cinzel font-black tracking-tighter", currentSize.icon)}>
          <span 
            className="relative z-10 -mr-[0.35em] transition-all duration-700"
            style={{ 
              background: `linear-gradient(to bottom, ${theme.primaryColor} 0%, #FFF9E5 30%, ${theme.primaryColor} 55%, #8B6E1A 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: isScrolled 
                  ? `drop-shadow(0 0 5px rgba(0,0,0,0.8))`
                  : `drop-shadow(0 4px 10px ${theme.primaryColor}44)`,
            }}
          >
            M
          </span>
          <span 
            className="relative z-20 transition-all duration-700"
            style={{ 
              background: `linear-gradient(to bottom, #FFFFFF 0%, #FFF9E5 30%, ${theme.primaryColor} 50%, #B8860B 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: isScrolled 
                  ? `drop-shadow(0 0 8px rgba(0,0,0,0.9))`
                  : `drop-shadow(0 8px 15px ${theme.primaryColor}66)`,
            }}
          >
            M
          </span>
        </div>

        {/* Brillo dinámico */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
           <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
        </div>
      </div>

      {showText && (
        <div className={cn("flex flex-col items-center", currentSize.gap)}>
          <div className="w-10 h-[1.5px] bg-neutral-600 opacity-30 mt-2 mb-1" />
          <span 
            className={cn("font-montserrat font-black tracking-widest uppercase text-white/90 transition-all duration-700", currentSize.text)}
            style={{
                textShadow: isScrolled ? "0 0 10px black" : "0 2px 5px rgba(0,0,0,0.5)"
            }}
          >
            Matias Mantenimiento
          </span>
        </div>
      )}
    </div>
  );
}
