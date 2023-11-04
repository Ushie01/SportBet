import React from 'react';
import { LINK_GAME_TYPES } from '../../constant/data';
import Link from 'next/link';
import Container from '../../../../components/Container/Container';
import DropDown from '../../../Dropdown/Dropdown';
import { useLinkArray } from '../../../Hooks/useLink';

const SportCategory = () => {
	const { link, setLink, handleClick } = useLinkArray('Home');
	return (
		<Container bgColor='bg-white '>
			<div className='flex items-center justify-between w-full'>
				<div className='flex justify-between w-full'>
					{LINK_GAME_TYPES.map((value, index) => (
						<Link
							href='#'
							key={index}
							onClick={() => handleClick(value)}
							className={`flex items-center justify-center text-center transition transform duration-300 z-50 text-gray-600 w-full ${
								link === value.name
									? 'border-b-gold border-b-2'
									: 'hover:border-b-yellow-400 hover:border-b-2 border-b-white border-b-2'
							}`}>
							{value.data
								? value.data && (
										<DropDown
											title={value.name}
											arrayTitle={value.data}
											setLink={setLink}
										/>
								  )
								: value.name}
						</Link>
					))}
				</div>
			</div>
		</Container>
	);
};

export default SportCategory;
