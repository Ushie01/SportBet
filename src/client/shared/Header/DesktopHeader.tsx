import React from 'react';
import Container from '../../components/Container/Container';
import TopHeader from './components/TopHeader/DesktopTopHeader';
import SportCategory from './components/DesktopCategory/SportCategory';
import BetCategory from './components/DesktopCategory/BetCategory';

const DesktopHeader = () => {
	return (
		<>
			<Container bgColor='bg-black'>
				<TopHeader />
				<BetCategory />
			</Container>
			<SportCategory />
		</>
	);
};

export default DesktopHeader;
