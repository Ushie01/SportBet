import React from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import DeviceDisplay from '../Utils/DeviceDisplay';

const Header = () => {
	return (
		<DeviceDisplay
			mobileViewDisplay={<MobileHeader />}
			desktopViewDisplay={<DesktopHeader />}
		/>
	);
};
export default Header;
