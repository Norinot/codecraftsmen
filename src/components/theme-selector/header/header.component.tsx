import styles from "./header.module.scss";
import { useTheme } from "../../../theme-provider/theme-provider.context";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className={styles[theme]}>
      <header className={styles.wrapper}>
        <h1 className={styles.headerTitle}>C_C_M_</h1>
        <button className={styles.hamburgerMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </header>
    </div>
  );
};
export default Header;
