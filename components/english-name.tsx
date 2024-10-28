import * as motion from "framer-motion/client";
import ArabicName from "./arabic-name";
import Image from "next/legacy/image";
import "@fontsource-variable/cairo-play";
import { cn } from "@/lib/utils";

const EnglishName = () => {
    return (
        <motion.div className={cn("justify-center")}>
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
                        "fill-current container mx-auto text-white font-cairo"
                    )}
                >
                    Ramy
                </text>
            </svg>
        </motion.div>
    );
};

export default EnglishName;
