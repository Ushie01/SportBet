import React, { useState } from 'react';
import { Button } from '@heathmont/moon-core-tw';
import { TextIncreaseIndent } from '@heathmont/moon-icons-tw';
import BetSlipHeader from './Components/BetSlipHeader';

const BetBookingCode = () => {
	const [bookingCode, setBookingCode] = useState('');
	return (
		<div className='flex flex-col px-4 pt-8 pb-5'>
			<p className='text-black font-bold'>Please insert booking code</p>
			<input
				value={bookingCode}
				onChange={(e) => setBookingCode(e.target.value)}
				placeholder='Booking Code'
				type='number'
				className='flex items-center text-sm hover:border-green-500 mt-3 h-11 w-full border px-2 borderless-input '
			/>
			<Button
				className={`h-12 my-3 w-full  ${
					bookingCode
						? 'bg-green-500 text-white '
						: 'bg-gray-200 text-gray-400'
				}`}>
				Load
			</Button>

			<div className='flex items-center mt-1'>
				<hr className='w-full' />
				<p className='px-8 text-gray-400'>Or</p>
				<hr className='w-full' />
			</div>

			<Button className='flex items-center h-12 my-3 text-[16px] w-full text-green-500 border-green-500 border-2'>
				<TextIncreaseIndent
					height={24}
					width={24}
				/>
				<p>Try Multi Maker</p>
			</Button>
		</div>
	);
};

export default BetBookingCode;
