import AboutSection from "@/components/about";
import InfoSection from "@/components/info-section";
import MovingName from "@/components/moving-name";
import Mylinks from "@/components/my-links";
import Nav from "@/components/nav";
import TextSection from "@/components/text-section";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <>
            <div
                className={cn("sticky top-0 z-50 backdrop-blur-md")}
                style={{
                    backgroundColor: "hsl(var(--background) / 0.75)", // 75% opacity
                }}
            >
                <Nav />
            </div>
            <MovingName />
            <div
                className={cn(
                    "container mx-auto 2xl:max-w-3xl xl:max-w-3xl lg:max-w-2xl sm:max-w-lg xs:max-w-sm max-w-xl px-4 py-8 lg:-mt-12 2xl:-mt-12 2xl:py-2"
                )}
            >
                <div id="about-me">
                    <AboutSection />
                </div>
                <Separator className={cn("mt-6 mb-6")} />
                <InfoSection />
                <Separator className={cn("mt-6 mb-6")} />
                <Mylinks />
                <Separator className={cn("mt-6 mb-6")} />
                <div
                    className={cn(
                        "text-base min-h-40 font-cairo text-muted-foreground mb-10 md sm:justify-center "
                    )}
                >
                    <div
                        className={cn(
                            "mt-10 text-center 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center"
                        )}
                    >
                        Ramy Abdulazziz
                    </div>
                </div>
            </div>
        </>
    );
}
