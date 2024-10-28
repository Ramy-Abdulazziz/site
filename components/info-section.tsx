import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";

const pInfo = {
    mint: {

    }, 
    
}

const InfoSection = () => {
    return (
        <motion.div
            className={cn(
                "xl:text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-lg font-cairo mb-6"
            )}
        >
            <motion.div>Projects</motion.div>
            <motion.div
                className={cn(
                    "font-cairo xl:text-base lg:text-base md:text-base sm:text-base xs:text-base"
                )}
            >

                Here is some info about me
            </motion.div>
        </motion.div>
    );
};

export default InfoSection;
