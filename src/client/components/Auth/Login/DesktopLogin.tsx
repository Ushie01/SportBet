import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import Form from '../Components/Form';
import { signIn } from '@/src/helper/api/auth';
import { Button, Loader } from '@heathmont/moon-core-tw';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';

const DesktopLogin = () => {
	const [response, setResponse] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const mutation = useMutation({ mutationFn: signIn });

	const handleRegister = async () => {
		const values = { phoneNumber, password };
		if (values.phoneNumber && values.password) {
			const payload = await mutation.mutateAsync(values);
			setResponse(payload?.message);
		}
	};

	return (
		<form className='flex flex-col items-center'>
			{response && (
				<p
					className={`flex text-center font-bold pb-3 text-green-500 ${
						response.includes('found')
							? 'text-red-600'
							: 'text-green-600'
					}`}>
					{response}
				</p>
			)}

			<Form
				setPassword={setPassword}
				setPhoneNo={setPhoneNumber}
				password={password}
				phoneNo={phoneNumber}
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
					onClick={handleRegister}
					className={`h-12 my-7 w-[340px]  ${
						phoneNumber.length > 0 && password.length > 0
							? 'bg-green-500 text-white'
							: 'bg-gray-200 text-gray-400 disabled'
					}`}
					disabled={mutation.isPending}>
					{mutation.isPending ? <Loader size='xs' /> : 'Register'}
				</Button>
			</div>
		</form>
	);
};

export default DesktopLogin;
