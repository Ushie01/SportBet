import React from 'react';
import Header from '../../shared/Header';
import PopularSection from './components/DesktopView/PopularSection';
import VirtualImage from './components/DesktopView/VirtualImage';
import MainSection from './components/DesktopView/MainSection';



const DesktopLandingPage = () => {
	return (
		<>
			<Header />
			<PopularSection />
			<VirtualImage />
			<MainSection/>
		</>
	);
};

export default DesktopLandingPage;
