import HeaderMinimalist from "./components/header/header.component";
import styles from "./minimalist.module.scss";

const MinimalistMainPage = () => {
  return (
    <div>
      <HeaderMinimalist />
      <div className={styles.heroSection}>
        <h1>We create websites.</h1>
        <img src="/animated_logo.svg" alt="" />
      </div>
    </div>
  );
};
export default MinimalistMainPage;
