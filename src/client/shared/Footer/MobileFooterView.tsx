import React from 'react';
import Image from 'next/image';
import { FilesText } from '@heathmont/moon-icons-tw';
import officialSport2 from '../../../assets/officialSport2.png';
import Link from 'next/link';
import { Button } from '@heathmont/moon-core-tw';

const AgeRate = () => {
	return (
		<div className='flex items-center justify-between bg-gray-200 px-4 py-3 mt-3'>
			<div className='flex items-center'>
				<FilesText
					height={40}
					width={40}
					className='text-gray-400'
				/>
				<p className='text-2xl font-bold text-gray-400'>{'18+'}</p>
			</div>
			<p className='text-[11px] text-gray-400'>
				c 2023 SportBet. All rights reserved
			</p>
		</div>
	);
};

const FooterSection = () => {
	return (
		<div className='bg-darkGray w-full py-4'>
			<div className='flex items-center justify-center'>
				<p className='text-white text-xl font-bold'>
					Sport<span className='text-gold'>Bet</span>
				</p>

				<Image
					src={officialSport2}
					alt='officail sport alt'
					height={50}
					width={110}
				/>
			</div>
			<p className='text-[12px] text-center mt-3 text-white'>
				Official SportBet Betting Partner
			</p>

			<div className='space-y-4 px-4 mt-5 w-full'>
				<p className='p-2 text-center text-[11px] text-gray-400'>
					Age 18 and above only to register or play at SportBet. Play
					Responsibly. Betting is addictive and can be psychologically
					harmful. | SportBet Nigeria is licensed by National Lottery
					Regulatory Commission of Nigeria
				</p>
				<hr className='w-full border-gray-700' />
				<div className='flex justify-center space-x-2 text-[11px] text-gray-300 text-center underline'>
					<Link href=''>Terms & Conditions</Link>
					<p>|</p>
					<Link href=''>About Us</Link>
				</div>

				<div className='my-8'>
					<Link href='#section1'>
						<Button className='text-white h-12  w-full bg-ash text-[11px]'>
							Back to Top
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
const MobileFooterView = () => {
	return (
		<div className='h-max'>
			<AgeRate />
			<FooterSection />
		</div>
	);
};

export default MobileFooterView;
