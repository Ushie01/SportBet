import React  from 'react';
import { ControlsClose } from '@heathmont/moon-icons-tw';

type ModalProps = {
	modalContent: React.JSX.Element;
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({modalContent, openModal, setOpenModal}: ModalProps) => {
	return (
		<div>
			{openModal && (
				<div>
					<div
						onClick={() => setOpenModal(false)}
						className={`z-10000 fixed w-[100%] h-[100%] top-0 left-0 bg-black opacity-25`}></div>
					<div
						className={`z-10000 fixed bg-white p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-max w-96`}>
						<div className='flex flex-col items-center'>
							<button>
								<ControlsClose
									onClick={() => setOpenModal(false)}
									height={35}
									width={35}
									color='black'
									className='p-2 top-2 right-2 fixed'
								/>
							</button>

							{/* Modal Content */}
							<div>{modalContent}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
