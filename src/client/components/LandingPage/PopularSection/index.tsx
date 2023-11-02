import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Carousel } from '@heathmont/moon-core-tw';
import InputText from '@/src/client/shared/Input/Input';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import CustomCarousel from '@/src/client/shared/Carousel';
import { POPULAR_CAROUSEL_IMAGE, POPULAR_DATA } from './data';
import Container from '../../Container/Container';
import LeftBgImg from '../../../../assets/leftBgImg.jpg';
import RightBgImg from '../../../../assets/rightBgImg.jpg'

const PopularSection = () => {
	const renderCarouselItems = () => {
		return POPULAR_CAROUSEL_IMAGE?.map((value, index) => (
			<Carousel.Item
				key={index}
				className='h-80'>
				<Link href='#'>
					<Image
						src={value}
						alt='image alt'
						className='h-80'
					/>
				</Link>
			</Carousel.Item>
		));
	};

	return (
		<Container bgColor='relative bg-[#1A1E25]'>
			<Image
				src={LeftBgImg}
				alt='rightbgimag alt'
				className='h-[250px] opacity-70 absolute left-[-200px] top-0'
			/>

			<div className=' flex items-start justify-center w-full'>
				<div>
					<div className='flex flex-col  justify-end w-3/10 pr-12 '>
						<p className='text-white text-xl font-semibold my-2'>Popular</p>
						<div className='space-y-1 font-thin'>
							{POPULAR_DATA.map((value, index) => (
								<div key={index}>
									<hr className='text-gray-900' />
									<Link
										href='#'
										className='flex items-center justify-between  space-x-12 my-2'>
										<p className='text-white text-sm'>{value}</p>
										<RightArrow />
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='w-4/10'>
					<div className='w-[490px] h-[250px]'>
						<CustomCarousel renderCarouselItems={renderCarouselItems} />
					</div>
				</div>


				<div className='z-10 relative flex flex-col items-start justify-start w-3/10 mt-8 pl-10'>
					<div className='man z-10 relative'>
						<p className='text-white font-semibold'>Instant Registration</p>
						<p className='border-l-4 border-green-400 pl-1 text-xs mt-3 text-green-400 font-bold'>
							Make a deposit and start betting
						</p>
						<div className='mt-5'>
							<InputText
								height='h-11'
								bgColor='bg-white'
							/>
							<Button className='text-white font-thin w-full bg-green-600 rounded-sm mt-4'>
								Register
							</Button>
						</div>
					</div>

					<Image
						src={RightBgImg}
						alt='rightbgimag alt'
						className='h-[200px] right-[-160px] opacity-70 absolute  top-0 woman z-0'
					/>
				</div>
			</div>
		</Container>
	);
};

export default PopularSection;
