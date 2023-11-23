import React, { useState } from 'react';
import { PhoneNo } from '../Components/Input';
import { Button } from '@/src/client/shared/Button/Button';

const MobileRegister = () => {
	const [phoneNo, setPhoneNo] = useState('');

	return (
		<div className='py-6'>
			<div className='flex flex-col space-y-8'>
				<p className='text-center text-2xl font-bold'>
					Join LegitXBet <br />
					with your mobile number
				</p>

				<PhoneNo
					phoneNo={phoneNo}
					bgColor='bg-white'
					setPhoneNo={setPhoneNo}
				/>

				<Button
					text='Register'
					link='#'
					className={`h-[55px] text-xl w-full ${
						phoneNo
							? 'bg-green-500 text-white'
							: 'bg-gray-200 text-gray-400'
					}`}
				/>

				<p className='text-green-500 text-center text-xs'>
					Already have an account? Log In
				</p>
			</div>
		</div>
	);
};
export default MobileRegister;
