import React, { useState } from 'react';
import Form from '../Components/Form';
import { Button } from '@/src/client/shared/Button/Button';

const DesktopRegister = () => {
	const [phoneNo, setPhoneNo] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form className='flex flex-col items-center'>
			<Form
				setPassword={setPassword}
				setPhoneNo={setPhoneNo}
				password={password}
				phoneNo={phoneNo}
			/>

			<div className='flex flex-col items-center w-full'>
				<Button
					text='Register'
					link='#'
					className={`h-12 my-7 w-[340px]  ${
						phoneNo && password
							? 'bg-green-500 text-white '
							: 'bg-gray-200 text-gray-400'
					}`}
				/>
				<div className='flex flex-col items-center justify-center text-xs w-full'>
					<p>
						By creating an account, you agree to our Terms &
						Conditions and confirm that you are at
					</p>
					<p>
						least 18 years old or over and all information given is
						true.
					</p>
				</div>
			</div>
		</form>
	);
};

export default DesktopRegister;
