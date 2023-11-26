import React from 'react';
import { Drawer } from '@heathmont/moon-core-tw';
import { useVisibilityControl } from '../Hooks/useVisibilityControl';
import BetSlipHeader from '../../components/LandingPage/components/MobileView/BetSlip/Components/BetSlipHeader';

const MobileBetSlipDrawer = ({
	drawerContent,
}: {
	drawerContent: React.JSX.Element;
}) => {
	const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

	return (
		<>
			<div
				onClick={handleClick}
				className='fixed flex flex-col items-center justify-center rounded-l-md bottom-16 right-0 bg-white p-1'>
				<div className='z-10000 flex items-center justify-center rounded-full text-center font-bold bg-gold h-7 w-7 text-white'>
					<p>0</p>
				</div>
				<p className='text-[10px] pt-1 text-black'>BETSLIP</p>
			</div>

			<Drawer
				open={isOpen}
				setOpen={setIsOpen}>
				<Drawer.Panel
					position='bottom'
					className='bg-white border-t z-10000'>
					<div className='h-max'>
						<div className='flex flex-col'>
							<BetSlipHeader setIsDrawerOpen={setIsOpen} />
							{drawerContent}
						</div>
					</div>
				</Drawer.Panel>
				<Drawer.Backdrop className='bg-black opacity-70' />
			</Drawer>
		</>
	);
};

export default MobileBetSlipDrawer;
