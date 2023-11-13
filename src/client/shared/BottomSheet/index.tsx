import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';

const Example = () => {
	const [isOpen, setIsOpen] = useState(false);
	const closeBottomSheet = () => {
		setIsOpen(false);
	};
	const openBottomSheet = () => {
		setIsOpen(true);
	};
	return (
		<>
			<Button
				variant='outline'
				onClick={openBottomSheet} className='bg-black p-2 text-white'>
				Default BottomSheet
			</Button>
			<BottomSheet
				open={isOpen}
				onClose={closeBottomSheet}>
				<BottomSheet.Panel>
					<div className='flex grow items-center justify-center bg-jiren text-piccolo border bg-white'>
						BottomSheet content
					</div>
				</BottomSheet.Panel>
				<BottomSheet.Backdrop className='bg-black opacity-25'/>
			</BottomSheet>
		</>
	);
};

export default Example;