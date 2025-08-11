import OurServices from "./components/our-services/our-services.component";
import OurTeam from "./components/our-team/our-team.components";
import styles from "./brutalism.module.scss";

const BrutalismMainPage = () => {
  return (
    <div className={styles.root}>
      <OurServices />
      <OurTeam />
    </div>
  );
};
export default BrutalismMainPage;
