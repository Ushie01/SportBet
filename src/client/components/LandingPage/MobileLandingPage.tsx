import React from 'react';
import Header from '../../shared/Header';
import MobileNavbar from '../../shared/MobileNavbar';
import MobileCarousel from './components/MobileView/MobileAdvert';
import SportBetCategory from './components/MobileView/SportBetCategory';
import PopularCategory from './components/MobileView/PopularSection';
import Featured from './components/MobileView/Featured';

const MobileLandingPage = () => {
	return (
		<div className='relative h-screen flex flex-col border border-black'>
			<Header />
			<MobileCarousel />
			<SportBetCategory />
			<PopularCategory />
			<Featured />
			<div className='fixed bottom-0 right-0 left-0'>
				<MobileNavbar />
			</div>
		</div>
	);
};

export default MobileLandingPage;
