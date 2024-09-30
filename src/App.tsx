import { useEffect } from "react";
import "./App.scss";
import { useTheme } from "./theme-provider/theme-provider.context";
import SpaceMainPage from "./theme-pages/space-theme/space-main.component";

const App = () => {
  const { theme, switchTheme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchTheme(event.target.value);
  };

  return (
    <>
      <header>sex1</header>
      {theme == "space" ? (
        <SpaceMainPage />
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>asd</span>
            <div style={{ color: "red" }}>asd</div>
          </div>
          <span>asd2</span>
        </div>
      )}
      <footer>sex2</footer>
    </>
  );
};

export default App;
