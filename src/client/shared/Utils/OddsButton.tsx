import {
	FourOddsButton,
	ThreeOddsButton,
	TwoOddsButton,
} from '../Button/MobileButton/MobileEventPoint';

export const renderOddsButtons = (
	sports: boolean,
	getOddsHeaderLength: number
) => {
	const color = sports ? 'bg-green-200 text-green-600' : 'bg-ash text-green-500';
	const border = sports ? 'border-l border-l-white' : 'border-l border-l-darkGray';
	switch (getOddsHeaderLength) {
		case 2:
			return (
				<TwoOddsButton
					className={color}
					border={border}
				/>
			);
		case 3:
			return (
				<ThreeOddsButton
					className={color}
					border={border}
				/>
			);
		default:
			return (
				<FourOddsButton
					className={color}
					border={border}
				/>
			);
	}
};
