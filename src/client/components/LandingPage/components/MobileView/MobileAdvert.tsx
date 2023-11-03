import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from '@heathmont/moon-core-tw';
import { MobileCarousel } from '@/src/client/shared/Carousel';
import { ADVERT_CAROUSEL_IMAGE } from '../../constant/data';

const MobileAdvert = () => {
	const renderCarouselItems = () => {
		return ADVERT_CAROUSEL_IMAGE.map((value, index) => (
			<div
				className='w-full'
				key={index}>
				<Carousel.Item>
					<Link href='#'>
						<Image
							src={value}
							alt='image alt'
							className='w-scren'
						/>
					</Link>
				</Carousel.Item>
			</div>
		));
	};

	return (
		<MobileCarousel
			renderCarouselItems={renderCarouselItems}
			classValue='gap-0'
		/>
	);
};

export default MobileAdvert;
