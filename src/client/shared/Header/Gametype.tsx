import React, {useState, useEffect} from 'react'
import { LINK_GAME_TYPES } from './constant/data';
import Link from 'next/link';
import Container from '../../components/Container/Container';
import { useLink } from '../Hooks/useLink';

const Gametype = () => {
	const { link, handleClick } = useLink('Basketball');


  return (
		<Container bgColor='bg-white'>
			<div className='flex justify-center'>
				{LINK_GAME_TYPES.map((value, index) => (
					<Link
						href='#'
						key={index}
						onClick={() => handleClick(value)}
						className={`flex items-center justify-center text-center py-4 px-6  transition transform duration-300 ${
							link === value
								? 'border-b-blue-900 border-b-4'
								: 'hover:border-b-blue-400 hover:border-b-4 border-b-white border-b-4'
						}`}>
						<p className='font-bold text-sm'>{value}</p>
					</Link>
				))}
			</div>
		</Container>
	);
}

export default Gametype