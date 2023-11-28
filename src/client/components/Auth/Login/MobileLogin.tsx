import React, { useState } from 'react';
import { PhoneNo, Password } from '../Components/Input';
import { Button } from '@/src/client/shared/Button/Button';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';
import Link from 'next/link';

const MobileLogin = () => {
	const [phoneNo, setPhoneNo] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='py-6'>
			<div className='flex flex-col space-y-6'>
                        <PhoneNo
                              phoneNo={phoneNo}
					bgColor='bg-white'
					setPhoneNo={setPhoneNo}
				/>

                        <Password
                              password={password}
					placeHolder='Password'
					bgColor='bg-white'
					setPassword={setPassword}
				/>

				<div className='flex items-center justify-between'>
					<CheckBox title='Remember me' />
					<CheckBox title='Keep me sign in' />
				</div>

				<Button
					text='Login'
					link='#'
					className={`h-[55px] text-xl w-full ${
						phoneNo && password
							? 'bg-green-500 text-white'
							: 'bg-gray-200 text-gray-400 disabled'
					}`}
				/>
			</div>

			<div className='flex items-center mt-8'>
				<hr className='w-full' />
				<p className='px-2 text-gray-400'>Or</p>
				<hr className='w-full' />
			</div>

			<p className='text-gray-400 mt-8 text-sm text-center'>
				To deactive or reactivate your action{' '}
				<Link
					href='#'
					className='text-green-500'>
					click here
				</Link>
			</p>
		</div>
	);
};

export default MobileLogin;
