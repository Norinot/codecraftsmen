import { useEffect } from "react";
import "./App.scss";
import { useTheme } from "./theme-provider/theme-provider.context";
import SpaceMainPage from "./theme-pages/space-theme/space-main.component";
import MinimalistMainPage from "./theme-pages/minimalist-theme/minimalist-main.component";
import BrutalismMainPage from "./theme-pages/brutalism-theme/brutalism-main.component";
import VintageMainPage from "./theme-pages/vintage-theme/vintage-main.component";
import SkeumorphMainPage from "./theme-pages/skeumorph-theme/skeumorph-main.component";
import ThemeSelector from "./components/theme-selector/theme-selector.component";
import Header from "./components/theme-selector/header/header.component";

export type Theme =
  | "Minimalist"
  | "Brutalism"
  | "Space"
  | "Skeumorph"
  | "Vintage";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeComponents: Record<Theme, JSX.Element> = {
    Minimalist: <MinimalistMainPage />,
    Space: <SpaceMainPage />,
    Brutalism: <BrutalismMainPage />,
    Vintage: <VintageMainPage />,
    Skeumorph: <SkeumorphMainPage />,
  };

  const themeColors: Record<Theme, string> = {
    Minimalist: "#f2edeb",
    Brutalism: "#f2edeb",
    Space: "#2B2B2B",
    Skeumorph: "#B0B0B0",
    Vintage: "#F4E1D2",
  };

  return (
    <div>
    <div className="theme-selector-container">
      <ThemeSelector />
    </div>
    <div
      className="theme-page-wrapper"
      style={{ backgroundColor: themeColors[theme] }}
    >
      <Header />
      {themeComponents[theme] || <MinimalistMainPage />}
    </div>
  </div>
);
};

export default App;
