import TeamCard from "@/components/dev/TeamCard";
import MovingStrokeText from "@/components/txt/MovingStrokeText";
import Image from "next/image";

export default function Home() {
    return (
        <main
            className="text-gray-600 text-lg scroll-smooth snap-mandatory snap-start snap-always snap-y h-screen overflow-y-scroll overflow-x-hidden">
            <section
                id="dev"
                className="w-screen h-[calc(100dvh-80px)] bg-white row snap-start">
                <div className="w-1/2 h-full flex-center">
                    <Image
                        src={"/imgs/sections/4.png"}
                        width={1000}
                        height={1000}
                        alt="section image"
                        className="w-1/2 h-1/2 relative top-20" />
                </div>
                <div
                    className="w-1/2 h-full flex flex-col items-start justify-center gap-5 px-20  ">
                    <h1 className="text-2xl relative top-20 ">development</h1>
                    <div className="w-full h-1/2 grid grid-cols-2 grid-row-2">
                        <p className="relative top-20 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                        <p className="relative top-20 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                        <p className="relative top-20 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                        <p className="relative top-20 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                    </div>
                </div>
            </section>
            <section id="content" className="w-screen h-screen snap-start row ">
                <div className="w-1/2 h-full flex-center">
                    <Image
                        src={"/imgs/sections/7.png"}
                        width={1000}
                        height={1000}
                        alt="section image"
                        className="w-1/2 h-1/2 relative top-20" />
                </div>
                <div
                    className="w-1/2 h-full flex flex-col items-end justify-center gap-5 px-20  ">
                    <h1 className="text-2xl ">content creation</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nisi exercitationem praesentium, porro sit sint maiores
                        molestiae temporibus vitae ea beatae?</p>
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit assumenda totam omnis maxime mollitia alias!</p>
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus impedit illum amet officia ut ad quasi nulla qui?</p>
                </div>
            </section>
            <section id="graphic" className="w-screen h-screen snap-start row ">
                <div
                    className="w-1/2 h-full flex flex-col items-start justify-center gap-5 px-20  ">
                    <h1 className="text-2xl relative top-20">graphic design</h1>
                    <p className="relative top-20">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nisi exercitationem praesentium, porro sit sint maiores
                        molestiae temporibus vitae ea beatae?</p>
                </div>
                <div className="w-1/2 h-full flex-center">
                    <Image
                        src={"/imgs/content/logo3.jpg"}
                        width={1000}
                        height={1000}
                        alt="section image"
                        className="w-1/2 h-1/2 relative top-20" />
                </div>
            </section>
            <section id="animation" className="w-screen h-screen snap-start row ">
                <div className="w-1/2 h-full flex-center">
                    <Image
                        src={"/imgs/sections/2.png"}
                        width={1000}
                        height={1000}
                        alt="section image"
                        className="w-1/2 h-1/2 relative top-20" />
                </div>
                <div
                    className="w-1/2 h-full flex flex-col items-end justify-center gap-5 px-20  ">
                    <h1 className="text-2xl relative top-20 w-full text-center">whiteboard animation</h1>
                    <div className="w-full h-1/2 grid grid-cols-2 grid-row-2">
                        <p className="relative top-20 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                        <p className="relative top-20 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                        <p className="relative top-20 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                        <p className="relative top-20 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, neque.</p>
                    </div>
                </div>
            </section>
            <section id="editing" className="w-screen h-screen snap-start col ">

            </section>
            <section id="social" className="w-screen h-screen snap-start row "></section>
            <section id="voice" className="w-screen h-screen snap-start row "></section>
            <section id="portfolio" className="w-screen h-screen snap-start row "></section>
        </main>
    );
}
