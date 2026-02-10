"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";

const cinzel = Cinzel({ subsets: ["latin"] });

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-40 w-full top-5 flex justify-start px-10">
      <header className="flex justify-start">
        <Link href="/" className="group">
          <div
            className="flex flex-col items-center justify-center p-2 transition-all duration-500 bg-transparent"
          >
            <Image
              src="/icono/LogoTres.png"
              alt="Logo Emperatriz"
              width={100}
              height={50}
              className={`rounded-xl transition-all duration-500 group-hover:scale-105 
                ${scrolled ? "" : "drop-shadow-lg"}`}
              style={
                scrolled
                  ? {
                    filter:
                      "drop-shadow(0 0 15px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
                  }
                  : {}
              }
            />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
