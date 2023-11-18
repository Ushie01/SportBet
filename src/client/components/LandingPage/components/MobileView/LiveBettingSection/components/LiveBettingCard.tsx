import React from 'react';
import { TwoPointButton } from '@/src/client/shared/Button/MobileButton/MobileEventPoint';

const LiveBettingCard = () => {
	return (
		<div className='flex flex-col p-2 bg-darkGray h-28 w-full '>
			<div className='flex flex-col items-start'>
				<p className='text-green-500 text-[13px] font-bold'>
					45:00 HT{' '}
					<span className='text-[10px] pl-2 text-gray-500'>
						Brazil - Brasileiro Serie B
					</span>
				</p>

				<div className='flex items-center justify-between pt-2 w-full'>
					<div className='flex flex-col text-[12px] text-white'>
						<p>Crown FC</p>
						<p>One Rocket</p>
					</div>

					<div className='flex space-x-4'>
						<div className='flex flex-col text-white text-[13px]'>
							<p>1</p>
							<p>1</p>
						</div>
						<div className='flex'>
							<TwoPointButton />
						</div>
					</div>
				</div>

				<div className='flex flex-col w-full border-b border-b-gray-700'>
					<div className='text-[10px] text-white py-2'>{`+12>`}</div>
				</div>
			</div>
		</div>
	);
};

export default LiveBettingCard;
