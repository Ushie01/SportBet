import React from 'react';
import Link from 'next/link';
import { NAVBAR_DATA } from './constant/data';
import { useLink } from '../Hooks/useLink';

const MobileNavbar = () => {
	const { link, handleClick } = useLink('Home');
	return (
		<div className='flex items-center justify-between bg-black px-1 pt-2 z-10000'>
			{NAVBAR_DATA.map((value, index) => (
				<Link
					href='#'
					onClick={() => handleClick(value.title)}
					className='flex flex-col items-center justify-center'
					key={index}>
					{value.icon()}
					<div className='flex flex-col items-center justify-center w-16 h-4'>
						{link === value.title && (
							<div className='h-2 bg-gold w-12 mt-2'></div>
						)}
						{link !== value.title && (
							<p className='text-center text-xs text-white w-full pb-1'>
								{value.title}
							</p>
						)}
					</div>
				</Link>
			))}
		</div>
	);
};

export default MobileNavbar;
