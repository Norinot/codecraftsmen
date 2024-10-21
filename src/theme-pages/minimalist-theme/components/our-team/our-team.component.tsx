import { useState } from "react";
import styles from "./our-team.module.scss";
import Typography from "../typography/typography.component";

const OurTeam = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [serviceOption, setServiceOption] = useState<string>("");
  const handleClick = (option: string) => {
    if (option === serviceOption) {
      setOpen(false);
      setServiceOption("");
    } else {
      setOpen(true);
      setServiceOption(option);
    }
  };

  return (
    <div className={styles.root}>
      <Typography variant="display-medium">Our Team</Typography>
      <div>
        <Typography variant="heading-3">Who are we?</Typography>
        <Typography variant="body-large">
          A passionate team who create/recreate your website from 0 to 100. We
          are dedicated to transforming your vision into reality with creativity
          and professionalism.
        </Typography>
      </div>
    </div>
  );
};

export default OurTeam;
