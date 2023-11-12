import React from 'react';
import Link from 'next/link';
import { Button } from '@/src/client/shared/Button/Button';
import { NumberInput, TextInput } from '../Components/Input';

const Register = () => {
	return (
		<form className='flex flex-col items-center'>
			<div className='w-[340px]'>
				<NumberInput />
				<TextInput
					type='email'
					placeHolder='Set Email'
				/>
				<TextInput
					type='password'
					placeHolder='Set Password'
				/>
			</div>



			<div className='flex flex-col items-center w-full'>
				<Button
					text='Register'
					link='#'
					classValue=' h-12 bg-green-500 text-white my-7 w-[340px] '
				/>
				<div className='flex flex-col items-center justify-center text-xs w-full'>
					<p>
						By creating an account, you agree to our Terms & Conditions and
						confirm that you are at
					</p>
					<p>least 18 years old or over and all information given is true.</p>
				</div>
			</div>
		</form>
	);
};

export default Register;
