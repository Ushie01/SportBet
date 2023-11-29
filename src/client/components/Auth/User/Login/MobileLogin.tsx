import React from 'react';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '@/src/helper/api/auth';
import { useMutation } from '@tanstack/react-query';
import { PhoneNo, Password } from '../Components/Input';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';
import { ResponseMsg } from '../Components/ResponseMsg';
import { AuthButton } from '../Components/DesktopButton';
import { useAuthAccess } from '../../../../shared/Hooks/useAuthAccess';

const MobileLogin = () => {
	const mutation = useMutation({ mutationFn: signIn });
	const {
		response,
		password,
		setPassword,
		phoneNumber,
		setPhoneNumber,
		handleClick,
	} = useAuthAccess({
		mutation,
		failedResText: 'found',
		successfulResText: 'successful',
	});

	return (
		<div className='py-6'>
			<ResponseMsg
				response={response}
				failedResText='found'
			/>

			<ToastContainer />

			<div className='flex flex-col space-y-6'>
				<PhoneNo
					phoneNo={phoneNumber}
					bgColor='bg-white'
					setPhoneNo={setPhoneNumber}
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

				<AuthButton
					handle={handleClick}
					className='h-[55px] text-xl w-full '
					password={password}
					mutation={mutation}
					buttonName='Log In'
					phoneNumber={phoneNumber}
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
