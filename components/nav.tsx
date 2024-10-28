"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import ramy from "@/public/ramy.svg";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import gitHub from "@/public/github-mark-white.png";

const Nav = () => {
    return (
        <>
            <NavigationMenu
                className={cn("")}
                style={{
                    backgroundColor: "hsl(var(--background) / 0.25)", // 75% opacity
                }}
            >
                <NavigationMenuList className={cn("mt-2 mb-2")}>
                    <NavigationMenuItem>
                        <Link href="/" target="_blank" legacyBehavior passHref>
                            <NavigationMenuLink>
                                <div className={cn("relative w-8 h-8 md:w-32")}>
                                    <Image
                                        className={cn(
                                            "transform -rotate-12 scale-150"
                                        )}
                                        src={ramy}
                                        alt="Arabic Logo"
                                        fill={true}
                                        objectFit="cover"
                                    />
                                </div>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                                style={{
                                    backgroundColor:
                                        "hsl(var(--background) / 0.25)", // 75% opacity
                                }}
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem>
                        <Link href="#about-me" target="_blank" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                                style={{
                                    backgroundColor:
                                        "hsl(var(--background) / 0.25)", // 75% opacity
                                }}
                            >
                                About Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#links" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                                style={{
                                    backgroundColor:
                                        "hsl(var(--background) / 0.25)", // 75% opacity
                                }}
                            >
                                Connect
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div className={cn("flex flex-1 justify-end")}>
                    <Link
                        href="https://github.com/ramy-abdulazziz"
                        target="_blank"
                    >
                        <div
                            className={cn(
                                " place-items-center text-muted-foreground hover:text-white"
                            )}
                        >
                            <Button
                                variant="ghost"
                                className={cn(
                                    "place-items-center rounded-lg hover:bg-card"
                                )}
                            >
                                <svg
                                    className="w-6 h-6 place-items-center"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.757-1.332-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.304-.54-1.526.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.65.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.12.81 2.26 0 1.63-.015 2.95-.015 3.35 0 .315.18.69.795.57C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </Button>
                        </div>
                    </Link>
                </div>
            </NavigationMenu>
        </>
    );
};

export default Nav;
