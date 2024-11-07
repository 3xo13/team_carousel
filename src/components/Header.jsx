import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Header = () => {
	return (
		<div className='w-[calc(100dvw-60px)] h-20 flex flex-row sticky top-0 px-20 bg-white/50 z-50 backdrop-blur-lg mx-[30px] rounded-b-xl'>
			<div className='w-5/12 h-full flex flex-row items-center justify-evenly '>
				<Link href={"#dev"}><p>development</p></Link>
				<Link href={"#content"}><p>content creation</p></Link>
				<Link href={"#graphic"}><p>graphic design</p></Link>
				<Link href={"#animation"}><p>animation</p></Link>
			</div>
			<div className='w-2/12 h-full flex items-center justify-center'>
				<Image src={"/svgs/logoipsum-288.svg"} width={200} height={100} alt='logo' className='w-32 h-16'/>
			</div>
			<div className='w-5/12 h-full flex flex-row items-center justify-evenly '>
				<Link href={"#editing"}><p>video editing</p></Link>
				<Link href={"#social"}><p>social media</p></Link>
				<Link href={"#voice"}><p>voice over</p></Link>
				<Link href={"#portfolio"}><p>portfolio</p></Link>
			</div>
		</div>
	)
}

export default Header