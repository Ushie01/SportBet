import { useState } from 'react';

export const useHandleClick = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
		setTimeout(() => {
			setClick(false);
		}, 200);
	};

	return { click, handleClick };
};
