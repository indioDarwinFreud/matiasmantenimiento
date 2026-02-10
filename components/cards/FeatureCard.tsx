import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
    imagePosition?: string;
}

const FeatureCard = ({ icon: Icon, title, description, image, imagePosition = "center" }: FeatureCardProps) => {
    return (
        <Card
            // 📱 MOBILE: h-32 (Height) | 💻 PC: md:h-[300px]
            // 📱 MOBILE: p-4 (Padding) | 💻 PC: md:p-8
            className="relative flex flex-row items-center text-left overflow-hidden border-white/20 transition-all duration-500 p-4 md:p-8 group shadow-xl w-full h-32 md:h-[300px] bg-cover"
            style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
        >
            {/* Gradient Overlay: Solid Orange on Left -> Transparent on Right */}
            {/* Adjusted via-point to 35% to reveal more of the image center */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent/5 via-45% md:via-35% z-0" />

            {/* Decorative Side Lines - Now ON TOP of gradient but BEHIND content */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/20 to-transparent skew-x-12 -ml-16 z-0" />
            <div className="hidden md:block absolute left-10 top-0 bottom-0 w-10 bg-white/30 skew-x-12 z-0" />
            <div className="hidden md:block absolute left-24 top-0 bottom-0 w-6 bg-black/30 skew-x-12 z-0" />

            {/* Content Layer */}
            <div className="relative z-10 flex flex-row items-center gap-3 md:gap-6 max-w-xl">
                <div className="flex-shrink-0 p-2 md:p-4 bg-white/90 rounded-full shadow-lg border-2 border-primary">
                    <Icon className="text-primary drop-shadow-sm w-5 h-5 md:w-8 md:h-8" />
                </div>
                <div>
                    {/* 📱 MOBILE: text-xl (Bigger) | 💻 PC: md:text-4xl (Bigger) */}
                    <h3 className="text-xl md:text-4xl font-heading font-black italic text-black mb-1 md:mb-2 drop-shadow-md tracking-wide uppercase leading-tight">{title}</h3>
                    {/* 📱 MOBILE: text-sm (Readable) | 💻 PC: md:text-2xl (Large) */}
                    <p className="text-black/90 text-sm md:text-2xl font-medium leading-normal bg-white/20 backdrop-blur-sm p-1 md:p-2 rounded-lg inline-block shadow-sm line-clamp-2 md:line-clamp-none">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default FeatureCard;
