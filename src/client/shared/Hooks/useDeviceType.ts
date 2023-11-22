import { useEffect, useState } from 'react';

const useDeviceType = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkDeviceType = () => {
			const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
			setIsMobile(isMobileDevice);
		};

		checkDeviceType();
		window.addEventListener('resize', checkDeviceType);
		return () => {
			window.removeEventListener('resize', checkDeviceType);
		};
	}, []);

	return { isMobile };
};

export default useDeviceType;
