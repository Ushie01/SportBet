import React from 'react';
import TopLayer from './components/TopLayer';
import Warning from './components/Warning';
import PaymentMethod from './components/PaymentMethod';

const DesktopFooterView = () => {
	return (
		<div className='mt-5'>
			<TopLayer />
			<Warning />
			<PaymentMethod />
		</div>
	);
};

export default DesktopFooterView;
