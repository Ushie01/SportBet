import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { GenericUser } from '@heathmont/moon-icons-tw';

type Props = {
	image: StaticImageData;
	playerCount: string;
	game: string;
};

const FeatureGameCard = ({ image, playerCount, game }: Props) => {
	return (
		<div className='relative flex flex-col w-[136px] h-[136px] border shadow-xl'>
			<Image
				src={image}
				alt='pix alt'
				className='w-[136px] h-[136px]'
			/>
			<div className='absolute top-0 right-0 flex items-center bg-green-200 w-24'>
				<GenericUser
					fill='green'
					height='16'
					width='16'
					className='text-green-600'
				/>
				<p className='text-[12px]'>{`${playerCount} - players`}</p>
			</div>

			<div className='flex items-center justify-center text-center text-white font-bold text-[12px] bg-black opacity-75 h-8'>
				{game}
			</div>
		</div>
	);
};

export default FeatureGameCard;
