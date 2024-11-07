"use client"
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react'
import Tilt from 'react-parallax-tilt';

const TeamCard = ({cardInfo}) => {
    const [mousePositionX, setMousePositionX] = useState("");
    const cardRef = useRef(null)

    return (
        <Tilt>
            <div
                className='w-[200px] h-[250px] bg-slate-200/90 col backdrop-blur-lg rounded-lg overflow-hidden '>
                <div className='w-full h-1/2 flex-center'>
                    <Image
                        src={cardInfo.content}
                        width={1000}
                        height={1000}
                        alt="section image"
                        className="w-full h-full "/>
                </div>
                <div className='w-full h-1/2'>
                    <div className=' w-full h-1/3 row'>
                        <div className=' w-1/3 h-full flex-center'>
                            <Image
                                src={cardInfo.img}
                                width={500}
                                height={500}
                                alt="section image"
                                className="w-[50px] h-[50px] rounded-full object-cover object-center" />
                        </div>
                        <div className='col'>
                            <p>{cardInfo.name}</p>
                            <p className='text-sm'>{cardInfo.spec}</p>
                        </div>
                    </div>
                    <div className='w-full h-2/3 flex-center p-3'>
                        <p className='text-xs '>{cardInfo.text}</p>
                    </div>
                </div>

            </div>

        </Tilt>
    )
}

export default TeamCard