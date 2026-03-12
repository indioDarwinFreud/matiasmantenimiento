"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-40 w-full top-5 flex justify-start px-6 md:px-10 pointer-events-none">
      <header className="flex justify-start pointer-events-auto">
        <Link href="/" className="group">
          <div className={cn(
            "flex flex-col items-center justify-center p-3 transition-all duration-700 ease-in-out origin-top-left",
            isScrolled ? "scale-90 md:scale-75 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto" : "scale-100 opacity-100"
          )}>
            <Logo size="md" isScrolled={isScrolled} />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
