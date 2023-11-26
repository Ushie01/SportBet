import React from 'react';
import { ControlsClose } from '@heathmont/moon-icons-tw';
import {Drawer } from '@heathmont/moon-core-tw';

type AuthDrawerProps = {
      button: React.JSX.Element;
      content: any;
      isOpen: boolean;
      setIsOpen: (value: boolean) => void;
}

const MobileAuthDrawer = ({button, content, isOpen, setIsOpen}: AuthDrawerProps) => {	// const handleBottomClick = () => setIsBottomOpen(true);
	return (
		<>
			{button}
			<Drawer
				open={isOpen}
				setOpen={setIsOpen}>
				<Drawer.Panel position='bottom'>
					<div className='p-3 h-screen w-screen bg-white'>
						<div className='flex fixed right-5 top-5'>
							<ControlsClose
								fill='gray'
								className='text-gray-400'
								height={28}
								width={28}
								onClick={() => setIsOpen(false)}
							/>
						</div>
						<div className='mt-16'>{content}</div>
					</div>
				</Drawer.Panel>
			</Drawer>
		</>
	);
};

export default MobileAuthDrawer;
