import React from 'react';
import Header from '../../shared/Header';
import MobileNavbar from '../../shared/MobileNavbar';
import MobileCarousel from './components/MobileView/MobileAdvert';
import SportBetCategory from './components/MobileView/SportBetCategory';
import PopularCategory from './components/MobileView/PopularSection';
import Featured from './components/MobileView/Featured';
import LiveBettingSection from './components/MobileView/MainSection/LiveBettingSection';
import SportsSection from './components/MobileView/MainSection/SportsSection';

const MobileLandingPage = () => {
	return (
		<div className='flex flex-col border h-max border-black'>
			<div className='w-full mb-10'>
				<Header />
				<MobileCarousel />
				<SportBetCategory />
				<PopularCategory />
				<Featured />
				<LiveBettingSection />
				<SportsSection />
			</div>
			<div className='fixed bottom-0 right-0 left-0'>
				<MobileNavbar />
			</div>
		</div>
	);
};

export default MobileLandingPage;
