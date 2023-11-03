import Image from 'next/image';
import React from 'react';
import { Button } from '../../../Button/Button';
import Search from '../../../Svg/search';

const MobileTopHeader = () => {

	return (
		<div className='flex items-center justify-between bg-blue-900 h-[50px] p-2'>
			<Image
				src='/assets/logo1.png'
				alt='logo alt'
				height={35}
				width={130}
			/>

			<div className='flex items-center justify-center space-x-4'>
				<Search
					width='20'
					height='20                                                                                                                                                                                                                                                                                                                                                                              '
				/>
				<div className='space-x-3'>
					<Button
						text='Join Now'
						link='#'
						classValue='text-blue-900 bg-white py-1 px-3'
					/>
					<Button
						text='Log In'
						link='#'
						classValue='text-blue-900 text-white py-1 px-3 border border-white'
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileTopHeader;
