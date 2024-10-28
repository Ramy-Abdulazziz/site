import * as motion from "framer-motion/client";
import { Separator } from "@/components/ui/separator";
import TextSectionProps from "@/types/text-section-type";

import { cn } from "@/lib/utils";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const TextSection: React.FC<TextSectionProps> = ({ title, text }) => {
    return (
        <motion.div className={cn("container mx-auto")}>
            <motion.div>
                {title}
            </motion.div>
            <Separator/>
            <motion.div>
                {text}
            </motion.div>
            
        </motion.div>
    );
};

export default TextSection;
