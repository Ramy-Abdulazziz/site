import * as motion from "framer-motion/client";
import "@fontsource-variable/cairo-play";
import { cn } from "@/lib/utils";

const ArabicName = () => {
    return (
        <motion.div
            className={cn("justify-center 2xl:scale-75 2xl:-mt-18 xl:-mt-20")}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 325 150"
                preserveAspectRatio="xMidYMid meet" // Ensures text stays centered
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="7vh" // Using viewport width for scaling
                    fontFamily="'Cairo', sans-serif" // Change to the desired font
                    className={cn(
                        "fill-current container mx-auto text-white font-cairoPlay"
                    )}
                >
                    رامي
                </text>
            </svg>
        </motion.div>
    );
};

export default ArabicName;
