"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import NavCardProps from "@/types/nav-card-type";
import { cn } from "@/lib/utils";


const NavCard = React.forwardRef<HTMLDivElement, NavCardProps>(
    ({ className, title, content, footer, ...props }, ref) => (
        <Card
            ref={ref}
            className={cn(`w-full md:w-64 lg:w-128 h-64 ${className}`)}
            {...props}
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{content}</CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    )
);

NavCard.displayName = "NavCard";
export default NavCard;
