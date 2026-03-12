import { Card } from "@/components/ui/card";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config";

/**
 * CategoryBanners — Bloques visuales de navegación por colecciones
 * Muestra 2 banners grandes tipo "categoría" que enlazan a /products?category=...
 * Efecto hover de escala e iluminación plata al pasar el mouse.
 *
 * Para cambiar los títulos, imágenes o links de los banners, editá directamente
 * este componente (los textos están definidos inline, no en data.tsx).
 */
export default function CategoryBanners() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-32">
            <FadeIn>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-white drop-shadow-sm">
                        Servicios <span className="text-[#C0C0C0]">Destacados</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#C0C0C0] rounded-full"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Categoría 1: Principal / Ofertas */}
                <FadeIn delay={0.2} direction="up" className="lg:col-span-2 h-full">
                    <Link href="/contact">
                        <Card
                            className="relative overflow-hidden group h-64 md:h-80 transition-all duration-500 rounded-2xl cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-primary/20 backdrop-blur-md"
                            style={{
                                backgroundColor: siteConfig.theme.backgroundCard,
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                backgroundImage: `url(${(siteConfig.theme as unknown as Record<string, any>).cardImage})`,
                                backgroundSize: 'cover',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/placeholder.svg"
                                alt="Urgencias 24hs"
                                className="absolute right-0 top-0 w-1/2 h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                                style={{ maskImage: "linear-gradient(to right, transparent, black)" }}
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 w-2/3">

                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-colors">Urgencias 24hs</h3>
                                        <p className="text-neutral-300 font-medium max-w-sm hidden md:block">Atención inmediata para problemas de gas o plomería. No esperes más.</p>
                                    </div>
                                    <div
                                        className="p-3 rounded-full shadow-[0_0_15px_rgba(192,192,192,0.4)] group-hover:scale-110 transition-transform hidden md:block border border-white/10"
                                        style={{ background: siteConfig.theme.backgroundMain }}
                                    >
                                        <ArrowUpRight className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </FadeIn>

                {/* Categoría 2: Nueva Temporada */}
                <FadeIn delay={0.4} direction="up" className="h-full">
                    <Link href="/contact">
                        <Card
                            className="relative overflow-hidden group h-64 md:h-80 transition-all duration-500 rounded-2xl cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-primary/20 backdrop-blur-md"
                            style={{
                                backgroundColor: siteConfig.theme.backgroundCard,
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                backgroundImage: `url(${(siteConfig.theme as unknown as Record<string, any>).cardImage})`,
                                backgroundSize: 'cover',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/placeholder.svg"
                                alt="Lo más nuevo"
                                className="absolute inset-0 w-full h-1/2 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                                style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }}
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">

                                <div className="flex justify-between items-end">
                                    <h3 className="text-2xl font-black text-white group-hover:scale-110 transition-colors">Presupuestos</h3>
                                    <div
                                        className="p-2 rounded-full border border-white/10 group-hover:opacity-80 transition-all shadow-[0_0_15px_rgba(192,192,192,0.2)]"
                                        style={{ background: siteConfig.theme.backgroundMain }}
                                    >
                                        <ArrowUpRight className="text-white group-hover:text-white w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
}
