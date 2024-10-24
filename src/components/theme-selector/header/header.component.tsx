import styles from "./header.module.scss";
import { useTheme } from "../../../theme-provider/theme-provider.context";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <div className={styles[theme]}>
      <header className={styles.wrapper}>
        <h1 className={styles.headerTitle}>C_C_M_</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.hamburgerMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>

          <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        </button>
      </header>
    </div>
  );
};

export default Header;
