import React  from 'react';
import Link from 'next/link';
import Container from '../../components/Container/Container';
import { Button, Input } from '@heathmont/moon-core-tw';
import Image from 'next/image';
import {LINK_CATEGORY_TYPES} from './constant/data'
import { useLink } from '../Hooks/useLink';
import InputText from '../Input/Input';


const Header = () => {
	const { link, handleClick } = useLink('Sports');
	return (
		<Container bgColor='bg-blue-900'>
			<div className='flex items-start justify-between w-full py-5'>
				<Image
					src='/assets/logo1.png'
					alt='logo alt'
					height={50}
					width={200}
				/>
				<div className='flex flex-col'>
					<div className='flex space-x-2'>
						<InputText
							height='h-8'
							bgColor='bg-gray-300'
						/>
						<div className='flex items-center h-8 opacity-90'>
							<Input
								type='password'
								placeholder='Password'
								className='borderless-input bg-gray-300 h-8 rounded-l-sm text-black text-xs'
							/>
							<Button className='bg-gray-400 h-8 text-white text-xs px-6 rounded-r-sm '>
								Login
							</Button>
						</div>
						<Button className='border border-yellow-500 h-8 text-yellow-500 text-xs rounded-sm'>
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
			<div className='flex justify-between -mt-4'>
				{LINK_CATEGORY_TYPES.map((value, index) => (
					<Link
						href='#'
						key={index}
						onClick={() => handleClick(value)}
						className={`flex items-center justify-center text-center section py-3 hover:bg-blue-800 -mx-1 w-full hover:text-white ${
							value === link
								? 'bg-white text-blue-700 hover:text-blue-700 hover:bg-text-800'
								: 'text-white'
						} `}>
						<p className='flex flex-center justify-center m-auto font-semibold text-sm text-center shrink-2 p-2'>
							{value}
						</p>
					</Link>
				))}
				<div className='flex items-center justify-end py-2 text-center'>
					<p className=' text-white font-semibold pl-12'>GMT+1:00</p>
				</div>
			</div>
		</Container>
	);
};

export default Header;
