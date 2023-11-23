import React from 'react';
import Link from 'next/link';
import { Carousel } from '@heathmont/moon-core-tw';
import { SPORT_BET_CATEGORY } from '../../constant/data';
import { MobileCarousel } from '@/src/client/shared/Carousel';

const SportBetCategory = () => {
	const renderCarouselItems = () => {
		return SPORT_BET_CATEGORY.map((value, index) => (
			<div key={index}>
				<Carousel.Item className='w-12'>
					<Link
						href='#'
						className='flex flex-col items-center justify-center -space-y-1 py-1'>
						<value.icon
							height={28}
							width={28}
						/>
						<p className='flex flex-col items-center justify-start text-xs text-center'>
							{value.title}
						</p>
					</Link>
				</Carousel.Item>
			</div>
		));
	};

	return (
		<div className='px-2 -my-3'>
			<MobileCarousel
				renderCarouselItems={renderCarouselItems}
				className='px-2'
			/>
		</div>
	);
};

export default SportBetCategory;
