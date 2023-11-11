import { useState } from 'react';

export const useModal = () => {
    const [openModal, setOpenModal] = useState(false);

	const handleClick = () => {
		setOpenModal(true)
    };
    
    return {openModal, setOpenModal, handleClick}
}