import { Tab } from '@/src/client/shared/Tab/TabBar';
import Toggle from '@/src/client/components/LandingPage/components/DesktopView/MainSection/RightSection/components/BetSlip/Toggle';
import React, { useState } from 'react';
import DropdownText from '@/src/client/shared/Dropdown/DropdownText';
import { Button } from '@/src/client/shared/Button/Button';

const BetSlip = () => {
	const navItem = ['Betslip', 'Cashout'];
	const [inputValue, setInputValue] = useState('');




	return (
		<div className='w-full border-4 border-gray-900'>
			<div className=' pt-5 pb-1 bg-gray-900 px-3'>
				<Tab
					initialState='Betslip'
					data={navItem}
					borderColor='border-green-500'
				/>
				<div className='pt-3 pb-1'>
					<Toggle />
				</div>
			</div>

			<div className='px-3 py-5 bg-white text-sm'>
				<p>
					To place a bet, click on the odds. Or insert a booking code
				</p>

				<div className='flex flex-col space-y-2 mt-4'>
					<DropdownText />
					<input
						placeholder='Booking Code'
						className='h-10 w-full borderless-input border pl-2'
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<Button
						text='Load'
						link='#'
						classValue={`${
							inputValue
								? 'bg-green-600 text-white'
								: 'bg-gray-500 text-black opacity-40'
						} cursor-not-allowed  w-full h-10`}
					/>
				</div>

				<div className='bg-white opacity-30 mt-3'>
					<p>
						A booking code enables one to transfer a betslip between different
						devices.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BetSlip;
