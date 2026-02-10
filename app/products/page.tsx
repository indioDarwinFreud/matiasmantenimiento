"use client"

import { useState, useEffect, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { productsData } from "@/data";
import { Store, Search as SearchIcon, Ruler } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FadeIn from "@/components/ui/FadeIn";

function ProductsContent() {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<"Bandera" | "Banner">("Bandera");

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam === 'Banner') {
            setActiveCategory('Banner');
        } else if (categoryParam === 'Bandera') {
            setActiveCategory('Bandera');
        }
    }, [searchParams]);

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen relative">
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <FadeIn direction="down">
                    <div className="text-center mb-12 relative z-10 py-8">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-sm font-gotham">
                            Nuestros Productos
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto drop-shadow-sm font-sans">
                            Explorá nuestra variedad de banderas y banners personalizados.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-black/40 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl flex gap-1 relative z-20">
                            {(["Bandera", "Banner"] as const).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative px-8 py-3 rounded-full text-sm uppercase tracking-wider font-bold transition-colors duration-300 z-10 ${activeCategory === category ? "text-white" : "text-white/50 hover:text-white"
                                        }`}
                                >
                                    {activeCategory === category && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            style={{ zIndex: -1 }}
                                        />
                                    )}
                                    {category === "Bandera" ? "Banderas" : "Banners"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-2xl mx-auto p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-xl">
                        <div className="flex-1 relative group">
                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 group-hover:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder={`Buscar en ${activeCategory}s...`}
                                className="w-full bg-transparent border-none rounded-xl py-4 pl-12 pr-4 text-black focus:outline-none placeholder:text-gray-400 font-sans"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </FadeIn>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 0.1} direction="up" className="h-full">
                            <Card className="overflow-hidden bg-white/60 backdrop-blur-md border-primary/10 hover:border-primary/50 hover:bg-white/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500 group cursor-pointer shadow-lg flex flex-col h-full hover:scale-[1.02]">
                                <div
                                    className="h-64 bg-gray-800 relative overflow-hidden"
                                    onClick={() => setSelectedImage(product.image)}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                                        <p className="text-white font-bold flex items-center gap-2">
                                            <Ruler size={18} /> Ver Detalle / Zoom
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-primary group-hover:text-orange-600 transition-colors drop-shadow-md">{product.title}</h3>
                                        <span className="bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors text-xs px-2 py-1 rounded-full shadow-sm h-fit">{product.category}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1 drop-shadow-sm transition-colors">
                                        {/* Use location as a subtitle/tagline if needed, matching style */}
                                        <span className="font-medium">{product.location}</span>
                                    </p>
                                    <p className="text-gray-700 text-sm mb-6 flex-grow drop-shadow-sm leading-relaxed transition-colors font-medium">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={product.website} className="w-full block">
                                            <Button variant="outline" className="w-full border-primary/50 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all hover:bg-primary/90 hover:text-white">
                                                Consultar
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 transition-all duration-300 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <span className="text-4xl font-thin">&times;</span>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Vista Previa"
                            className="w-full h-full object-contain rounded-lg shadow-2xl drop-shadow-[0_0_50px_rgba(249,115,22,0.2)]"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Cargando productos...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
