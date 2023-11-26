import React, { useState } from 'react';
import { Tab } from '@/src/client/shared/Tab/TabBar';
import { Button } from '@/src/client/shared/Button/Button';
import { useVisibilityControl } from '@/src/client/shared/Hooks/useVisibilityControl';
import Modal from '@/src/client/shared/Modal/Modal';
import DropdownText from '@/src/client/shared/Dropdown/DropdownText';
import ModalComponent from '@/src/client/components/Auth/Components/DesktopModelView';
import Toggle from '@/src/client/shared/Switch/Toggle';

const BetSlip = () => {
	const navItem = ['Betslip', 'Cashout'];
	const [tabValue, setTabValue] = useState('');
	const [inputValue, setInputValue] = useState('');
	const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

	return (
		<div className='w-full border-4 border-gray-900'>
			<div className=' pt-5 pb-1 bg-gray-900 px-3'>
				<Tab
					className='text-white'
					initialState='Betslip'
					data={navItem}
					setTabValue={setTabValue}
					handleTabClick={handleClick}
					borderColor='border-green-500'
					borderBottomColor='border-b-gray-900'
				/>
				<div className='pt-3 pb-1'>
					<Toggle />
				</div>
			</div>

			<div className='px-3 py-5 bg-white text-sm'>
				<p>
					To place a bet, click on the odds. Or insert a booking code
				</p>

				<div className='flex flex-col space-y-2 mt-4'>
					<DropdownText />
					<input
						placeholder='Booking Code'
						className='h-10 w-full borderless-input border pl-2'
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<Button
						text='Load'
						link='#'
						className={`${
							inputValue
								? 'bg-green-600 text-white'
								: 'bg-gray-500 text-black opacity-40'
						} cursor-not-allowed  w-full h-10`}
					/>
				</div>

				<div className='bg-white opacity-30 mt-3'>
					<p>
						A booking code enables one to transfer a betslip between
						different devices.
					</p>
				</div>
			</div>

			{tabValue === 'Cashout' && (
				<Modal
					className=''
					openModal={isOpen}
					setOpenModal={setIsOpen}
					modalContent={<ModalComponent />}
				/>
			)}
		</div>
	);
};

export default BetSlip;
