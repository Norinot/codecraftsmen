import OurServices from "./components/our-services/our-services.component";
import styles from "./minimalist.module.scss";

const MinimalistMainPage = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.learnMoreGroup}>
          <h1 className={styles.title}>We create websites.</h1>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <img className={styles.animatedLogo} src="/animated_logo.svg" alt="" />
      </div>
      <OurServices />
    </>
  );
};
export default MinimalistMainPage;
