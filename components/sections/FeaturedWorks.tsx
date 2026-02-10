
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { portfolioData } from "@/data";
import { ThumbsUp } from "lucide-react";

export default function FeaturedWorks() {
    return (
        <div className="mt-32">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">
                    Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-sm">Trabajos</span>
                </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {portfolioData.map((product, index) => (
                    <FadeIn key={product.id} delay={index * 0.2} direction="up" className="h-full">
                        <Card className="overflow-hidden bg-white/60 backdrop-blur-md border-primary/10 hover:border-primary/50 hover:bg-white/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500 group cursor-pointer shadow-lg flex flex-col h-full hover:scale-[1.02]">
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-primary group-hover:text-orange-600 transition-colors drop-shadow-md">{product.title}</h3>
                                    <span className="bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors text-xs px-2 py-1 rounded-full shadow-sm h-fit">{product.category}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1 drop-shadow-sm transition-colors">
                                    <ThumbsUp size={16} className="text-primary group-hover:text-orange-600" /> {product.location}
                                </p>
                                <p className="text-gray-700 text-sm mb-6 flex-grow drop-shadow-sm leading-relaxed transition-colors font-medium">
                                    {product.description}
                                </p>
                                <div className="mt-auto">
                                    <Link href={product.website || "#"} target="_blank" rel="noopener noreferrer" className="w-full block">
                                        <Button variant="outline" className="w-full border-primary/50 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all hover:bg-primary/90 hover:text-white">
                                            Ver Detalle
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
