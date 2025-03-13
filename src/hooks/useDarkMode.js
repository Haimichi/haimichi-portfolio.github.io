import { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

export const useTheme = () => {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode.value]);

  return darkMode;
};

export default useTheme;