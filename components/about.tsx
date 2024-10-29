import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";

const textContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.25,
        },
    },
};

const textItem = {
    hidden: { opacity: 0, y: 5 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const AboutSection = () => {
    return (
        <motion.div className={cn("text-justify")}>
            <motion.div
                className={cn(
                    "xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-cairo mb-6"
                )}
            >
                ramy abdulazziz • رامي عبدالعزيز
            </motion.div>
            <motion.div
                variants={textContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={textItem}
                    className={cn(
                        "font-cairo xl:text-base lg:text-base md:text-base sm:text-base xs:text-base"
                    )}
                >
                    {`My passion is leveraging technology to solve complex
                    problems and improve people's lives. I recently graduated
                    from Stony Brook University with my B.S. in Computer Science
                    and Electrical Engineering and am currently enrolled in
                    Georgia Tech's online M.S. in Computer Science program.`}
                </motion.div>
                <motion.div
                    variants={textItem}
                    className={cn(
                        "justify font-cairo xl:text-base lg:text-base md:text-base sm:text-base xs:text-base mt-6"
                    )}
                >
                    {`I love digging into the weeds of systems to make
                    improvements to developer experiences. I enjoy learning
                    about Operating Systems, Computer Vision, Machine Learning,
                    and theoretical Computer Science.`}
                </motion.div>
                <motion.div
                    variants={textItem}
                    className={cn(
                        "justify font-cairo xl:text-base lg:text-base md:text-base sm:text-base xs:text-base mt-6"
                    )}
                >
                    {`I'm based in NY and when I'm not coding, you can find me climbing the ladder in showdown and enjoying life with my fiancé Shazia. Feel free to reach out with project ideas, new opportunities, or to learn more about me.`}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutSection;
