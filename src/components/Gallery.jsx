"use client"
import React, { useState } from 'react';
import TeamCard from './dev/TeamCard';
import Image from 'next/image';
// import './Gallery.css'; // Assuming you have some CSS for styling
import { teamInfo } from '@/utils/teamInfo';

const Gallery = ({ setChangeBg }) => {
	const [angle, setAngle] = useState(0);

	const rotateLeft = () => {
		setAngle(angle - 45); // 360 degrees / 8 cards = 45 degrees per card
		setChangeBg(prev => prev + 1)
	};

	const rotateRight = () => {
		setAngle(angle + 45); // 360 degrees / 8 cards = 45 degrees per card
		setChangeBg(prev => prev - 1)
	};
	
	// 	const cards = sectionsIds.map(
	// 		(card, i) => <div key={i} className="card "><CodeCard /></div>
	// 	)

	return (
		<div className="gallery-container">
			<button onClick={rotateLeft} className="rotate-button left-button">
				<Image src={"/imgs/icons/left-arrow.png"} width={50} height={50} alt='arrow' className='w-16 h-16 hover:w-20 hover:h-20' />
			</button>
			<div className="carousel">
				{teamInfo.map((card, i) => (
					<div
						className="card"
						key={i}
						style={{ transform: `rotateY(${angle + i * 45}deg) translateZ(400px)` }}
					>
						<TeamCard cardInfo={card} />
					</div>
				))}
			</div>
			<button onClick={rotateRight} className="rotate-button right-button">
				<Image src={"/imgs/icons/right-arrow.png"} width={50} height={50} alt='arrow' className='w-16 h-16 hover:w-20 hover:h-20' />
			</button>
		</div>
	);
};

export default Gallery;

