import { useEffect } from 'react';

export function useSetAboutHeight() {
  useEffect(() => {
    const setAboutHeight = () => {
      const windowHeight = window.innerHeight;
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      document.documentElement.style.setProperty('--about-height', `${windowHeight - navHeight}px`);
    };

    setAboutHeight();
    window.addEventListener('resize', setAboutHeight);

    return () => {
      window.removeEventListener('resize', setAboutHeight);
    };
  }, []);
}