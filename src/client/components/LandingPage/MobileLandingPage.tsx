import React from 'react';
import MobileCarousel from './components/MobileView/MobileAdvert';
import Header from '../../shared/Header';
import SportBetCategory from './components/MobileView/SportBetCategory';
import PopularCategory from './components/MobileView/PopularSection';
import MobileNavbar from '../../shared/MobileNavbar';

const MobileLandingPage = () => {
	return (
		<div className='relative h-screen flex flex-col border border-black'>
				<Header />
				<MobileCarousel />
				<SportBetCategory />
				<PopularCategory />
			<div className='fixed bottom-0 right-0 left-0'>
				<MobileNavbar />
			</div>
		</div>
	);
};

export default MobileLandingPage;
