import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const CheckBox = ({title}: {title: string}) => {
	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};
    return <Checkbox onChange={onChange} className='text-gray-400'>{title}</Checkbox>;
};

export default CheckBox;
