import HeaderMinimalist from "./components/header/header.component";
import styles from "./minimalist.module.scss";

const MinimalistMainPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderMinimalist />
      <div className={styles.heroSection}>
        <div className={styles.learnMoreGroup}>
          <h1 className={styles.title}>We create websites.</h1>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <img src="/animated_logo.svg" alt="" />
      </div>
    </div>
  );
};
export default MinimalistMainPage;
