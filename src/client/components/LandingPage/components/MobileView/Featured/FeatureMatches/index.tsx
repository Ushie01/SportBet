import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import FeatureMatchCard from './FeatureMatchCard';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { FEATURED_DATA } from '../constant/data';

const FeatureMatches = () => {
  const renderFeatureMatchItems = () => {
		return FEATURED_DATA.map((value, index) => (
			<div key={index}>
				<Carousel.Item>
          <FeatureMatchCard  
            region={value.region}
            cupType={value.cupType}
            match={value.match}
          />
				</Carousel.Item>
			</div>
		));
	};

	return (
		<div>
			<MobileCarousel
				renderCarouselItems={renderFeatureMatchItems}
				classValue='gap-2'
			/>
		</div>
	);
};

export default FeatureMatches;
