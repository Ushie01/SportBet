import React, { useEffect, useState } from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { SPORT_DATA, highLightTodayCountries } from './constant/data';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { ControlsClose, SoftwareSorting } from '@heathmont/moon-icons-tw';
import { MobileCarouselTab } from '@/src/client/shared/Tab/TabBar';
import { SportDataItem, headBettingsSectionProps } from './constant/type';
import { getEventTypesByGameType } from './constant/util';
import OddsRangeFilter from '@/src/client/shared/Filter/OddsRangeFilter';

const HeadBettingSection = ({
	sports,
	setOddsHeaderLength,
}: headBettingsSectionProps) => {
	const [click, setClick] = useState(false);
	const { link, handleClick } = useLink('Football');
	const { link: clickItem, handleClick: onHandleClick } = useLink('Highlights');
	const eventTypes = getEventTypesByGameType(link, SPORT_DATA);
	const { link: clickValue, handleClick: handleTabClick } = useLink(eventTypes[0]);

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

	const renderHighlightTodayCountries = () => {
		return highLightTodayCountries.map((value, index) => (
			<div
				key={index}
				onClick={() => onHandleClick(value)}
				className={`w-1/3 mt-3 border-b-4 ${
					clickItem === value
						? 'border-b-green-500 font-bold'
						: 'border-b-white'
				}`}>
				<p className='pb-3 text-center '>{value}</p>
			</div>
		));
	};

	const renderSportTypes = () => {
		return SPORT_DATA.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value.gameType)}>
				<Carousel.Item>
					<button
						className={`${
							link === value.gameType
								? 'text-green-500 font-bold'
								: `${sports ? 'text-gray-800' : 'text-white'}`
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
					sports ? 'border-b-white' : 'border-b-darkGray font-bold'
				}`}
				className={`${sports ? 'text-black' : 'text-white'}`}
			/>
		);
	};

	return (
		<div className='relative'>
			<div className='flex flex-col h-max mt-2'>
				<div className='flex items-center justify-between px-2 w-full'>
					<p
						className={`font-bold text-xl  ${
							sports ? 'text-black' : 'text-white'
						}`}>
						Live
					</p>
					<p className='text-gray-300'>|</p>
					<div className={`${sports ? 'w-4/6' : 'w-5/6 pr-2'}`}>
						<MobileCarousel
							renderCarouselItems={renderSportTypes}
							classValue='mt-3'
						/>
					</div>
					{sports && (
						<div className='border p-1'>
							<SoftwareSorting
								width={20}
								height={20}
								onClick={() => {
									setClick(true);
								}}
							/>
						</div>
					)}
				</div>

				{sports && (
					<div className='flex items-center w-full '>
						{renderHighlightTodayCountries()}
					</div>
				)}
				<div className='w-full h-10'>
					<MobileCarousel
						renderCarouselItems={renderEventTypes}
						classValue='mt-1'
					/>
				</div>
				<div
					className={`flex items-center w-full h-6 ${
						sports
							? 'bg-gray-100 justify-between'
							: 'justify-end bg-ash '
					} mt-2`}>
					{sports && (
						<p className='text-gray-800 text-[13px] px-2'>{`20/11 Monday`}</p>
					)}

					<div className='flex flex-row  w-[180px] text-gray-400 text-sm mr-2'>
						{oddsHeaderValues &&
							oddsHeaderValues.map(
								(value: string, index: number) => (
									<p
										className='flex-grow p-1 text-center'
										key={index}>
										{value}
									</p>
								)
							)}
					</div>
				</div>
			</div>

			{sports && (
				<>
					{click && (
						<div className='absolute top-0 right-0 left-0 h-max border-b w-full bg-white z-10000'>
							<div className='flex items-center justify-between border-b p-2 -mt-2'>
								<p className='text-black font-bold text-xl'>
									Odds Filter
								</p>
								<ControlsClose
									height={28}
									width={28}
									className='border p-1'
									onClick={() => {
										setClick(false);
									}}
								/>
							</div>

							<div className='p-2'>
								<OddsRangeFilter setClick={setClick} />
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default HeadBettingSection;
