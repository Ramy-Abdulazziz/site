"use client";

import * as motion from "framer-motion/client";
import ArabicName from "./arabic-name";
import "@fontsource-variable/cairo-play";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const MovingName = () => {
    return (
        <motion.div className={cn("justify-center")}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
            >
                <ArabicName />
            </motion.div>
        </motion.div>
    );
};

export default MovingName;
