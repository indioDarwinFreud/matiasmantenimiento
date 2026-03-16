/* eslint-disable @next/next/no-img-element */
"use client";

import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import { productsData } from "@/data";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/index";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/**
 * FeaturedServices — Sección unificada de servicios
 * Combina lo mejor de CategoryBanners y BestSellers en un Bento Grid premium.
 */
export default function FeaturedServices() {
    const theme = siteConfig.theme;
    
    // El primer servicio lo destacamos como "Urgencia" o principal
    const mainService = productsData[0];
    const otherServices = productsData.slice(1, 5); // Tomamos 4 más para la grilla

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-20 md:py-24">
            <FadeIn>
                <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px]" style={{ backgroundColor: theme.primaryColor }} />
                        <span className="font-black tracking-[0.3em] uppercase text-xs" style={{ color: theme.primaryColor }}>
                            Soluciones Integrales
                        </span>
                        <div className="w-12 h-[1px]" style={{ backgroundColor: theme.primaryColor }} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Nuestros <span style={{ color: theme.primaryColor }}>Servicios</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl text-lg font-medium leading-relaxed">
                        Especialistas en gas y plomería con certificación matriculada. Brindamos seguridad y confianza en cada rincón de tu hogar.
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Banner Destacado (Urgencias / Principal) */}
                <FadeIn delay={0.2} direction="right" className="lg:col-span-2">
                    <Link href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=HOLA MATIAS, TENGO UNA URGENCIA: ${mainService.title}`}>
                        <Card 
                            className="relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-white/10 group shadow-2xl transition-all duration-700 hover:border-primary/40 backdrop-blur-xl"
                            style={{ backgroundColor: theme.backgroundCard }}
                        >
                            {/* Fondo decorativo - Mostrar solo si es tema GOLD */}
                            {(siteConfig.activeTheme as string) === "GOLD_EMPIRE" ? (
                                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                                    <img 
                                        src="/assets/backgrounds/gold_bg_ultimate.png" 
                                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        alt="Background"
                                    />
                                </div>
                            ) : (
                                <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-white/5 to-transparent" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                            <div className="absolute inset-x-6 bottom-6 md:inset-x-12 md:bottom-12 z-20 flex flex-col items-start justify-end h-full py-4">
                                <div className="max-w-xl text-left w-full">
                                    <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                                        <span className="bg-red-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 md:px-3 md:py-1 rounded-full animate-pulse">
                                            Urgencias 24HS
                                        </span>
                                        <div className="hidden md:block w-1 h-1 rounded-full bg-white/30" />
                                        <span className="text-white/60 text-[9px] md:text-xs font-bold uppercase tracking-widest">Atención Inmediata</span>
                                    </div>
                                    <h3 className="text-3xl md:text-6xl font-black text-white mb-2 md:mb-4 leading-tight">
                                        Asistencia <br className="hidden md:block" />
                                        <span style={{ color: theme.primaryColor }}>Técnica Directa.</span>
                                    </h3>
                                    <p className="text-neutral-300 text-base md:text-lg font-medium line-clamp-3 md:line-clamp-none mb-6">
                                        {mainService.description}
                                    </p>
                                </div>
                                <div 
                                    className="w-14 h-14 md:w-20 md:h-20 rounded-full border flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110 self-end md:self-auto"
                                    style={{ 
                                        borderColor: `${theme.primaryColor}50`,
                                        background: `${theme.primaryColor}10`
                                    }}
                                >
                                    <ArrowUpRight className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-45" style={{ color: theme.primaryColor }} />
                                </div>
                            </div>
                        </Card>
                    </Link>
                </FadeIn>

                {/* Columna de Servicios en Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                    {otherServices.slice(0, 2).map((service, index) => (
                        <FadeIn key={service.id} delay={0.4 + (index * 0.2)} direction="left">
                            <ServiceItemMini service={service} theme={theme} />
                        </FadeIn>
                    ))}
                </div>

                {/* Fila Inferior de Servicios */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                     {productsData.slice(3, 6).map((service, index) => (
                        <FadeIn key={service.id} delay={0.6 + (index * 0.2)} direction="up">
                            <ServiceItemRegular service={service} theme={theme} />
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ServiceItemMini({ service, theme }: { service: Product, theme: any }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Link href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola Matias, consulto por: ${service.title}`}>
            <Card 
                onMouseMove={handleMouseMove}
                className="relative h-[234px] rounded-[2rem] overflow-hidden border-white/10 group p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-500 backdrop-blur-lg"
                style={{ backgroundColor: theme.backgroundCard }}
            >
                {/* Spotlight Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                350px circle at ${mouseX}px ${mouseY}px,
                                ${theme.primaryColor}15,
                                transparent 80%
                            )
                        `,
                    }}
                />

                <div>
                    <h4 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors" style={{ color: theme.textColors.cardTitle }}>
                        {service.title}
                    </h4>
                    <p className="text-sm text-neutral-400 font-medium line-clamp-2">
                        {service.description}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] font-black tracking-widest uppercase opacity-50 text-white">Consúltanos</span>
                    <MessageCircle size={20} style={{ color: theme.primaryColor }} className="group-hover:scale-125 transition-transform" />
                </div>
            </Card>
        </Link>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ServiceItemRegular({ service, theme }: { service: Product, theme: any }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Link href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola Matias, consulto por: ${service.title}`}>
            <Card 
                onMouseMove={handleMouseMove}
                className="relative rounded-[2rem] overflow-hidden border-white/10 group p-10 hover:border-primary/40 transition-all duration-500 backdrop-blur-lg flex flex-col items-center text-center h-full"
                style={{ backgroundColor: theme.backgroundCard }}
            >
                {/* Spotlight Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                350px circle at ${mouseX}px ${mouseY}px,
                                ${theme.primaryColor}15,
                                transparent 80%
                            )
                        `,
                    }}
                />

                <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 rotate-3 group-hover:rotate-0"
                    style={{ background: `${theme.primaryColor}10`, border: `1px solid ${theme.primaryColor}20` }}
                >
                    <ArrowUpRight className="w-8 h-8" style={{ color: theme.primaryColor }} />
                </div>
                <h4 className="text-2xl font-black text-white mb-4" style={{ color: theme.textColors.cardTitle }}>
                    {service.title}
                </h4>
                <p className="text-neutral-400 font-medium mb-8 flex-grow">
                    {service.description}
                </p>
                <div 
                    className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-black"
                    style={{ background: `${theme.primaryColor}10`, color: theme.primaryColor }}
                >
                    <MessageCircle size={14} /> Solicitá Presupuesto
                </div>
            </Card>
        </Link>
    );
}
