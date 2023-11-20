import { Button } from '../Button';
import DropdownButton from '../DropButton/MobileDropButton/DropButton';

type ButtonProps = {
	className: string;
	border: string;
}
const items = ['1', '1.5', '2', '2.5']

export const TwoOddsButton = ({className, border}: ButtonProps) => {
	return (
		<div className='flex w-[180px]'>
			<Button
				text='2.3'
				classValue={`${className} h-9 w-[90px]  font-bold hover:text-white hover:bg-green-600`}
				link='#'
			/>
			<Button
				text='2.3'
				classValue={`${className} ${border} h-9 w-[90px] hover:text-white hover:bg-green-600 font-bold`}
				link='#'
			/>
		</div>
	);
};

export const ThreeOddsButton = ({className, border}: ButtonProps) => {
  return (
		<div className='flex w-[180px]'>
			<DropdownButton
				className={`${className} h-9 w-[60px] bg-ash font-bold hover:text-white hover:bg-green-600`}
				items={items}
			/>
			<Button
				text='2.3'
				classValue={`${className} ${border} h-9 w-[60px] hover:text-white hover:bg-green-600 font-bold`}
				link='#'
			/>
			<Button
				text='2.3'
				classValue={`${className} ${border} h-9 w-[60px] hover:text-white hover:bg-green-600 font-bold`}
				link='#'
			/>
		</div>
	);
}

export const FourOddsButton = ({className, border}: ButtonProps) => {
  return (
		<div className='flex w-[180px]'>
			<DropdownButton
				className={`${className} h-9 w-[45px] font-bold hover:text-white hover:bg-green-600`}
				items={items}
			/>
			<Button
				text='2.3'
				classValue={`${className} ${border} h-9 w-[45px] hover:text-white hover:bg-green-600 font-bold`}
				link='#'
			/>
			<Button
				text='2.3'
				classValue={`${className} ${border} h-9 w-[45px] hover:text-white hover:bg-green-600 font-bold`}
				link='#'
			/>
			<Button
				text='247.3'
				classValue={`${className} ${border} h-9 w-[45px] hover:text-white hover:bg-green-600 font-bold`}
				link='#'
			/>
		</div>
	);
}

