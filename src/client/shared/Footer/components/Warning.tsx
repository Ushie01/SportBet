import React from 'react'
import Forum from '../../Svg/Forum'
import License from '../../Svg/License';

const Warning = () => {
  return (
		<div className='flex items-center justify-between cursor-default text-gray-400 w-full font-white text-xs  bg-gray-900 py-3 px-48'>
			<div className='flex items-center justify-center space-x-4'>
				<Forum />
				<p>
					Age 18 and above only to register or play at SportBet. Play
					Responsibly. <br /> Betting is addictive and can be psychologically
					harmful.
				</p>
			</div>
			<div className='flex items-center justify-center space-x-4'>
				<License />
				<p>
					SportBet Nigeria is licensed by National Lottery Regulatory
					Commission <br />
					(NLRC) under License No 0000000.
				</p>
			</div>
		</div>
	);
}

export default Warning
