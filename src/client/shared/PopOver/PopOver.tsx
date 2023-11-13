import React from 'react';
import { Popover, Button} from '@heathmont/moon-core-tw';

type Prop = {
    content: React.JSX.Element;
    popOverButton: React.ReactNode;
}

const PopOver = ({content, popOverButton}: Prop) => {
	return (
		<div>
			<Popover position='bottom-end'>
				<Popover.Trigger>
					{popOverButton}
				</Popover.Trigger>
				<Popover.Panel className='bg-white border w-[700px]'>
					{content}
				</Popover.Panel>
			</Popover>
		</div>
	);
};


export default PopOver;
