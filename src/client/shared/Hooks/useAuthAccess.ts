import { useState, useEffect } from 'react';
import { ErrorToast, SuccessToast } from '@/src/client/shared/ToastBar';

export const useAuthAccess = ({
  mutation,
  failedResText,
  successfulResText,
}: {
  mutation: any;
  failedResText: string;
  successfulResText: string;
}) => {
  const [response, setResponse] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = async () => {
    const values = { phoneNumber, password };
    if (values.phoneNumber && values.password) {
      const payload = await mutation.mutateAsync(values);
      setResponse(payload?.message);
    }
  };

  useEffect(() => {
    if (response?.includes(failedResText)) {
      ErrorToast({ text: 'Failed Request' });
    } else if (response?.includes(successfulResText)) {
      SuccessToast({ text: 'Successful Request' });
    } else {
	    return
    }
  }, [response, failedResText, successfulResText]);

  return {
    response,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    handleClick,
  };
};
