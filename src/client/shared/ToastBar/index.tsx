import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
	text: string;
};

export const SuccessToast = ({ text }: Props) => {
	toast(text, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});
};

export const ErrorToast = ({ text }: Props) => {
	toast.error(text, {
		position: 'top-left',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});
};
