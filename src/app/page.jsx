"use client"
import TeamCard from "@/components/dev/TeamCard";
import Gallery from "@/components/Gallery";
import MovingStrokeText from "@/components/txt/MovingStrokeText";
import Image from "next/image";
import { teamInfo } from "@/utils/teamInfo";
import { useEffect, useState } from "react";
export default function Home() {
    const [changeBg, setChangeBg] = useState(5)

    

    const bgs = [...teamInfo, ...teamInfo].map(
        (card, i) => <Image key={i*10} src={card.content} width={50} height={50} alt='arrow' className='w-full h-full' />
    )



    return (
        <div
            className="w-screen h-screen col relative">
            <div className="w-[1600dvw] h-screen absolute z-0 top-0 left-0 bg-cover bg-center blur row bg-red-500" style={{ transform: `${changeBg < 5 ? "translateX(100dvw)" : "translateX(100dvw)"}`}}>
                {bgs}
            </div>
            {/* {cards} */}
            <div className="w-full h-40 flex-center">
               <p className="text-4xl font-bold">Our Creative Team</p> 
            </div>
            <Gallery setChangeBg={setChangeBg}/>
        </div>
    );
}
