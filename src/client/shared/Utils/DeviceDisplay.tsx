import React from 'react';
import useDeviceType from '../Hooks/useDeviceType';

type Props = {
	mobileViewDisplay: React.ReactElement;
	desktopViewDisplay: React.ReactElement;
};

const DeviceDisplay: React.FC<Props> = ({mobileViewDisplay, desktopViewDisplay,}) => {
	const { isMobile } = useDeviceType();
	if (isMobile) {
		return mobileViewDisplay;
	}
	return desktopViewDisplay;
};
export default DeviceDisplay;
