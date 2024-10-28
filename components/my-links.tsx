import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

const links = {
    github: {
        link: "https://github.com/ramy-abdulazziz",
    },
    linkedin: {
        link: "https://linkedin.com/in/ramyabdulazziz",
    },
};

const Mylinks = () => {
    return (
        <motion.div
            className={cn("text-justify")}
            id="links"
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.div
                variants={textItem}
                className={cn(
                    "xl:text-2xl lg:text-xl md:text-lg sm:text-lg xs:text-lg font-cairo mb-6"
                )}
            >
                <motion.div>links</motion.div>
            </motion.div>
            <motion.div
                variants={textItem}
                className={cn(
                    "group flex flex-1 list-none items-center justify-left space-x-6"
                )}
            >
                {Object.entries(links).map(([key, link]) => (
                    <motion.div key={key}>
                        <Link
                            href={link.link}
                            target="_blank"
                            className={cn(
                                "underline decoration-gray-500 hover:decoration-white duration-300"
                            )}
                        >
                            {key}
                        </Link>
                        {"   "}↗
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Mylinks;
