import OurServices from "./components/our-services/our-services.component";
import OurTeam from "./components/our-team/our-team.component";
import Typography from "./components/typography/typography.component";
import styles from "./minimalist.module.scss";

const MinimalistMainPage = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.learnMoreGroup}>
          <Typography
            theme="Minimalist"
            variant="display-medium"
            className={styles.title}
          >
            We create websites.
          </Typography>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <img className={styles.animatedLogo} src="/animated_logo.svg" alt="" />
      </div>
      <OurServices />
      <OurTeam />
    </>
  );
};
export default MinimalistMainPage;
