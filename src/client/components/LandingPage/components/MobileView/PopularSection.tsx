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
						className='flex items-start justify-start text-xs text-start space-x-2 w-32 border border-t-4 border-t-gold h-[49px]  p-2 shadow-lg'>
						<p className='font-bold text-black'>{value}</p>
					</Link>
				</Carousel.Item>
			</div>
		));
	};

    return (
			<div className='px-2'> 
				<MobileCarousel
					renderCarouselItems={renderCarouselItems}
					classValue='-space-x-3'
				/>
			</div>
		);
};

export default PopularCategory;
