import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

/**
 * AboutPreview — Sección "Quiénes Somos" con enfoque premium
 * Imagen personalizada con logo MM inyectado por código para máxima nitidez.
 */
export default function AboutPreview() {
    const theme = siteConfig.theme;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pt-16 pb-24 md:py-32 relative overflow-visible">
            
            {/* Destaque Blanco / Bloom de Fondo Avanzado (Fumigado que se desvanece) */}
            <div 
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] w-full pointer-events-none -z-10 opacity-10"
                style={{
                    background: `radial-gradient(circle at 40% 50%, white 0%, transparent 60%)`,
                    filter: 'blur(100px)'
                }}
            />
            <div 
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full w-full pointer-events-none -z-10 opacity-5"
                style={{
                    background: `radial-gradient(circle at 60% 50%, white 0%, transparent 70%)`,
                    filter: 'blur(120px)'
                }}
            />

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Image Section - Premium Glass Card */}
                <FadeIn delay={0.2} direction="right" className="w-full lg:w-1/2 relative group">
                    <div
                        className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-sm"
                        style={{ backgroundColor: theme.backgroundColor }}
                    >
                        {/* Interactive overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                        
                        {/* Imagen Principal */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/sections/about_gasista_premium.png"
                            alt="Matías Mantenimiento - Excelencia Técnica"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />

                        {/* Logo MM Premium por Código sobre la espalda */}
                        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-110 md:scale-125">
                            <Logo size="lg" showText={false} />
                        </div>

                        {/* Decorative Badge */}
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute bottom-8 left-8 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
                        >
                            <p className="font-cinzel text-3xl font-black mb-1" style={{ color: theme.primaryColor }}>MATRICULADO</p>
                            <p className="text-xs text-neutral-300 font-bold tracking-[0.2em] uppercase">Seguridad Garantizada</p>
                        </motion.div>
                    </div>

                    {/* Aura decorativa exterior */}
                    <div 
                        className="absolute -inset-6 blur-[80px] -z-10 rounded-full opacity-20 pointer-events-none" 
                        style={{ backgroundColor: theme.primaryColor }}
                    />
                </FadeIn>

                {/* Text Content Section */}
                <FadeIn delay={0.4} direction="left" className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                    <div className="mb-6">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-[2px]" style={{ backgroundColor: theme.primaryColor }} />
                            <p className="font-black tracking-[0.3em] uppercase text-xs" style={{ color: theme.primaryColor }}>
                                Pasión por la Precisión
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] drop-shadow-md">
                            Excelencia en <br />
                            <span style={{ color: theme.primaryColor }}>Gas y Plomería.</span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl font-medium">
                        Como gasista matriculado, mi compromiso es brindar soluciones técnicas de alto nivel donde la seguridad y el detalle son lo primero. En <span className="text-white">{siteConfig.name}</span>, transformamos el mantenimiento en un estándar de confianza y durabilidad para tu hogar.
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-12">
                        <div>
                            <p className="text-3xl font-black text-white mb-1">Gabinete</p>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Instalaciones</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white mb-1">Integral</p>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Plomería</p>
                        </div>
                    </div>

                    <Link href="/about" className="group flex items-center gap-6 w-fit">
                        <div className="relative">
                            <span className="text-white font-black text-xl tracking-wide group-hover:text-white/80 transition-colors uppercase">
                                Conocenos Más
                            </span>
                            <div className="absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: theme.primaryColor }} />
                        </div>
                        <div 
                            className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110"
                            style={{ borderColor: `${theme.primaryColor}50` }}
                        >
                            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" style={{ color: theme.primaryColor }} />
                        </div>
                    </Link>
                </FadeIn>

            </div>
        </div>
    );
}
