import React from 'react';
// import { ControlsPlus } from '@heathmont/moon-icons-tw';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';
import Container from '../../Container/Container';
import { POPULAR_DATA } from './data';
import InputText from '@/src/client/shared/Input/Input';
import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
// import AdvertLegitX from './../../../../assests/'

const PopularSection = () => {
	return (
		<Container bgColor='bg-[#212733]'>
			<div className='flex items-start justify-center w-full'>
				<div className='flex flex-col  justify-end w-3/10 pr-12'>
					<p className='text-white text-2xl mb-3 mt-2'>Popular</p>
					<div className='space-y-1 font-thin'>
						{POPULAR_DATA.map((value, index) => (
							<div key={index}>
								<hr  className='text-gray-900'/>
								<Link
									href='#'
									className='flex items-center justify-between  space-x-12 my-2'>
									<p className='text-white'>{value}</p>
									<RightArrow/>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className='w-4/10'>
					<video
						src='/assets/legitVideo.mp4'
						autoPlay
						loop
						muted
						className='h-72 w-full'
					/>
				</div>
				<div className='flex flex-col items-start justify-start w-3/10 mt-5 pl-10'>
					<p className='text-white font-semibold'>Instant Registration</p>
					<p className='border-l-4 border-green-400 pl-1 text-xs mt-3 text-green-400 font-bold'>
						Make a deposit and start betting
					</p>
					<div className='mt-5'>
						<InputText
							height='h-11'
							bgColor='bg-white'
						/>
						<Button className='text-white font-thin text-xl w-full bg-green-600 rounded-sm mt-4'>
							Register
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PopularSection;
