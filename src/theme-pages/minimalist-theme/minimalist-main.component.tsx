import OurServices from "./components/our-services/our-services.component";
import OurTeam from "./components/our-team/our-team.component";
import styles from "./minimalist.module.scss";

const MinimalistMainPage = () => {
  return (
    <div className={styles.root}>
      <OurServices />
      <OurTeam />
    </div>
  );
};
export default MinimalistMainPage;
