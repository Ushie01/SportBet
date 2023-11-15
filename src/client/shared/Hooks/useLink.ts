import { useState, useEffect } from 'react';

type Data = {
	name: string;
	data?: { name: string }[];
};

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

export const useLinkArray = (initialLink: string) => {
  const [link, setLink] = useState<string | []>(initialLink);
  const handleClick = (item: Data) => {
    setLink(item.name);
  }

  useEffect(() => {
    setLink(initialLink)
  }, [initialLink]);

  return { link, setLink, handleClick };
}