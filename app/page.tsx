import { Canvas } from "@/components/Layout/canvas";

export default function Home() {
    return(
        <div className="w-screen h-screen">
            <Canvas />
            <div className="bg-accent opacity-20 fixed top-[36%] w-screen h-[64%]">
                <h1 className="absolute left-60 leading-12">Welcome, [UserName]</h1>
            </div>
        </div>
    );
}
