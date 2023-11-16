import Lock from '@/src/client/shared/Svg/Lock';
import { Button } from '@heathmont/moon-core-tw';
import React from 'react'

export const BetButton = ({betType, betPoint}:{betType: string, betPoint: string}) => {
  return (
		<Button className='flex items-center justify-between px-2 w-1/3 h-8 font-bold bg-green-100'>
      <p>{betType}</p>
			<p>{betPoint}</p>
		</Button>
	);
}

export const LockButton = () => {
  return (
		<Button className='flex items-center justify-center px-2 w-1/3 h-8 font-bold bg-gray-100'>
			<Lock height='16' width='16' color='gray'/>
		</Button>
	);
}


