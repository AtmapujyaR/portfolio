import { useEffect } from 'react';
import { portfolioContent } from '../data/portfolioContent';

export function useSetTheme() {
  useEffect(() => {
    Object.entries(portfolioContent.colors).forEach(([_key, value]) => {
      document.documentElement.style.setProperty(value.name, value.value);
    });
  }, []);
}