import React, { useState } from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import FeatureMatchCard from './FeatureMatchCard';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { FEATURED_DATA } from '../constant/data';
import FeatureMatchCup from './FeatureMatchCup';
import { useLink } from '@/src/client/shared/Hooks/useLink';

const FeatureMatches = () => {
	const { link, handleClick } = useLink(FEATURED_DATA[0].cupType);
	const renderFeatureMatchCup = () => {
		return FEATURED_DATA.map((value, index) => (
			<div key={index} onClick={() => handleClick(value.cupType)}>
				<Carousel.Item>
					<FeatureMatchCup
						cupImage={value.cupImage}
						cupType={value.cupType}
						linkValue={link}
					/>
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
				classValue='gap-2 px-2'
			/>
			<MobileCarousel
				renderCarouselItems={renderFeatureMatchItems}
				classValue='gap-2 px-2'
			/>
		</div>
	);
};

export default FeatureMatches;
