import React from 'react';
import DeviceDisplay from '../../shared/Utils/DeviceDisplay';
import MobileLandingPage from './MobileLandingPage';
import DesktopLandingPage from './DesktopLandingPage';


const LandingPage = () => {
	return (
		<DeviceDisplay
			mobileViewDisplay={<MobileLandingPage />}
			desktopViewDisplay={<DesktopLandingPage />}
		/>
	);
};
export default LandingPage;
