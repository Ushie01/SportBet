import React, { useState } from 'react';

const Toggle = () => {
	const [isClick, setClick] = useState(false);

    const handleClick = () => {
       setClick(!isClick)
   }
	return (
		<div onClick={handleClick} className='cursor-pointer '>
			{!isClick && (
				<span className='flex items-start justify-between w-24 h-6 rounded-2xl border'>
					<span className='flex items-center justify-center p-1 text-white text-xs h-full w-1/2 rounded-2xl  bg-green-700 text-center'>
						REAL
					</span>
					<p className='m-auto text-gray-400 pr-2 text-xs'>SIM</p>
				</span>
			)}

			{isClick && (
				<span className='flex items-start justify-between w-24 h-6 rounded-2xl border'>
					<p className='m-auto text-gray-400 pr-2 text-xs'>REAL</p>
					<span className='flex items-center justify-center p-1 text-white text-xs h-full w-1/2 rounded-2xl  bg-yellow-400 text-center'>
						SIM
					</span>
				</span>
			)}
		</div>
	);
};

export default Toggle;
