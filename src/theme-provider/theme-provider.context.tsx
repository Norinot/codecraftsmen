import { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  switchTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("space");

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
