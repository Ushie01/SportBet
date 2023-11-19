import {
	FourOddsButton,
	ThreeOddsButton,
	TwoOddsButton,
} from '../Button/MobileButton/MobileEventPoint';

export const renderOddsButtons = (getOddsHeaderLength: number) => {
	switch (getOddsHeaderLength) {
		case 2:
			return <TwoOddsButton />;
		case 3:
			return <ThreeOddsButton />;
		default:
			return <FourOddsButton />;
	}
};
