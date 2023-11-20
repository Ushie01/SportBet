import React, { useEffect } from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { SPORT_DATA } from './constant/data';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { SoftwareSorting } from '@heathmont/moon-icons-tw';
import { MobileCarouselTab } from '@/src/client/shared/Tab/TabBar';

type SportDataItem = {
	gameType: string[];
	eventType: string[];
	[key: string]: string[] | undefined;
};

type headBettingsSectionProps = {
	filter: boolean;
	setOddsHeaderLength: React.Dispatch<React.SetStateAction<number>>;
};

const HeadBettingSection = ({
	filter,
	setOddsHeaderLength,
}: headBettingsSectionProps) => {
	const { link, handleClick } = useLink('Football');
	const getEventTypesByGameType = () => {
		const result = SPORT_DATA.filter((data) => data.gameType === link);
		return result.length > 0 ? result[0].eventType : [];
	};
	const eventTypes = getEventTypesByGameType();
	const { link: clickValue, handleClick: handleTabClick } = useLink(
		eventTypes[0]
	);

	const oddsHeaderValues = (
		SPORT_DATA?.find(
			(sport) => sport?.gameType === link
		) as unknown as SportDataItem
	)?.[clickValue];

	useEffect(() => {
		if (oddsHeaderValues) {
			setOddsHeaderLength(oddsHeaderValues.length);
		}
	}, [oddsHeaderValues, setOddsHeaderLength]);

	const renderSportTypes = () => {
		return SPORT_DATA.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value.gameType)}>
				<Carousel.Item>
					<button
						className={`${
							link === value.gameType
								? 'text-green-600 font-bold'
								: `${filter ? 'text-gray-800' : 'text-white'}`
						}`}>
						{value.gameType}
					</button>
				</Carousel.Item>
			</div>
		));
	};

	const renderEventTypes = () => {
		return (
			<MobileCarouselTab
				data={eventTypes}
				initialState={eventTypes[0]}
				handleTabClick={handleTabClick}
				borderColor={`${
					filter ? 'border-b-white' : 'border-b-darkGray font-bold'
				}`}
				className={`${filter ? 'text-black' : 'text-white'}`}
			/>
		);
	};

	return (
		<div className='flex flex-col h-max mt-2'>
			<div className='flex items-center space-x-3 px-2 w-full'>
				<p
					className={`font-bold text-xl  ${
						filter ? 'text-black' : 'text-white'
					}`}>
					Live
				</p>
				<p className='text-gray-300'>|</p>

				<div className={`${filter ? 'w-[280px]' : 'w-5/6 pr-2'}`}>
					<MobileCarousel
						renderCarouselItems={renderSportTypes}
						classValue='mt-3'
					/>
				</div>

				{filter && (
					<div className='border p-1'>
						<SoftwareSorting
							width={30}
							height={30}
							// onClick={handleClick}
						/>
					</div>
				)}
			</div>

			

			<div className='w-full h-10'>
				<MobileCarousel
					renderCarouselItems={renderEventTypes}
					classValue='mt-1'
				/>
			</div>

			<div
				className={`flex items-center w-full h-6 ${
					filter ? 'bg-gray-100 justify-between' : 'justify-end bg-ash '
					} mt-2`}>
				<p className='text-gray-800 text-[13px] px-2'>{`20/11 Monday`}</p>
				<div className='flex flex-row  w-[180px] text-gray-400 text-sm mr-2'>
					{oddsHeaderValues &&
						oddsHeaderValues.map((value: string, index: number) => (
							<p
								className='flex-grow p-1 text-center'
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
