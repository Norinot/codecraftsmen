import OurServices from "./components/our-services/our-services.component";
import OurTeam from "./components/our-team/our-team.components";
import Typography from "../../components/theme-selector/typography/typography.component";
import styles from "./brutalism.module.scss";

const BrutalismMainPage = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.learnMoreGroup}>
          <Typography
            theme="Brutalist"
            variant="body-large-bold"
            className={styles.title}
          >
            We create websites.
          </Typography>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <img className={styles.animatedLogo} src="/animated_logo.svg" alt="" />
      </div>
      <div className={styles.root}>
        <OurServices />
        <OurTeam />
      </div>
    </>
  );
};
export default BrutalismMainPage;
