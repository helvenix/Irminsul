import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Irminsul",
    description: "productivity web app—centered around a “Sacred Tree” growth metaphor—combines daily effort logging, task completion, streak multipliers, and team collaboration to drive user motivation. This report outlines the project’s progress to date, explains the design decisions, and provides an outlook on next steps.",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
/*
Let's sum out a little bit, So 

On top middle there's hero canvas
On middle there's main functionality screen
On bottom middle there's navigation
On left side there's 
*/