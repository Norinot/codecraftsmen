import { useRef, useEffect } from "react";
import styles from "./theme-selector.module.scss";
import { Theme } from "../../App";
import { useTheme } from "../../theme-provider/theme-provider.context";

const ThemeSelector = () => {
  const { theme, switchTheme } = useTheme();
  const themeContainerRef = useRef<HTMLDivElement | null>(null);

  const themes: Theme[] = [
    "Brutalism",
    "Minimalist",
    "Vintage",
    "Skeumorph",
    "Space",
  ];

  const extendedThemes: (Theme | "Choose style")[] = [
    ...themes,
    "Choose style",
    ...themes,
    "Choose style",
    ...themes,
  ];

  const handleThemeClick = (clickedTheme: string, index: number) => {
    if (
      clickedTheme !== "Choose style" &&
      themes.includes(clickedTheme as Theme)
    ) {
      switchTheme(clickedTheme as Theme);
    }

    const themeElement = themeContainerRef.current?.children[index];
    if (themeElement) {
      themeElement.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = themeContainerRef.current;
    if (!container) return;

    const itemHeight = container.scrollHeight / extendedThemes.length;

    if (container.scrollTop <= 0) {
      container.scrollTop = itemHeight * (themes.length - 1);
    } else if (
      container.scrollTop >=
      itemHeight * (extendedThemes.length - 1)
    ) {
      container.scrollTop = itemHeight;
    }
  };

  useEffect(() => {
    const container = themeContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight / 3;

      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.themeSelectorWrapper}>
      <div ref={themeContainerRef} className={styles.themeSelector}>
        {extendedThemes.map((themeName, index) => (
          <div
            key={index}
            className={`${styles.themeItem} ${
              theme === themeName ? styles.selected : ""
            } ${themeName === "Choose style" ? styles.chooseStyle : ""}`}
            onClick={() => handleThemeClick(themeName, index)}
          >
            {themeName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
