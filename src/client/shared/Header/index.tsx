import React from 'react';
import Container from '../../components/Container/Container';
import { Button, Input } from '@heathmont/moon-core-tw';
import Logo from '../../../assests/logo1.png';
import Image from 'next/image';
import Link from 'next/link';
// import InputText from '../Input/Input';

const Header = () => {
	return (
		<Container bgColor='bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900'>
			<div className='flex items-start justify-between w-full py-5'>
				<Image
					src={Logo}
					alt='logo alt'
					height={60}
					width={260}
				/>
				<div className='flex flex-col'>
					<div className='flex space-x-2'>
						<div className='flex items-center bg-gray-300 opacity-90'>
							<p className='py-2 pl-4 text-black'>+234</p>
							<Input
								type='text'
								size='sm'
								placeholder='Mobile Number'
								className='bg-gray-300 text-black'
							/>
						</div>
						<div className='flex items-center  bg-gray-300 opacity-90'>
							<Input
								type='password'
								size='sm'
								placeholder='Password'
								className='borderless-input bg-gray-300 text-black'
							/>
							<Button className='bg-gray-400 text-white'>Login</Button>
						</div>
						<Button className='border border-yellow-500 text-yellow-500'>
							Register
						</Button>
					</div>
					<div className='flex items-center justify-end pt-2 text-md text-white space-x-5'>
						<div>
							<input
								type='checkbox'
								name=''
								className='border border-white '
								value=''
							/>
							<label
								htmlFor=''
								className='pl-1 text-white'>
								Keep me signed in
							</label>
						</div>
						<Link href='#'>Forget Password?</Link>
						<div className='flex space-x-2'>
							<Link href='#'>Deactivate</Link>
							<Link href='#'>/ Reactivate</Link>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Header;
