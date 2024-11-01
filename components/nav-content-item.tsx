import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import NavContentType from "@/types/nav-content-type";

const NavContentItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        ` block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {children} 
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

NavContentItem.displayName = "NavContentItem";
export default NavContentItem;
