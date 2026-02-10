import { LucideIcon } from "lucide-react";
import { RacingCardContainer } from "@/components/ui/RacingCardContainer";

interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export const InfoCard = ({ icon: Icon, title, description, className }: InfoCardProps) => {
    return (
        <RacingCardContainer className={`h-full p-10 flex items-center gap-6 ${className}`}>

            {/* Icon Box - Left Side */}
            <div className="shrink-0">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500">
                    <Icon className="text-primary w-7 h-7 group-hover:text-white transition-colors" />
                </div>
            </div>

            {/* Text Content - Right Side */}
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-gotham tracking-tight uppercase">
                    {title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed font-light transition-colors text-sm md:text-base">
                    {description}
                </p>
            </div>

        </RacingCardContainer>
    );
};
