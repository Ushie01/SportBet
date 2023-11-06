import React from 'react';
import Header from '../../shared/Header';
import PopularSection from './components/DesktopView/PopularSection';
import VirtualImage from './components/DesktopView/VirtualImage';



const DesktopLandingPage = () => {
	return (
		<>
			<Header />
			<PopularSection />
			<VirtualImage/>
		</>
	);
};

export default DesktopLandingPage;
