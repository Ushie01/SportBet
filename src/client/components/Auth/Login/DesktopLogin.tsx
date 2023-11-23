import React, { useState } from 'react';
import Link from 'next/link';
import Form from '../Components/Form';
import { Button } from '@/src/client/shared/Button/Button';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';

const DesktopLogin = () => {
	const [password, setPassword] = useState('');
	const [phoneNo, setPhoneNo] = useState('');

	return (
		<form className='flex flex-col items-center space-y-3'>
			<Form
				password={password}
				phoneNo={phoneNo}
				setPassword={setPassword}
				setPhoneNo={setPhoneNo}
			/>

			<div className='w-[340px]'>
				<div className='flex items-start justify-between mt-7'>
					<div className='flex flex-col'>
						<CheckBox title='Remember me' />
						<CheckBox title='Keep me sign in' />
					</div>
					<Link
						href='#'
						className='text-green-500'>
						Forget Password ?
					</Link>
				</div>
				<Button
					text='Login'
					link='#'
					className={`h-12 my-7 w-[340px]  ${
						phoneNo && password
							? 'bg-green-500 text-white '
							: 'bg-gray-200 text-gray-400'
					}`}
				/>
			</div>
		</form>
	);
};

export default DesktopLogin;
