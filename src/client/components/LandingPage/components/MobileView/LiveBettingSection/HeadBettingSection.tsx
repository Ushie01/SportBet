import React, { useState } from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import { useLink, useLinkArray } from '@/src/client/shared/Hooks/useLink';
import { EVENT_DATA, GAME_TYPES } from './constant/data';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { MobileCarouselTab } from '@/src/client/shared/Tab/TabBar';

const HeadBettingSection = () => {
	const { link, handleClick } = useLink('Basketball');
	const [click, setClick] = useState('');

	const renderHandBettingSection = () => {
		return GAME_TYPES.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value)}>
				<Carousel.Item>
					<button
						className={`${
							link === value ? 'text-green-600 font-bold' : 'text-white'
						}`}>
						{value}
					</button>
				</Carousel.Item>
			</div>
		));
	};

	const renderHandleEventSection = () => {
		return (
			<MobileCarouselTab
				data={EVENT_DATA}
				initialState='1X2'
        setTabValue={setClick}
        borderColor='border-b-gray-900 font-bold'
				className='text-lightGray'
			/>
		);
	};

	return (
		<div className='flex flex-col space-y-6'>
			<div className='flex items-center justify-start px-2 w-full'>
				<div className='flex items-center space-x-3 w-full'>
					<p className='text-white font-bold text-xl'>Live</p>
					<p className='text-gray-300'>|</p>
				</div>

				<div className='w-5/6'>
					<MobileCarousel
						renderCarouselItems={renderHandBettingSection}
						classValue='mt-3'
					/>
				</div>
			</div>

			<div>
				<MobileCarousel
					renderCarouselItems={renderHandleEventSection}
					classValue='mt-3'
				/>
			</div>
		</div>
	);
};

export default HeadBettingSection;
