import React from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { Carousel } from '@heathmont/moon-core-tw';
import { SPORT_DATA } from '../constant/data';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { MobileCarouselTab } from '@/src/client/shared/Tab/TabBar';

type SportDataItem = {
	gameType: string[];
	eventType: string[];
	[key: string]: string[] | undefined;
};

const HeadBettingSection = () => {
	const { link, handleClick } = useLink('Football');
	const getEventTypesByGameType = () => {
		const result = SPORT_DATA.filter((data) => data.gameType === link);
		return result.length > 0 ? result[0].eventType : [];
	};
	const eventTypes = getEventTypesByGameType();
	const { link: clickValue, handleClick: handleTabClick } = useLink(
		eventTypes[0]
	);

	const pointHeaderValues = (
		SPORT_DATA?.find(
			(sport) => sport?.gameType === link
		) as unknown as SportDataItem
	)?.[clickValue];

	const renderHandBettingSection = () => {
		return SPORT_DATA.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value.gameType)}>
				<Carousel.Item>
					<button
						className={`${
							link === value.gameType
								? 'text-green-600 font-bold'
								: 'text-white'
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
				handleTabClick={handleTabClick}
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

			<div className='w-full h-10'>
				<MobileCarousel
					renderCarouselItems={renderHandleEventSection}
					classValue='mt-1'
				/>
			</div>

			<div className='flex items-center justify-end  w-full h-6 bg-gray-500 pr-12 mt-2'>
				<div className='flex flex-row justify-between space-x-3 w-44 text-white text-sm'>
					{pointHeaderValues &&
						pointHeaderValues.map((value: string, index: number) => (
							<p
								className='p-1'
								key={index}>
								{value}
							</p>
						))}
				</div>
			</div>
		</div>
	);
};

export default HeadBettingSection;
