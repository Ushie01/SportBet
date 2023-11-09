import React from 'react';
import Container from '../../../../components/Container/Container';
import { LINK_GAME_TYPES } from '../../constant/data';
import { TabBar } from '../../../Tab/TabBar';

const SportCategory = () => {
	return (
		<Container bgColor='bg-white '>
			<div className='flex items-center justify-between w-full'>
				<TabBar
					initialState='Home'
					data={LINK_GAME_TYPES}
					borderColor='border-gold'
					hoverBgColor='hover:bg-gold'
					hoverBorderColor='hover:border-b-yellow-600'
				/>
			</div>
		</Container>
	);
};

export default SportCategory;
