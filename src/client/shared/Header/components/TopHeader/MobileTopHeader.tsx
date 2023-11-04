import Image from 'next/image';
import React from 'react';
import { Button } from '../../../Button/Button';
import Search from '../../../Svg/Search';

const MobileTopHeader = () => {

	return (
		<div className='flex items-center justify-between bg-blue-900 h-[50px] p-2'>
			<Image
				src='/assets/logo1.png'
				alt='logo alt'
				height={25}
				width={100}
			/>

			<div className='flex items-center justify-center space-x-2'>
				<Search
					width='18'
					height='18'
				/>
				<div className='space-x-1'>
					<Button
						text='Join Now'
						link='#'
						classValue='text-blue-700 bg-white text-xs py-2 px-2 rounded-sm shadow-md'
					/>
					<Button
						text='Log In'
						link='#'
						classValue='text-blue-900 text-white py-2 text-xs px-2 border rounded-sm shadow-md border-white'
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileTopHeader;
