import React, { useState } from 'react';
import { Drawer } from '@heathmont/moon-core-tw';

const MobileBetSlipDrawer = ({drawerContent }: {drawerContent: React.JSX.Element}) => {
	const [isBottomOpen, setIsBottomOpen] = useState(false);
	const handleBottomClick = () => setIsBottomOpen(true);

	return (
		<>
			<div
				onClick={handleBottomClick}
				className='fixed flex flex-col items-center justify-center rounded-l-md bottom-16 right-0 bg-white p-1'>
				<div className='z-10000 flex items-center justify-center rounded-full text-center font-bold bg-gold h-7 w-7 text-white'>
					<p>0</p>
				</div>
				<p className='text-[10px] pt-1 text-black'>BETSLIP</p>
			</div>
			<Drawer
				open={isBottomOpen}
				setOpen={setIsBottomOpen}>
				<Drawer.Panel
					position='bottom'
					className='bg-white border-t z-10000'>
					<div className='h-max'>{drawerContent}</div>
				</Drawer.Panel>
				<Drawer.Backdrop className='bg-black opacity-70' />
			</Drawer>
		</>
	);
};

export default MobileBetSlipDrawer;
