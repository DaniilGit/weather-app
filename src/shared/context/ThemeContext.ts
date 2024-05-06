import { createContext } from 'react';

interface IThemeContext {
  mode: 'light' | 'dark';
  toggle: () => void;
}

export const ThemeContext = createContext<IThemeContext>({ toggle: () => {}, mode: 'light' });
