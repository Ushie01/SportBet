import React from 'react'
import { LINK_GAME_TYPES } from './constant/data';
import Container from '../../components/Container/Container';
import Link from 'next/link';

const Gametype = () => {
  return (
		<Container bgColor='bg-white'>
			<div className='flex'>
				{LINK_GAME_TYPES.map((value, index) => (
					<Link href='#'
						key={index}
						className={`flex items-center justify-center text-center py-4 px-6  transition transform duration-300 hover:border-b-blue-400 border-b-4`}>
						<p className='font-bold '>{value}</p>
					</Link>
				))}
			</div>
		</Container>
	);
}

export default Gametype