import Link from 'next/link';
import { useHandleClick } from '../Hooks/useHandleClick';

type ActionButtonProps = {
	text: string;
	className: string;
};

const ActualButton = ({ text, className }: ActionButtonProps) => {
	const { click, handleClick } = useHandleClick();
	return (
		<button
			onClick={handleClick}
			type='submit'
			className={`transition-all transform ${
				click ? 'scale-75' : ''
			} ${className}`}>
			{text}
		</button>
	);
};

export const Button = ({
	text,
	link,
	className,
}: {
	text: string;
	link: string;
	className: string;
}) => {
	return (
		<Link href={link}>
			<ActualButton
				text={text}
				className={className}
			/>
		</Link>
	);
};

type AuthButtonProps = {
	text: string;
	href: string;
	className: string;
	setIsOpen: Function;
};

export const AuthButton = ({
	setIsOpen,
	text,
	href,
	className,
}:  AuthButtonProps) => {
	return (
		<Link href={href} onClick={() => setIsOpen(true)}>
			<ActualButton
				text={text}
				className={className}
			/>
		</Link>
	);
};
