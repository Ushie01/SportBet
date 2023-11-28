import React, { useState, useEffect } from 'react';
import useDeviceType from '../Hooks/useDeviceType';

type Props = {
	mobileViewDisplay: React.ReactElement;
	desktopViewDisplay: React.ReactElement;
};

const DeviceDisplay: React.FC<Props> = ({
	mobileViewDisplay,
	desktopViewDisplay,
}) => {
	const { isMobile } = useDeviceType();
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setTimeout(() => {
	// 			setIsLoading(false);
	// 		}, 5000);
	// 	};
	// 	fetchData();
	// }, []); 

	// if (isLoading) {
	// 	return (
	// 		<div style={{ backgroundColor: 'white', height: '100vh' }}>
	// 			Loading...
	// 		</div>
	// 	);
	// }

	if (isMobile) {
		return mobileViewDisplay;
	}
	return desktopViewDisplay;
};

export default DeviceDisplay;
