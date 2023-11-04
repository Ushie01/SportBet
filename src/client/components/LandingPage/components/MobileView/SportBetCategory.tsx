import React from 'react';
import { SPORT_BET_CATEGORY } from '../../constant/data';
import { Carousel } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import { MobileCarousel } from '@/src/client/shared/Carousel';

const SportBetCategory = () => {
	const renderCarouselItems = () => {
		return SPORT_BET_CATEGORY.map((value, index) => (
			<div key={index}>
				<Carousel.Item className='w-12'>
					<Link
						href='#'
						className='flex flex-col items-center justify-center'>
						<value.icon
							height={30}
							width={30}
						/>
						<p className='flex flex-col items-center justify-start text-xs text-center'>{value.title}</p>
					</Link>
				</Carousel.Item>
			</div>
		));
	};

	return (
		<MobileCarousel
			renderCarouselItems={renderCarouselItems}
			classValue=''
		/>
	);
};

export default SportBetCategory;
