import React from 'react'
import DeviceDisplay from '../Utils/DeviceDisplay'
import MobileFooterView from './MobileFooterView'
import DesktopFooterView from './DesktopFooterView';

const Footer = () => {
    return (
		<DeviceDisplay
			mobileViewDisplay={<MobileFooterView />}
			desktopViewDisplay={<DesktopFooterView />}
		/>
	);
}

export default Footer
