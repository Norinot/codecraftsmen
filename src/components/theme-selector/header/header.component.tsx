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
        <div className={styles.menuWrapper}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.hamburgerMenu}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
          <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>How to Order</li>
              <li>Contact Us</li>
            </ul>
            <button
              className={styles.closeButton}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              x
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
