import React from 'react';
import Header from '../../shared/Header';
import PopularSection from './components/DesktopView/PopularSection';
import VirtualImage from './components/DesktopView/VirtualImage';
import MainSection from './components/DesktopView/MainSection';



const DesktopLandingPage = () => {
	return (
		<div className='bg-lightGray'>
			<Header />
			<PopularSection />
			<VirtualImage />
			<MainSection/>
		</div>
	);
};

export default DesktopLandingPage;
