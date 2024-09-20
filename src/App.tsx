import { useEffect } from "react";
import "./App.scss";
import { useTheme } from "./ThemeProvider/ThemeProvider.context";

const App = () => {
  const { theme, switchTheme } = useTheme();

  useEffect(() => {
    //Basically simulating an HTTP Call that lets say would send back the theme keyword and we set it up once we get it, but by default it would be the space.
    setTimeout(() => {
      switchTheme("brutalism");
    }, 3000);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchTheme(event.target.value);
  };

  return (
    <div>
      <h1 className="mainTitle">Current theme: {theme}</h1>
      <select onChange={handleThemeChange} value={theme}>
        <option value="space">space</option>
        <option value="brutalism">brutalism</option>
        <option value="minimalist">minimalist</option>
        <option value="skeumorphism">skeumorphism</option>
        <option value="vintage">vintage</option>
      </select>
    </div>
  );
};

export default App;
