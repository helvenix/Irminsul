"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

import { Button } from "../ui/button"
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "../ui/avatar"

import {
    LayoutDashboard,
    User,
    Award,
    Sun,
    Moon,
    LogOut,
    Settings,
    Flame
} from "lucide-react"

export function LeftSidebar(){
    const {theme, setTheme} = useTheme();

    // Mounted Check
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed top-[36vh] grid">
            <div className="w-48 flex">
                <Button variant='ghost' className="rounded-none size-12 border-b-2 border-accent"><LayoutDashboard /></Button>
                <Button variant='ghost' className="rounded-none size-12 border-b-2 border-accent"><Award /></Button>
                <Button variant='ghost' className="rounded-none size-12 border-b-2 border-accent"
                    onClick={() => {theme === 'light' ? setTheme("dark") : setTheme("light")}}
                >
                    {theme === 'light' && (
                        <Sun />
                    )}
                    {theme === 'dark' && (
                        <Moon />
                    )}
                </Button>
                <Button variant='ghost' className="rounded-none size-12 border-b-2 border-accent"><Settings /></Button>
                {/* <Button variant='ghostDestructive' className="rounded-none size-12 border-b-2 border-accent dark:hover:border-destructive/75"><LogOut /></Button> */}
            </div>
            <div className="w-48 h-48 grid relative">
                <Flame size='124' strokeWidth="0.5" className="text-accent absolute top-4 left-8.5"/>
                <span className="absolute w-10 top-23 left-20 text-accent font-bold text-xl text-center">10</span>
                <span className="w-48 text-center absolute top-38 text-xs">
                    <span className="text-accent-foreground font-bold">17 days </span> 
                    of unbroken focus
                </span>
            </div>
            <div className="w-48 flex relative">
                <Button variant='ghost' className="rounded-none size-12 w-48 border-t-2 border-accent text-left">
                    <Avatar className="absolute top-2 left-3 rounded-md">
                        <AvatarImage src="" />
                        <AvatarFallback><User className="size-4"/></AvatarFallback>
                    </Avatar>
                    <h1 className="absolute w-33 text-md top-2 left-15 truncate">{"Helven"}</h1>
                    <h2 className="absolute text-xs text-muted-foreground top-6.5 left-15">UID : {String("1").padStart(4, "0")}</h2>
                </Button>
            </div>
        </div>
    )
}