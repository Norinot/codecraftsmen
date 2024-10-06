import { useEffect } from "react";
import "./App.scss";
import { useTheme } from "./theme-provider/theme-provider.context";
import SpaceMainPage from "./theme-pages/space-theme/space-main.component";
import MinimalistMainPage from "./theme-pages/minimalist-theme/minimalist-main.component";
import BrutalismMainPage from "./theme-pages/brutalism-theme/brutalism-main.component";
import VintageMainPage from "./theme-pages/vintage-theme/vintage-main.component";
import SkeumorphMainPage from "./theme-pages/skeumorph-theme/skeumorph-main.component";

export type Theme =
  | "minimalist"
  | "space"
  | "brutalism"
  | "vintage"
  | "skeumorph";

const App = () => {
  const { theme, switchTheme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchTheme(event.target.value as Theme);
  };

  const themeComponents: Record<Theme, JSX.Element> = {
    minimalist: <MinimalistMainPage />,
    space: <SpaceMainPage />,
    brutalism: <BrutalismMainPage />,
    vintage: <VintageMainPage />,
    skeumorph: <SkeumorphMainPage />,
  };

  return (
    <div>
      <div style={{ position: "absolute" }}>
        <select onChange={handleThemeChange} value={theme}>
          <option value="space">space</option>
          <option value="brutalism">brutalism</option>
          <option value="minimalist">minimalist</option>
          <option value="skeumorphism">skeumorphism</option>
          <option value="vintage">vintage</option>
        </select>
      </div>
      {themeComponents[theme] || <MinimalistMainPage />}
    </div>
  );
};

export default App;
