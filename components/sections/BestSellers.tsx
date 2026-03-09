import FadeIn from "@/components/ui/FadeIn";
import { productsData } from "@/data";
import ProductCard from "@/components/cards/ProductCard";

/**
 * BestSellers — Grilla de productos destacados en la Home
 * Muestra tarjetas de producto reutilizando el componente ProductCard.
 *
 * Datos: `productsData` de data.tsx.
 * Muestra los primeros 4 productos del catálogo principal.
 */
export default function BestSellers() {
    return (
        <div className="mt-32 w-full max-w-7xl mx-auto px-4 pb-24">
            <FadeIn>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-white drop-shadow-sm">
                        Productos <span className="text-[#C0C0C0]">Destacados</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#C0C0C0] rounded-full"></div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productsData.slice(0, 4).map((product, index) => (
                    <FadeIn key={product.id} delay={index * 0.2} direction="up" className="h-full">
                        <ProductCard product={product} />
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
