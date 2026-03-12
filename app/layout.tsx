import { siteConfig } from "@/config";

import type { Metadata } from "next";
import { Urbanist, Cinzel, Montserrat, Goldman, Russo_One } from "next/font/google"; // Re-import Urbanist

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-goldman",
});

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-one",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.seo.author }],
  keywords: siteConfig.seo.keywords,
  openGraph: {
    images: [{ url: siteConfig.seo.ogImage }],
  },
  icons: {
    icon: siteConfig.logo.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-black font-sans ${urbanist.variable} ${cinzel.variable} ${montserrat.variable} ${goldman.variable} ${russoOne.variable} relative`}
        style={{
          // Colores y formas (from config.ts → theme)
          "--primary-color": siteConfig.theme.primaryColor,
          "--primary-hover": siteConfig.theme.primaryHover,
          "--radius": siteConfig.theme.radius,
          // Tamaños de texto (from config.ts → typography)
          "--font-size-base": siteConfig.typography.sizeBase,
          "--font-size-lg": siteConfig.typography.sizeLg,
          "--font-size-xl": siteConfig.typography.sizeXl,
        } as React.CSSProperties}
      >
        {/* Global Seamless Background Texture (Blurred to hide pixelation) */}
        <div
          className="fixed inset-0 -z-50 w-full h-full pointer-events-none transition-all duration-700"
          style={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            backgroundImage: `url(${(siteConfig.theme as unknown as Record<string, any>).backgroundImage})`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            backgroundColor: (siteConfig.theme as unknown as Record<string, any>).backgroundColor || '#111827', // Fallback color sólido
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px)',     /* Suaviza los píxeles sin perder toda la forma */
            transform: 'scale(1.08)'  /* Escala para evitar los bordes blancos del blur */
          }}
        />

        {/* Noise overlay to give it a premium physical texture and remove banding/pixelation */}
        <div 
          className="fixed inset-0 -z-40 w-full h-full pointer-events-none opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
