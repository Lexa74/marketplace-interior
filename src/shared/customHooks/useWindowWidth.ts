import { useEffect, useState } from 'react';

const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowWidth;
};
