import { useState } from 'react';

export const useVisibilityControl = () => {
      const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(true);

      return {isOpen, setIsOpen, handleClick}
}