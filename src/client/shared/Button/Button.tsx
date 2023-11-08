import Link from 'next/link';
import { useHandleClick } from '../Hooks/useHandleClick';

export const Button = ({
    text,
	link,
	classValue,
}: {
	text: string;
	link: string;
	classValue: string;
}) => {
	const { click, handleClick } = useHandleClick();
	return (
		<Link href={link}>
			<button
				onClick={handleClick}
				type='submit'
				className={`scale-animation ${click ? 'active' : ''} ${classValue}`}>
				{text}
			</button>
		</Link>
	);
};
