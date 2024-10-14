import { useState } from "react";
import styles from "./our-services.module.scss";

const OurServices = () => {
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
      <h1>Our Services</h1>
      <div className={styles.servicesWrapper}>
        <div className={styles.listWrapper}>
          <ul>
            <li
              onClick={() => {
                handleClick("maintenance");
              }}
            >
              Website Maintenance & Support
            </li>
            <li
              onClick={() => {
                handleClick("fullstack");
              }}
            >
              Full Stack solutions
            </li>
          </ul>
          <ul>
            <li
              onClick={() => {
                handleClick("design");
              }}
            >
              Web design & User Experience
            </li>
            <li
              onClick={() => {
                handleClick("custom");
              }}
            >
              Custom web development
            </li>
          </ul>
          <div className={styles.separator}></div>
          <img
            className={styles.servicesBaseImage}
            src="./ourServices_base.svg"
            alt=""
          />
        </div>
        {open && <p>{serviceOption}</p>}
      </div>
      <button>Contact Us</button>
    </div>
  );
};

export default OurServices;
