import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import {
	ControlsChevronLeftSmall,
	ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

type Props = {renderCarouselItems: () => React.ReactNode;};

const CustomCarousel = ({ renderCarouselItems }: Props) => {
	return (
		<Carousel
			autoSlideDelay={3000}
			step={1}>
			<Carousel.LeftArrow className='bg-gray-400 opacity-60  rounded-xl'>
				<ControlsChevronLeftSmall className='text-gray-900' />
			</Carousel.LeftArrow>
			<Carousel.Reel>{renderCarouselItems()}</Carousel.Reel>
			<Carousel.RightArrow className='bg-gray-400 opacity-60  rounded-xl'>
				<ControlsChevronRightSmall className='text-gray-900' />
			</Carousel.RightArrow>
		</Carousel>
	);
};

export default CustomCarousel;
