import React from 'react'
import FormInput from '../Components/FormInput'
import { Button } from '@/src/client/shared/Button/Button';

const Register = () => {
  return (
		<form className='flex flex-col items-center space-y-5'>
			<FormInput />
			<div className='flex flex-col items-center'>
				<Button
					text='Register'
					link='#'
					classValue=' h-12 w-full bg-green-500 text-white my-7 w-[270px] '
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
}

export default Register