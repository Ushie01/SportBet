import React, { useState } from 'react';

const Toggle = () => {
	const [isClick, setClick] = useState(false);

	const handleClick = () => {
		setClick(!isClick);
	};

	return (
		<div
			onClick={handleClick}
			className='cursor-pointer'>
			<span className='flex items-start justify-between w-24 h-6 rounded-2xl border'>
				{!isClick ? (
					<>
						<span className='flex items-center justify-center p-1 text-white text-xs h-full w-1/2 rounded-2xl bg-green-700'>
							REAL
						</span>
						<p className='m-auto text-gray-400 pr-2 text-xs'>SIM</p>
					</>
				) : (
					<>
						<p className='m-auto text-gray-400 pl-1 text-xs'>REAL</p>
						<span className='flex items-center justify-center p-1 text-white text-xs h-full w-1/2 rounded-2xl bg-yellow-400'>
							SIM
						</span>
					</>
				)}
			</span>
		</div>
	);
};

export default Toggle;
