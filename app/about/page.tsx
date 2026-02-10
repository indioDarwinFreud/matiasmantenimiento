"use client"

import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import { Users, Droplet, Ruler, CheckCircle } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative">
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <FadeIn direction="down">
                    <div className="text-center mb-16 relative z-10">
                        <h1 className="text-4xl md:text-7xl font-gotham font-black mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700 drop-shadow-sm uppercase">
                            QUIÉNES <span className="text-primary italic">SOMOS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium tracking-wide font-sans drop-shadow-sm">
                            Excelencia gráfica textil al servicio de tu imagen.
                        </p>
                    </div>
                </FadeIn>

                <div className="w-full max-w-4xl mx-auto space-y-12">
                    {/* Main Company Profile */}
                    <FadeIn delay={0.2} direction="up">
                        <Card className="relative overflow-hidden transition-all duration-500 shadow-2xl group min-h-[300px] flex flex-col md:flex-row bg-black/10 backdrop-blur-md border-primary/20">

                            {/* Orange Gradient Layer - EXACTLY AS FEATURE CARD */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/0 z-0" />

                            {/* Decorative Side Lines - Matching FeatureCard */}
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/20 to-transparent skew-x-12 -ml-16 z-0" />
                            <div className="hidden md:block absolute left-10 top-0 bottom-0 w-10 bg-white/30 skew-x-12 z-0" />
                            <div className="hidden md:block absolute left-24 top-0 bottom-0 w-6 bg-black/30 skew-x-12 z-0" />

                            <div className="relative z-10 py-0 px-8 md:px-16 flex flex-col items-center justify-center text-center h-full w-full mx-auto">
                                <div className="mb-8 flex items-center gap-4 self-start">
                                    <div className="p-3 bg-white/20 border border-black/10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                                        <Users className="text-black w-6 h-6" />
                                    </div>
                                    <h3 className="text-black/80 font-bold tracking-[0.2em] uppercase text-sm font-gotham">Nuestra Identidad</h3>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-gotham font-black italic text-black mb-8 drop-shadow-sm uppercase leading-tight tracking-wide">
                                    Líderes en Soluciones<br />Gráficas Textiles
                                </h2>

                                <div className="space-y-6 text-black/90 font-medium text-lg md:text-xl leading-loose font-sans max-w-2xl bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-sm border border-black/5 mx-auto">
                                    <p>
                                        En <span className="text-black font-extrabold border-b border-black/30 pb-0.5">Emperatriz Taller Gráfico</span>, fusionamos tecnología de impresión de vanguardia con un diseño artesanal meticuloso. Nos especializamos en materializar identidades visuales a gran escala.
                                    </p>
                                    <p>
                                        Desde banderas monumentales para estadios hasta banners corporativos de alta definición, nuestro compromiso es entregar productos que no solo resisten el paso del tiempo, sino que imponen presencia.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>

                    {/* Three Pillars of Professionalism */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.4} direction="up">
                            <InfoCard
                                icon={Ruler}
                                title="Precisión Milimétrica"
                                description="Cada centímetro cuenta. Trabajamos con medidas exactas y confección reforzada para garantizar que tu diseño se vea perfecto."
                                className="flex-col !items-start text-left p-8"
                            />
                        </FadeIn>

                        <FadeIn delay={0.5} direction="up">
                            <InfoCard
                                icon={Droplet}
                                title="Tecnología de Color"
                                description="Utilizamos tintas de sublimación de última generación que penetran la fibra, asegurando colores vibrantes que no se agrietan."
                                className="flex-col !items-start text-left p-8"
                            />
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up">
                            <InfoCard
                                icon={CheckCircle}
                                title="Garantía Profesional"
                                description="Asesoramiento integral desde el boceto hasta la entrega. Somos partners de clubes y empresas que exigen lo mejor."
                                className="flex-col !items-start text-left p-8"
                            />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
}
