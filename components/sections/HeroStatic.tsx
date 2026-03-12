import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { siteConfig } from "@/config";
import { NeonButton } from "@/components/ui/NeonButton";
import { motion } from "framer-motion";

/**
 * HeroStatic — Sección Hero principal de la Home
 * Rediseño Premium para Matias Mantenimiento (Tema Gold)
 */
export default function HeroStatic() {
    const theme = siteConfig.theme;

    return (
        <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
            
            {/* Capas de Luces Decorativas (Aura Dorada) */}
            <div 
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none z-0"
                style={{ backgroundColor: theme.primaryColor }}
            />
            <div 
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none z-0"
                style={{ backgroundColor: theme.primaryColor }}
            />

            {/* Partículas de Brillo Animadas (Opcional si se desea más Wow) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ backgroundColor: theme.primaryColor }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
                
                {/* Línea decorativa superior */}
                <FadeIn delay={0.1} direction="down">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${theme.primaryColor})` }} />
                        <span className="text-sm font-black tracking-[0.3em] uppercase opacity-70" style={{ color: theme.primaryColor }}>
                            Excelencia en Servicio
                        </span>
                        <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to left, transparent, ${theme.primaryColor})` }} />
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    {/* CAMBIO: Se redujeron los tamaños en móvil (text-3xl) p/ evitar que se corte el nombre - Línea 65 */}
                    <h1 className="text-3xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight leading-none">
                        <span className="block text-white drop-shadow-2xl">BIENVENIDOS A</span>
                        <span 
                            className="block font-cinzel italic tracking-tighter break-words"
                            style={{ 
                                color: theme.primaryColor,
                                textShadow: `0 0 30px ${theme.primaryColor}44`
                            }}
                        >
                            {siteConfig.name.toUpperCase()}
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                    <div className="relative inline-block mt-4 mb-12">
                        <p className="text-xl md:text-3xl text-neutral-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            {siteConfig.description}
                        </p>
                        {/* Subrayado elegante */}
                        <div 
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full opacity-50"
                            style={{ backgroundColor: theme.primaryColor }}
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.7} direction="up" className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-6">
                    <Link href="/contact" className="w-full sm:w-auto">
                        <NeonButton className="py-7 px-16 group relative overflow-hidden">
                            <span className="relative z-20 flex items-center gap-2">
                                PEDIR PRESUPUESTO 
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </NeonButton>
                    </Link>
                </FadeIn>
            </div>

            {/* Indicador de Scroll */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </div>
    );
}
