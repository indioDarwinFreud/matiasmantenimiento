"use client"

import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/config";
import { RacingCardContainer } from "@/components/ui/RacingCardContainer";
import { Shield, Wrench, CheckCircle } from "lucide-react";

export default function AboutPage() {
    const theme = siteConfig.theme;

    return (
        <div className="min-h-screen relative" >
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-40">
                <FadeIn direction="down">
                    <div className="text-center mb-12 md:mb-16 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-lg">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Conoce al Profesional
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-gotham font-black mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-300 to-primary drop-shadow-lg uppercase">
                            MATÍAS ECHAVE
                        </h1>
                        <p className="text-lg md:text-2xl text-neutral-400 font-light tracking-wide max-w-2xl mx-auto">
                            Especialista matriculado al servicio de tu seguridad y tranquilidad.
                        </p>
                    </div>
                </FadeIn>

                <div className="w-full max-w-5xl mx-auto space-y-12">
                    {/* Main Company Profile */}
                    <FadeIn delay={0.2} direction="up">
                        <RacingCardContainer
                            glass
                            className="w-full flex flex-col min-h-[400px]"
                        >
                            <div className="relative z-10 py-12 px-6 md:px-16 flex flex-col md:flex-row gap-12 items-center h-full w-full mx-auto">
                                
                                {/* Image / Avatar */}
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2" 
                                         style={{ background: `linear-gradient(135deg, ${theme.primaryColor} 0%, transparent 100%)` }}>
                                        <div className="w-full h-full rounded-full bg-neutral-900 overflow-hidden flex items-center justify-center border-2"
                                             style={{ borderColor: theme.backgroundColor }}>
                                            {/* Si hay una foto real de Matías, la ponemos acá. Por ahora, un placeholder premium o ícono */}
                                            <Shield className="w-24 h-24 opacity-20" style={{ color: theme.primaryColor }} />
                                            <div className="absolute font-gotham font-black text-6xl opacity-10 uppercase tracking-tighter mix-blend-overlay">MM</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full md:w-2/3 text-left">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-gotham font-black text-white mb-6 uppercase tracking-wide flex flex-wrap items-center gap-2">
                                        Trayectoria 
                                        <span className="text-xl italic font-serif text-neutral-500 lowercase font-normal">y</span> 
                                        <span style={{ color: theme.primaryColor }}>Compromiso</span>
                                    </h2>

                                    <div className="space-y-6 text-neutral-300 font-light text-base md:text-lg leading-relaxed font-sans">
                                        <p>
                                            Con <strong className="text-white font-bold">más de 20 años de experiencia</strong> trabajando en hogares, consorcios y empresas de Mendoza, sé exactamente lo importante que es hacer las cosas bien desde la primera vez.
                                        </p>
                                        <p>
                                            No soy un improvisado. Soy un <strong className="text-white font-bold">Gasista y Plomero Matriculado</strong>, lo que significa que cada instalación, reparación o asesoramiento que realizo está respaldado por la normativa vigente y conocimientos técnicos certificados.
                                        </p>
                                        <p className="p-4 rounded-xl bg-black/40 border-l-4" style={{ borderColor: theme.primaryColor }}>
                                            <em className="text-neutral-400 italic">&quot;Mi objetivo no es solo arreglar una pérdida o habilitar un medidor, es brindarte la tranquilidad de que tu casa y tu familia están seguras.&quot;</em>
                                        </p>
                                        <p>
                                            Valoro tu tiempo y tu confianza. Por eso ofrezco diagnósticos claros, presupuestos sin sorpresas y soluciones definitivas con materiales de primera calidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RacingCardContainer>
                    </FadeIn>

                    {/* Stats / Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Matriculado", text: "Habilitación oficial para instalaciones seguras y normadas." },
                            { icon: Wrench, title: "Experiencia", text: "+20 años de trayectoria impecable en Mendoza." },
                            { icon: CheckCircle, title: "Garantía", text: "Excelencia y soluciones definitivas en cada trabajo." }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={0.4 + (i * 0.1)} direction="up" className="h-full">
                                <div className="h-full p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/5 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                                    {/* Glass Glow Effect */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] -z-10 group-hover:bg-primary/10 transition-colors" />
                                    
                                    <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500 shadow-inner" style={{ color: theme.primaryColor }}>
                                        <item.icon className="w-8 h-8 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-gotham font-black text-white mb-4 uppercase tracking-tighter italic">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-neutral-400 font-light text-base leading-relaxed">
                                        {item.text}
                                    </p>

                                    {/* Bottom Line Decor */}
                                    <div className="absolute bottom-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
