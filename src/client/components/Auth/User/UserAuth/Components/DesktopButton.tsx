import { Button, Loader } from '@heathmont/moon-core-tw';

interface AuthButtonProps {
      buttonName: string;
      className: string;
	phoneNumber: string;
	password: string;
	mutation: {
		isPending: boolean;
	};
	handle: () => void;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
      buttonName,
      phoneNumber,
      className,
	password,
	mutation,
	handle,
}) => {
	return (
		<Button
			onClick={handle}
			className={`${className}  ${
				phoneNumber.length > 0 && password.length > 0
					? 'bg-green-500 text-white'
					: 'bg-gray-200 text-gray-400 disabled'
			}`}
			disabled={mutation.isPending}>
			{mutation.isPending ? <Loader size='xs' /> : buttonName}
		</Button>
	);
};
