import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-gradient-to-r from-orange-600 to-orange-400 text-black font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
        secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
        outline: "border border-orange-500 text-orange-500 hover:bg-orange-500/10",
        ghost: "bg-transparent text-orange-500 hover:bg-orange-500/10",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
