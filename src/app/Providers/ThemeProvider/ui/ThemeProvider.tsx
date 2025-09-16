import { ReactNode, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

type Theme = "light" | "dark";
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
