import React from 'react';
import Toggle from '@/src/client/shared/Switch/Toggle';
import MobileLogin from '@/src/client/components/Auth/Login/MobileLogin';
import MobileRegister from '@/src/client/components/Auth/Register/MobileRegister';
import { renderAuthDrawer } from '@/src/client/shared/Drawer/RenderAuthDrawer';
import { useVisibilityControl } from '@/src/client/shared/Hooks/useVisibilityControl';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

type BetSlipHeaderProps = {
	setIsDrawerOpen: Function;
};

const BetSlipHeader: React.FC<BetSlipHeaderProps> = ({ setIsDrawerOpen }) => {
	const {
		isOpen: isRegisterOpen,
		setIsOpen: setRegisterIsOpen,
		handleClick: handleRegisterClick,
	} = useVisibilityControl();

	const {
		isOpen: isLoginOpen,
		setIsOpen: setLoginIsOpen,
		handleClick: handleLoginClick,
	} = useVisibilityControl();

	return (
		<div className='flex items-center justify-between bg-ash h-16 px-3 py-4 w-full'>
			<div className='flex items-center space-x-2'>
				<div className='z-10000 flex items-center justify-center rounded-full text-center font-bold bg-gray-500 h-7 w-7 text-white'>
					<p>0</p>
				</div>
				<Toggle />
			</div>

			<ControlsChevronDown
				fontSize={40}
				color='white'
				fill='white'
				className='-mt-8'
				onClick={() => setIsDrawerOpen(false)}
			/>

			<div className='flex items-center space-x-2 text-white'>
				{renderAuthDrawer(
					'Register',
					isRegisterOpen,
					'font-bold',
					setRegisterIsOpen,
					handleRegisterClick,
					<MobileRegister />
				)}
				<p className='text-gray-500'>|</p>
				{renderAuthDrawer(
					'Login',
					isLoginOpen,
					'font-bold',
					setLoginIsOpen,
					handleLoginClick,
					<MobileLogin />
				)}
			</div>
		</div>
	);
};

export default BetSlipHeader;
