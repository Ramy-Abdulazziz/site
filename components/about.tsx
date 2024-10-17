import * as motion from "framer-motion/client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const AboutSection = () => {
    return (
        <motion.div className={cn("")}>
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
                Engineering and am curently enrolled in Georgia Tech's M.S. in
                Computer Science program online, and part time.
            </motion.div>
            <motion.div
                className={cn(
                    "justify font-cairo xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs mt-6"
                )}
            >
                I love digging into the weeds of systems to make improvements to
                developer experiences. I enjoy learning about Operating Systems,
                Computer Vision, Machine Learning, theoretical Computer Science,
                and Algorithmic VLSI Design.
            </motion.div>
            <motion.div
                className={cn(
                    "justify font-cairo xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs mt-6"
                )}
            >
                I'm based in NY and when I'm not coding, you can find me
                enjoying life with my fiance Shazia. Feel free to reach out with
                project ideas, new opportunities, or to learn more about me.
            </motion.div>
        </motion.div>
    );
};

export default AboutSection;
