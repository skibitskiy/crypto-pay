import React, {
  PropsWithChildren, useContext, useLayoutEffect, useState,
} from 'react';

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface IThemeProps {
  theme: Theme;
  toggleTheme:() => void;
}

const LOCAL_STORAGE_THEME_KEY = 'crypto-pay-color-theme';

const setThemeAttr = (theme: Theme) => { document.documentElement.setAttribute('data-theme', theme); };

export const useThemeProps = (): IThemeProps => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const saveTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.cookie = `${LOCAL_STORAGE_THEME_KEY}=${newTheme}`;
    setThemeAttr(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    saveTheme(newTheme);
  };

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

    const newTheme = [Theme.LIGHT, Theme.DARK].includes(savedTheme) ? savedTheme : Theme.LIGHT;

    saveTheme(newTheme);
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

const ThemeReactContext = React.createContext<IThemeProps>(
  { theme: Theme.LIGHT, toggleTheme: () => {} },
);

export const ThemeContext: React.FC<PropsWithChildren> = ({ children }) => {
  const props = useThemeProps();

  return <ThemeReactContext.Provider value={props}>{children}</ThemeReactContext.Provider>;
};

export const useThemeContext = () => {
  return useContext(ThemeReactContext);
};
