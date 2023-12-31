import React from 'react';
import Image from 'next/image';
import Search from '../../../Svg/Search';
import MobileRegister from '@/src/client/components/Auth/User/UserAuth/Register/MobileRegister';
import MobileLogin from '@/src/client/components/Auth/User/UserAuth/Login/MobileLogin';
import { renderAuthDrawer } from '../../../Drawer/RenderAuthDrawer';
import { useVisibilityControl } from '../../../Hooks/useVisibilityControl';

const MobileTopHeader = () => {
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
		<div className='relative'>
			<div
				className='flex items-center justify-between bg-black h-[50px] p-2'
				id='section1'>
				<p className='text-white text-xl font-bold'>Sport<span className='text-gold'>Bet</span></p>
				<div className='flex items-center justify-center space-x-3'>
					<Search
						width='18'
						height='18'
					/>
					<div className='flex items-center space-x-3'>
						{renderAuthDrawer(
							'Join Now',
							isRegisterOpen,
							'text-gold bg-white text-xs p-2 rounded-sm shadow-md',
							setRegisterIsOpen,
							handleRegisterClick,
							<MobileRegister />
						)}
						{renderAuthDrawer(
							'Log In',
							isLoginOpen,
							'text-white py-2 text-xs px-2 border rounded-sm shadow-md border-white',
							setLoginIsOpen,
							handleLoginClick,
							<MobileLogin />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileTopHeader;
