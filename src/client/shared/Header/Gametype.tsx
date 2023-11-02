import React from 'react';
import { LINK_GAME_TYPES } from './constant/data';
import Link from 'next/link';
import Container from '../../components/Container/Container';
import { useLink } from '../Hooks/useLink';
import DropDown from '../Dropdown/Dropdown';

const Gametype = () => {
	const { link, handleClick } = useLink('Basketball');
	return (
		<Container bgColor='bg-white '>
			<div className='flex items-center justify-between w-full'>
				<div className='flex justify-between w-full'>
					{LINK_GAME_TYPES.map((value, index) => (
						<Link
							href='#'
							key={index}
							onClick={() => handleClick(value)}
							className={`flex items-center justify-center text-center transition transform duration-300 text-gray-600 w-full py-2 ${
								link === value
									? 'border-b-blue-900 border-b-2'
									: 'hover:border-b-blue-400 hover:border-b-2 border-b-white border-b-2'
							}`}>
							<p>{value}</p>
						</Link>
					))}
				</div>
				<div className='w-1/10'>
					<DropDown />
				</div>
			</div>
		</Container>
	);
};

export default Gametype;
