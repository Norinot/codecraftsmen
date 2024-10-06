import styles from "./header.module.scss";

const HeaderMinimalist = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>C_C_M_</h1>
      <div className={styles.headerInside}></div>
      <button className={styles.hamburgerMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </header>
  );
};
export default HeaderMinimalist;
