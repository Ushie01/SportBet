import React from 'react';
import { Modal,  IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';

type MobileModalProps = {
	modalContent: React.JSX.Element;
      isOpen: boolean;
	closeModal: () => void;
};

const MobileModal = ({ modalContent, isOpen,  closeModal}: MobileModalProps) => {
	return (
		<>
			<Modal
				open={isOpen}
				onClose={closeModal}>
				<Modal.Backdrop className='bg-black opacity-50' />
				<Modal.Panel className='w-screen  bg-white rounded-none'>
					<IconButton
						variant='ghost'
						size='sm'
						className='absolute top-4 end-5 text-gray-900'
						onClick={closeModal}>
						<ControlsCloseSmall
							className='text-gray-900'
							height={32}
							width={32}
						/>
					</IconButton>
					<div className='p-4 pt-11'>
						{/* Mobile Content */}
						<div>{modalContent}</div>
					</div>
				</Modal.Panel>
			</Modal>
		</>
	);
};

export default MobileModal;
