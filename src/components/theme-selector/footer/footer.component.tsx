import styles from "./footer.module.scss";
import { useTheme } from "../../../theme-provider/theme-provider.context";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={styles[theme]}>
      <h1 className={styles.headerTitle}>C_C_M_</h1>

      <button className={styles.contactUsButton}>Contact Us</button>
    </div>
  );
};

export default Footer;
