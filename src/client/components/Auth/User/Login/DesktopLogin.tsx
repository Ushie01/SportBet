import React from 'react';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Components/Form';
import CheckBox from '@/src/client/shared/CheckBox/CheckBox';
import { signIn } from '@/src/helper/api/auth';
import { AuthButton } from '../Components/DesktopButton';
import { useMutation } from '@tanstack/react-query';
import { ResponseMsg } from '../Components/ResponseMsg';
import { ToastContainer } from 'react-toastify';
import { useAuthAccess } from '../../../../shared/Hooks/useAuthAccess';

const DesktopLogin = () => {
	const mutation = useMutation({mutationFn: signIn});

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
		<form className='flex flex-col items-center'>
			<ResponseMsg
				response={response}
				failedResText='found'
			/>
			<ToastContainer />
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

				<AuthButton
					buttonName='Log In'
					phoneNumber={phoneNumber}
					className='h-12 my-7 w-[340px] '
					password={password}
					mutation={mutation}
					handle={handleClick}
				/>
			</div>
		</form>
	);
};

export default DesktopLogin;
