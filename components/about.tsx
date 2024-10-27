import * as motion from "framer-motion/client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const AboutSection = () => {
    return (
        <motion.div className={cn("text-justify")}>
            <motion.div
                className={cn(
                    "xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-cairo mb-6"
                )}
            >
                Ramy Abdulazziz • رامي عبدالعزيز
            </motion.div>
            <motion.div
                className={cn(
                    "font-cairo xl:text-xl lg:text-lg md:text-base sm:text-base xs:text-xs"
                )}
            >
                My passion is leveraging technology to solve complex problems
                and improve people's lives. I recently graduated from Stony
                Brook University with my B.S. in Computer Science and Electrical
                Engineering and am curently enrolled in Georgia Tech's online
                M.S. in Computer Science program.
            </motion.div>
            <motion.div
                className={cn(
                    "justify font-cairo xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs mt-6"
                )}
            >
                I love digging into the weeds of systems to make improvements to
                developer experiences. I enjoy learning about Operating Systems,
                Computer Vision, Machine Learning, and theoretical Computer
                Science.
            </motion.div>
            <motion.div
                className={cn(
                    "justify font-cairo xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs mt-6"
                )}
            ></motion.div>
        </motion.div>
    );
};

export default AboutSection;
