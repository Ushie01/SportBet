import React from 'react';
import BetBookingCode from './BetBookingCode';
import MobileBetSlipDrawer from '@/src/client/shared/Drawer/MobileBetSlipDrawer';

const BetSlipButton = () => {
	return (
		<MobileBetSlipDrawer
			drawerContent={<BetBookingCode  />}
		/>
	);
};

export default BetSlipButton;
