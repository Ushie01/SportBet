import { Input, Label } from '@heathmont/moon-core-tw';

type Props = {
    bgColor: string;
    height: string;
}

const InputText = ({ bgColor, height }: Props) => (
	<div
		className={`flex items-center ${height} ${bgColor} opacity-90 text-xs rounded-sm `}>
		<p className='py-2 pl-4 text-black'>+234</p>
		<Input
			type='number'
			placeholder='Mobile Number'
			className={` text-black text-xs h-8 rounded-r-sm  ${bgColor}`}
		/>
	</div>
);

export default InputText;
