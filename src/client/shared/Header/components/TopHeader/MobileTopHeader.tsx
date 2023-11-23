import React, { useState } from 'react';
import Image from 'next/image';
import Search from '../../../Svg/Search';
import { AuthButton } from '../../../Button/Button';
import MobileModal from '../../../Modal/MobileModal';
import MobileRegister from '@/src/client/components/Auth/Register/MobileRegister';
import MobileLogin from '@/src/client/components/Auth/Login/MobileLogin';

const MobileTopHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = () => setIsOpen(false);
	const hash = window.location.hash;
	const urlRoute = hash.slice(1);

	return (
		<div className='relative'>
			<div
				className='flex items-center justify-between bg-black h-[50px] p-2'
				id='section1'>
				<Image
					src='/assets/logo1.png'
					alt='logo alt'
					height={25}
					width={100}
				/>

				<div className='flex items-center justify-center space-x-3'>
					<Search
						width='18'
						height='18'
					/>
					<div className='flex items-center space-x-3'>
						<AuthButton
							href='/#Register'
							setIsOpen={setIsOpen}
							text='Join New'
							className='text-gold bg-white text-xs p-2 rounded-sm shadow-md'
						/>
						<AuthButton
							href='/#Login'
							setIsOpen={setIsOpen}
							text='Log In'
							className='text-white py-2 text-xs px-2 border rounded-sm shadow-md border-white'
						/>
						<MobileModal
							isOpen={isOpen}
							closeModal={closeModal}
							modalContent={
								urlRoute === 'Register' ? (
									<MobileRegister />
								) : (
									<MobileLogin />
								)
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileTopHeader;
