import { useState, useEffect } from 'react';

export const useLink = (initialLink: string) => {
  const [link, setLink] = useState<string>(initialLink);

  const handleClick = (item: string) => {
    setLink(item);
  };

  useEffect(() => {
    setLink(initialLink);
  }, [initialLink]);

  return { link, handleClick };
};

