import { LeftSidebar } from "@/components/Layout/left-sidebar";


export default function Layout({children,}: Readonly<{children: React.ReactNode;}>){
    return (
        <main>
            {children}
            <LeftSidebar />
        </main>
    )
}