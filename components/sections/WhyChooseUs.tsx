"use client";

import { CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";

const diferenciales = [
    {
        icon: Award,
        title: "Más de 20 años de trayectoria",
        description: "Experiencia comprobada resolviendo trabajos complejos en hogares y empresas, con conocimiento real del rubro."
    },
    {
        icon: ShieldCheck,
        title: "Técnicos matriculados",
        description: "Gasistas y plomeros habilitados que trabajan bajo normativa, priorizando la seguridad en cada intervención."
    },
    {
        icon: CheckCircle2,
        title: "Respuesta clara y profesional",
        description: "Diagnósticos precisos, explicaciones concretas y soluciones reales. Sin improvisaciones ni sobrecostos."
    },
    {
        icon: Clock,
        title: "Confianza a largo plazo",
        description: "Nuestros clientes nos eligen nuevamente porque cumplimos, trabajamos bien y respondemos de forma eficiente."
    }
];

export default function WhyChooseUs() {
    const theme = siteConfig.theme;

    return (
        <section className="py-20 relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <FadeIn direction="up" className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-lg">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.primaryColor }} />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
                            Nuestros Diferenciales
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        ¿Por qué elegir <br className="md:hidden" />
                        <span style={{ color: theme.primaryColor }}>{siteConfig.name}?</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Experiencia real, seguridad certificada y responsabilidad en cada trabajo.
                    </p>
                </FadeIn>

                {/* Grid 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {diferenciales.map((item, index) => (
                        <FadeIn 
                            key={index} 
                            delay={index * 0.15} 
                            direction="up"
                        >
                            <div className="relative group min-h-[180px] h-full flex items-start gap-6 p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                {/* Hover Glow */}
                                <div 
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"
                                    style={{ backgroundColor: theme.primaryColor }}
                                ></div>

                                {/* Icon */}
                                <div className="flex-shrink-0 relative">
                                    <div 
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-inner group-hover:scale-110 transition-transform duration-500"
                                    >
                                        <item.icon className="w-7 h-7" style={{ color: theme.primaryColor }} />
                                    </div>
                                    <div 
                                        className="absolute inset-0 blur-md opacity-50 rounded-2xl"
                                        style={{ backgroundColor: theme.primaryColor }}
                                    ></div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-col">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
