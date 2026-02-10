import { featuresData } from "@/data";
import FadeIn from "@/components/ui/FadeIn";
import FeatureCard from "@/components/cards/FeatureCard";

export default function FeatureSection() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto mt-24">
            {featuresData.map((feature, index) => (
                <FadeIn key={feature.id} delay={0.2 * (index + 1)} direction="up" className="w-full">
                    <FeatureCard
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        imagePosition={feature.imagePosition as "center" | "left" | "right" | undefined}
                    />
                </FadeIn>
            ))}
        </div>
    );
}
