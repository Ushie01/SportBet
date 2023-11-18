import { Button } from '../Button';

export const TwoPointButton = () => {
	return (
		<div className='flex w-[210px]'>
			<Button
				text='2.3'
				classValue='text-green-500 h-9 w-[105px] bg-ash font-bold hover:text-white hover:bg-green-600'
				link='#'
			/>
			<Button
				text='2.3'
				classValue='text-green-500 border-l border-l-darkGray h-9 w-[105px] hover:text-white hover:bg-green-600 bg-ash font-bold'
				link='#'
			/>
		</div>
	);
};


