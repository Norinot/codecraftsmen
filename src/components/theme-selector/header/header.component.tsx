import { useState } from "react";
import { useTheme } from "../../../theme-provider/theme-provider.context";
import styles from "./header.module.scss";

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles[theme]}>
      <header className={styles.wrapper}>
        <h1 className={styles.headerTitle}>C_C_M_</h1>
        <button
          className={`${styles.hamburgerMenu} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>

        {isOpen && (
          <div className={styles.dropdownMenu}>
            <button className={styles.closeButton} onClick={toggleMenu}>
              X
            </button>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>How to order</li>
              <li>Contact us</li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
