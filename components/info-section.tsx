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

const pInfo = {
    mint: {
        name: "mintmaps",
        desc: "Full stack web app with social features built with Next.js, MongoDB, and TypeScript for users to create, upload, edit, and share multiple map types.",
        link: "https://mintmaps.site/",
    },
    finance: {
        name: "financial sentiment analysis",
        desc: "A sentiment analysis machine learning pipeline built using PyTorch and trained on the Financial Phrasebank dataset. Different fine tuning strategies were used for transformer models like DISTILBert and Elektra.",
        link: "https://github.com/Ramy-Abdulazziz/Financial-Sentiment-Analysis",
    },
    assignment: {
        name: "automated assignment fetcher",
        desc: "A tool for SBU students to be able to automate adding their assignments from the universities learning management site, using Selenium, BeautifulSoup, and Google Cloud Platform, and automatically add them to their google calendar.",
        link: "https://github.com/Ramy-Abdulazziz/AutomatedAssignmentFetcher",
    },
};

const InfoSection = () => {
    return (
        <motion.div
            className={cn("text-justify")}
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
                <motion.div>Projects</motion.div>
            </motion.div>
            <motion.div
                className={cn(
                    "font-cairo xl:text-base lg:text-base md:text-base sm:text-base xs:text-base mt-6"
                )}
            >
                <motion.div>
                    {Object.entries(pInfo).map(([key, proj]) => (
                        <motion.div
                            key={key}
                            className={cn("mb-6 ")}
                            variants={textItem}
                        >
                            <motion.div
                                className={cn(
                                    "mb-2 underline decoration-gray-500 hover:decoration-white duration-300"
                                )}
                            >
                                <Link href={proj.link} target="_blank">
                                    {proj.name}
                                </Link>
                            </motion.div>

                            <motion.div>{proj.desc}</motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                variants={textItem}
                className={cn(
                    "mb-2 text-base underline decoration-gray-500 hover:decoration-white duration-300"
                )}
            >
                <Link href="https://github.com/ramy-abdulazziz" target="_blank">
                    all projects →
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default InfoSection;
