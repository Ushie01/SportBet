import React, { useState } from 'react';
import Link from 'next/link';
import Container from '../../components/Container/Container';
import { Button, Input } from '@heathmont/moon-core-tw';
import Logo from '../../../assests/logo1.png';
import Image from 'next/image';
import {LINK_CATEGORY_TYPES} from './constant/data'
import { useLink } from '../Hooks/useLink';


const Header = () => {
	const { link, handleClick } = useLink('Football');
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
						<div className='flex items-center bg-gray-300 opacity-90 text-xs'>
							<p className='py-2 pl-4 text-black'>+234</p>
							<Input
								type='text'
								placeholder='Mobile Number'
								className='bg-gray-300 text-black text-xs'
							/>
						</div>
						<div className='flex items-center  bg-gray-300 opacity-90'>
							<Input
								type='password'
								placeholder='Password'
								className='borderless-input bg-gray-300 text-black text-xs'
							/>
							<Button className='bg-gray-400 text-white text-xs px-6'>
								Login
							</Button>
						</div>
						<Button className='border border-yellow-500 text-yellow-500 text-xs'>
							Register
						</Button>
					</div>
					<div className='flex items-center justify-end pt-2 text-md text-white space-x-5 text-xs'>
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

			{/* Game Type */}
			<div className='flex justify-between -mt-3'>
				{LINK_CATEGORY_TYPES.map((value, index) => (
					<Link href='#'
						key={index}
						onClick={() => handleClick(value)}
						className={`flex items-center justify-center p-1 text-center section  hover:bg-blue-900 hover:text-white w-full ${
							value === link ? 'bg-white text-blue-700' : 'text-white'
						} `}>
						<p className='font-bold text-sm'>{value}</p>
					</Link>
				))}
				<div className='flex items-center justify-center p-2 text-center'>
					<p className=' text-white font-bold'>GMT +1:00</p>
				</div>
			</div>
		</Container>
	);
};

export default Header;
