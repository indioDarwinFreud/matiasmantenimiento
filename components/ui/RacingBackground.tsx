import React from 'react';

interface RacingBackgroundProps {
    className?: string;
    opacity?: string;
}

export const RacingBackground: React.FC<RacingBackgroundProps> = ({
    className = "",
    opacity = "opacity-40"
}) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className} ${opacity}`}>
            <div className="h-full w-[150%] -ml-[25%] flex -skew-x-12 justify-end">
                <div className="h-full w-full bg-transparent" />
                <div className="h-full w-24 bg-primary/10" />
                <div className="h-full w-4 bg-transparent" />
                <div className="h-full w-8 bg-white/10" />
                <div className="h-full w-12 bg-transparent" />
                <div className="h-full w-32 bg-primary/10" />
                <div className="h-full w-8 bg-transparent" />
                <div className="h-full w-16 bg-white/5" />
                <div className="h-full w-24 bg-transparent" />
                <div className="h-full w-40 bg-primary/5" />
                <div className="h-full w-12 bg-transparent" />
                <div className="h-full w-10 bg-white/10" />
                <div className="h-full w-full bg-transparent" />
            </div>
        </div>
    );
};
