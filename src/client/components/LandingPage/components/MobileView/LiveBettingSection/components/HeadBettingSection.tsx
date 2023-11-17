import React, { useState } from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { Carousel } from '@heathmont/moon-core-tw';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { MobileCarouselTab } from '@/src/client/shared/Tab/TabBar';
import {SPORT_DATA} from '../constant/data';

const HeadBettingSection = () => {
	const { link, handleClick } = useLink('Basketball');
	const [click, setClick] = useState('');
const getEventTypesByGameType = () => {
	const result = SPORT_DATA.filter((data) => data.gameType === link);
	return result.length > 0 ? result[0].eventType : [];
};
const eventTypes = getEventTypesByGameType();
// console.log(footballEventTypes);



	const renderHandBettingSection = () => {
		return SPORT_DATA.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value.gameType)}>
				<Carousel.Item>
					<button
						className={`${
							link === value.gameType ? 'text-green-600 font-bold' : 'text-white'
						}`}>
						{value.gameType}
					</button>
				</Carousel.Item>
			</div>
		));
	};

	const renderHandleEventSection = () => {
		return (
			<MobileCarouselTab
				data={eventTypes}
				initialState={eventTypes[0]}
				setTabValue={setClick}
				borderColor='border-b-gray-900 font-bold'
				className='text-lightGray'
			/>
		);
	};

	return (
		<div className='flex flex-col'>
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

			<div className='w-full h-10' >
				<MobileCarousel
					renderCarouselItems={renderHandleEventSection}
					classValue='mt-1'
				/>
			</div>

			<div className='w-full h-6 bg-gray-500 mt-2'>

			</div>
		</div>
	);
};

export default HeadBettingSection;
