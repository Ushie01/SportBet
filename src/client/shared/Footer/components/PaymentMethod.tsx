import React from 'react'
import Image from 'next/image';
import Payment from '../../../../assets/payment.png';

const PaymentMethod = () => {
  return (
		<div className='flex items-center justify-between cursor-default px-48 bg-black -mt-1 py-1'>
		  <Image src={ Payment} alt='Payment alt' className='h-10 w-80' />
			<p className='text-gray-400 text-xs'>© 2023 SportBet. All rights reserved.</p>
		</div>
	);
}

export default PaymentMethod
