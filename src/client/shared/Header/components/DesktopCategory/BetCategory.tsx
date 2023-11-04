import React from 'react';
import Link from 'next/link';
import { LINK_CATEGORY_TYPES } from '../../constant/data';
import { useLink } from '../../../Hooks/useLink';

const BetCategory = () => {
	const { link, handleClick } = useLink('Sports');

	return (
		<div className='flex justify-between -mt-4'>
			{LINK_CATEGORY_TYPES.map((value, index) => (
				<Link
					href='#'
					key={index}
					onClick={() => handleClick(value)}
					className={`flex items-center justify-center text-center section py-1 hover:bg-gold -mx-2 w-full hover:text-white ${
						value === link
							? 'bg-white text-gold'
							: 'text-white'
					} `}>
					<p className='flex flex-center justify-center m-auto text-center font-semibold p-2'>
						{value}
					</p>
				</Link>
			))}
			<div className='flex items-center justify-end py-1 text-center'>
				<p className=' text-white font-thin pl-12'>GMT+1:00</p>
			</div>
		</div>
	);
};

export default BetCategory;
