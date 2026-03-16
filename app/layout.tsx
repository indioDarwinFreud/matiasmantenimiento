import { siteConfig } from "@/config";

import type { Metadata } from "next";
import { Urbanist, Cinzel, Montserrat, Goldman, Russo_One } from "next/font/google"; // Re-import Urbanist

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

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
        className={`text-white font-sans ${urbanist.variable} ${cinzel.variable} ${montserrat.variable} ${goldman.variable} ${russoOne.variable} relative overflow-x-hidden`}
        style={{
          // Colores y formas (from config.ts → theme)
          "--primary-color": siteConfig.theme.primaryColor,
          "--primary-hover": siteConfig.theme.primaryHover,
          "--radius": siteConfig.theme.radius,
          "--background-color": siteConfig.theme.backgroundColor,
          // Tamaños de texto (from config.ts → typography)
          "--font-size-base": siteConfig.typography.sizeBase,
          "--font-size-lg": siteConfig.typography.sizeLg,
          "--font-size-xl": siteConfig.typography.sizeXl,
        } as React.CSSProperties}
      >
        <CustomCursor />
        {/* ABSOLUTE BACKGROUND LAYER - z-0 with Parallax */}
        <ParallaxBackground />

        {/* CONTENT LAYER - Higher z-index but with glass effects */}
        <div className="relative z-10 min-h-screen bg-transparent">
          <Navbar />
          <Header />
          <main className="bg-transparent">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
