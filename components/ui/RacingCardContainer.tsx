import { Card } from "@/components/ui/card";
import { RacingBackground } from "@/components/ui/RacingBackground";

interface RacingCardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string; // Allow overriding styles if needed
    opacity?: "opacity-10" | "opacity-20" | "opacity-30" | "opacity-40" | "opacity-50";
}

export const RacingCardContainer = ({ children, className = "", opacity = "opacity-30", ...props }: RacingCardContainerProps) => {
    return (
        <Card
            className={`
                relative overflow-hidden transition-all duration-500 shadow-2xl group
                !bg-neutral-900/70 backdrop-blur-md border-white/10
                hover:!bg-black/90 hover:border-primary/50
                ${className}
            `}
            {...props}
        >
            {/* The signature diagonal stripes background */}
            <RacingBackground opacity={opacity} />

            {/* Content Wrapper - Ensures content is above background */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </Card>
    );
};
