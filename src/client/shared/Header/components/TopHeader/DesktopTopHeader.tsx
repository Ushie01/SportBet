import React  from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input } from '@heathmont/moon-core-tw';
import ModalComponent from '@/src/client/components/Auth/Components/ModalComponent';
import Modal from '../../../Modal/Modal';
import InputText from '../../../Input/Input';
import { useModal } from '../../../Hooks/useModal';

const DesktopTopHeader = () => {
	const {openModal, setOpenModal, handleClick} = useModal();

	return (
		<div className='flex items-start justify-between w-full py-5'>
			<Image
				src='/assets/logo1.png'
				alt='logo alt'
				height={50}
				width={200}
			/>

			<div className='flex flex-col'>
				<div className='flex space-x-2'>
					<InputText
						height='h-8'
						bgColor='bg-gray-300'
					/>
					<div className='flex items-center h-8 opacity-90'>
						<Input
							type='password'
							placeholder='Password'
							className='borderless-input bg-gray-300 h-8 rounded-l-sm text-black text-xs'
						/>

						<Button
							onClick={handleClick}
							className='bg-gray-400 h-8 text-white text-xs px-6 rounded-r-sm '>
							Login
						</Button>
					</div>
					<Button
						onClick={handleClick}
						className='border border-yellow-500 h-8 text-yellow-500 text-xs rounded-sm'>
						Register
					</Button>
				</div>

				<div className='flex items-center justify-end pt-2 text-md text-white space-x-5 text-xs'>
					<div>
						<input
							type='checkbox'
							name=''
							className='border border-white '
							value=''
						/>
						<label
							htmlFor=''
							className='pl-1 text-white'>
							Keep me signed in
						</label>
					</div>
					<Link href='#'>Forget Password?</Link>
					<div className='flex space-x-2'>
						<Link href='#'>Deactivate</Link>
						<Link href='#'>/ Reactivate</Link>
					</div>
				</div>

				{openModal && (
					<Modal
						className=''
						openModal={openModal}
						setOpenModal={setOpenModal}
						modalContent={<ModalComponent />}
					/>
				)}
			</div>
		</div>
	);
};

export default DesktopTopHeader;
