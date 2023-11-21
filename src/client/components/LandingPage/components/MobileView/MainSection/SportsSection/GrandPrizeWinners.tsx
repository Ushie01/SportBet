import React from 'react';
import Image from 'next/image';
import Cup from '../../../../../../../assets/cup.png';
import { Carousel } from '@heathmont/moon-core-tw';
import { GRANDPRIZE_WINNER_DATA } from '../../../DesktopView/MainSection/RightSection/constant/data';

const Card = ({phoneNo, price}: {phoneNo: string, price: string}) => {
  return (
		<div className=''>
			<div className='relative w-44 h-max bg-darkGray rounded-r-3xl'>
				<div className='relative font-bold  p-3 z-10000'>
					<p className='text-white text-[11px]'>{phoneNo}</p>
					<p className='font-dm-sans text-green-500 text-[14px]'>
						{`NGN${price}`}
					</p>
					<p className='text-white text-[11px]'>In Sports Betting</p>
				</div>
				<Image
					src={Cup}
					alt='cup alt'
					height={100}
					width={100}
					className='absolute top-0 right-0'
				/>
			</div>
			<p className='text-gray-700 text-[11px]'>1 min ago</p>
		</div>
  );
};

const GrandPrizeWinners = () => {
	return (
		<div className=''>
			<p className='px-2 text-xl text-black font-bold'>GrandPrizeWinner</p>

      <Carousel
        className='mt-5'
				autoSlideDelay={3000}
				step={1}>
				<Carousel.Reel className='gap-3 px-2'>
					{GRANDPRIZE_WINNER_DATA.map((value, index) => (
						<Carousel.Item
							key={index}
							>
              <Card {...value} />
						</Carousel.Item>
					))}
				</Carousel.Reel>
			</Carousel>
		</div>
	);
};

export default GrandPrizeWinners;
