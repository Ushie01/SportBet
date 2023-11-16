import React, { useState } from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { Carousel, MenuItem } from '@heathmont/moon-core-tw';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { FEATURED_DATA } from '../constant/data';
import FeatureMatchCup from './FeatureMatchCup';
import FeatureMatchCard from './FeatureMatchCard';

const FeatureMatches = () => {
	 const [selected, setSelected] = useState(0);
	const { link, handleClick } = useLink(FEATURED_DATA[0].cupType);

	const renderFeatureMatchCup = () => {
		return FEATURED_DATA.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value.cupType)}>
				<Carousel.Item>
					<MenuItem
						key={index}
						isActive={selected === index}
						onClick={() => setSelected(index)}>
						<FeatureMatchCup
							cupImage={value.cupImage}
							cupType={value.cupType}
							linkValue={link}
							index={index}
							selectedIndex={selected}
						/>
					</MenuItem>
				</Carousel.Item>
			</div>
		));
	};

	const renderFeatureMatchItems = () => {
		return FEATURED_DATA.map((value, index) => (
			<div key={index}>
				<Carousel.Item>
					<FeatureMatchCard
						region={value.region}
						cupType={value.cupType}
						teamOne={value.match.teamOne}
						teamTwo={value.match.teamTwo}
						time={value.match.time}
						day={value.match.day}
						eventType={value.match.eventType}
						winPoint={value.match.winPoint}
						draw={value.match.draw}
						losePoint={value.match.losePoint}
						liveScore={value.match.liveScore}
					/>
				</Carousel.Item>
			</div>
		));
	};

	return (
		<div>
			<MobileCarousel
				renderCarouselItems={renderFeatureMatchCup}
				classValue='-gap-6 -px-6 -mt-1'
			/>

			<Carousel className='-mt-2'
				step={1}
				selectedIndex={selected}>
				<Carousel.Reel className='gap-2 px-2 -mt-4'>
					{ renderFeatureMatchItems()}
				</Carousel.Reel>
			</Carousel>
		</div>
	);
};

export default FeatureMatches;