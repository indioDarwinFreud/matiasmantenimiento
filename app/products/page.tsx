"use client"

import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Separador from "@/components/ui/separador";

export default function ProductsPage() {
    return (
        <main className="min-h-screen relative flex flex-col pt-24 md:pt-32 pb-32 bg-transparent z-10">
            <WhyChooseUs />
            <Separador />
        </main>
    );
}
