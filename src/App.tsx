import { useEffect } from "react";
import "./App.scss";
import { useTheme } from "./ThemeProvider/ThemeProvider.context";
import SpaceMainPage from "./ThemePages/SpaceTheme/SpaceMain.component";

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
      <h1 className="mainTitle">Current theme: {theme}</h1>

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


      {/* <div>
        <select onChange={handleThemeChange} value={theme}>
          <option value="space">space</option>
          <option value="brutalism">brutalism</option>
          <option value="minimalist">minimalist</option>
          <option value="skeumorphism">skeumorphism</option>
          <option value="vintage">vintage</option>
        </select>
      </div> */}
    </>
  );
};

export default App;
