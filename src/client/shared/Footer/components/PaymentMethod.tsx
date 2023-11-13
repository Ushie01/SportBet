import React from 'react'
import Paystack from '../../Svg/Paystack'

const PaymentMethod = () => {
  return (
		<div className='flex items-center justify-between cursor-default px-48 bg-black py-6'>
			<Paystack />
			<p className='text-gray-400 text-xs'>© 2023 LegitXBet. All rights reserved.</p>
		</div>
	);
}

export default PaymentMethod
