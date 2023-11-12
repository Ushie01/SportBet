import React from 'react'
import { Button } from '@/src/client/shared/Button/Button';
import { NumberInput, TextInput } from '../Components/Input';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';
import Link from 'next/link';

const Login = () => {
  return (
		<form className='flex flex-col items-center space-y-3'>
			<div className='w-[340px]'>
				<NumberInput />
				<TextInput
					type='password'
					placeHolder='Set Password'
				/>
			</div>

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
					classValue=' h-12 w-full bg-green-500 text-white my-7 '
				/>
			</div>
		</form>
	);
}

export default Login