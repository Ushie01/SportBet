import React from 'react';
import { MOBILE_POPULAR_DATA } from '../../constant/data';
import { Carousel } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import { MobileCarousel } from '@/src/client/shared/Carousel';

const PopularCategory = () => {
	const renderCarouselItems = () => {
		return MOBILE_POPULAR_DATA.map((value, index) => (
			<div key={index}>
				<Carousel.Item>
					<Link
						href='#'
						className='flex items-start justify-start text-xs text-start w-36 border border-t-4 border-t-red-600 h-16  p-3 shadow-lg'>
						<p className='font-bold text-black'>{value}</p>
					</Link>
				</Carousel.Item>
			</div>
		));
	};

	return (
		<MobileCarousel
			renderCarouselItems={renderCarouselItems}
			classValue='-space-x-3'
		/>
	);
};

export default PopularCategory;
