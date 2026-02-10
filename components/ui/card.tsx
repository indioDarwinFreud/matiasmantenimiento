import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
    return (
        <div
            className={`
        glass-panel rounded-xl p-6 
        border border-white/10 
        hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] 
        transition-all duration-300 
        bg-black/80
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
}
