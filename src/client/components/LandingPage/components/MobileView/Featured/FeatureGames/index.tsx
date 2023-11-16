import React, { useState } from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { Carousel, MenuItem } from '@heathmont/moon-core-tw';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import TooltipFeatured from '../components/TooltipFeatured';
import FeatureGameCard from './FeatureGameCard';
import { FEATURED_GAME } from '../constant/data/FeatureGameData';

const FeatureGames = () => {
	const [selected, setSelected] = useState(0);
	const { link, handleClick } = useLink(FEATURED_GAME[0].gameType);

	const renderFeatureGameCup = () => {
		const uniqueCups = FEATURED_GAME.filter((value, index, self) => {
			return index === self.findIndex((v) => v.gameType === value.gameType);
		});

		return uniqueCups.map((value, index) => (
			<div
				key={index}
				onClick={() => handleClick(value.gameType)}>
				<Carousel.Item>
					<MenuItem
						key={index}
						isActive={selected === index}
						onClick={() => setSelected(index)}>
						<TooltipFeatured
							cupImage={value.gameImage}
							cupType={value.gameType}
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
		return FEATURED_GAME.map((value, index) => (
			<div key={index}>
				{link === value.gameType && (
					<Carousel.Item>
						<FeatureGameCard {...value} />
					</Carousel.Item>
				)}
			</div>
		));
	};

	return (
		<div>
			<MobileCarousel
				renderCarouselItems={renderFeatureGameCup}
				classValue='-gap-6 -px-6 -mt-1'
			/>

			<Carousel
				className='-mt-2'
				step={1}
				selectedIndex={selected}>
				<Carousel.Reel className='gap-2 px-2 -mt-2'>
					{renderFeatureMatchItems()}
				</Carousel.Reel>
			</Carousel>
		</div>
	);
};

export default FeatureGames;
