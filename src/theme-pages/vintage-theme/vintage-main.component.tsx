import OurServices from "../minimalist-theme/components/our-services/our-services.component"; // Change import location
import OurTeam from "../minimalist-theme/components/our-team/our-team.component"; // Change import location
import styles from "./vintage.module.scss";
const VintageMainPage = () => {
  return (
    <div className={styles.root}>
      <OurServices />
      <OurTeam />
    </div>
  );
};
export default VintageMainPage;
