import React from 'react';
import Toggle from '@/src/client/shared/Switch/Toggle';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

const BetSlipHeader = () => {
	return (
		<div className='flex items-center justify-between  bg-ash h-16 px-3 py-4 w-full'>
			<div className='flex items-center space-x-2'>
				<div className='z-10000 flex items-center justify-center rounded-full text-center font-bold bg-gray-500 h-7 w-7 text-white'>
					<p>0</p>
				</div>
				<Toggle />
			</div>

			<ControlsChevronDown
				fontSize={40}
				color='white'
				fill='white'
				className='-mt-8'
			/>

			<div className='flex items-center space-x-2 text-white'>
				<p className='font-bold'>Register</p>
				<p className='text-gray-500'>|</p>
				<p className='font-bold'>Login</p>
			</div>
		</div>
	);
};

export default BetSlipHeader;
