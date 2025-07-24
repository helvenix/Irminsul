import type { Metadata } from "next";

import { ThemeProvider } from "@/components/Others/theme-provider"
import { LeftSidebar } from "@/components/Layout/left-sidebar";

import "./globals.css";

export const metadata: Metadata = {
    title: "Irminsul",
    description: "productivity web app—centered around a “Sacred Tree” growth metaphor—combines daily effort logging, task completion, streak multipliers, and team collaboration to drive user motivation. This report outlines the project’s progress to date, explains the design decisions, and provides an outlook on next steps.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="Irminsul Light.png" />
            </head>
            <body className={`antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="w-screen h-screen">{children}</main>
                    <LeftSidebar />
                </ThemeProvider>
            </body>
        </html>
    );
}