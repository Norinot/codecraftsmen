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

  const serviceOptionWebMaintenance = (
    <div className={styles.serviceWebMaintenanceWrapper}>
      <li>Frontend Development</li>
      <span>
        Bringing your designs to life with pixel-perfect precision, our frontend
        $Team creates responsive and interactive user interfaces that deliver a
        flawless experience across all devices.
      </span>
      <li>Backend Development</li>
      <span>
        Behind the scenes, our backend $Team build robust and scalable systems,
        ensuring your website performs efficiently with secure and reliable
        server-side functionality
      </span>
      <li>Technologies</li>
      <span>Java, .Net, Golang, Angular, React, MySQL, PostgreSQL</span>
    </div>
  );

  return (
    <div className={styles.root}>
      <h1>Our Services</h1>
      <div className={styles.servicesWrapper}>
        <div className={styles.listWrapper}>
          <div>
            <div className={styles.serviceButtonWrapper}>
              <ul className={styles.firstGroup}>
                <li
                  onClick={() => handleClick("maintenance")}
                  className={`${styles.liStyles}
                    ${serviceOption === "maintenance" ? styles.active : ""}
                    `}
                >
                  Website Maintenance & Support
                </li>
                <li
                  onClick={() => handleClick("fullstack")}
                  className={`${styles.breakLineMe} ${styles.liStyles} ${
                    serviceOption === "fullstack" ? styles.active : ""
                  }`}
                >
                  Full Stack solutions
                </li>
              </ul>
              <ul className={styles.secondGroup}>
                <li
                  onClick={() => handleClick("design")}
                  className={`${styles.liStyles} ${
                    serviceOption === "design" ? styles.active : ""
                  }`}
                >
                  Web design & User Experience
                </li>
                <li
                  onClick={() => handleClick("custom")}
                  className={`${styles.liStyles} ${
                    serviceOption === "custom" ? styles.active : ""
                  }`}
                >
                  Custom web development
                </li>
              </ul>
            </div>
            <div className={styles.separator}></div>
            {open && <div>{serviceOptionWebMaintenance}</div>}
          </div>

          {open ? (
            <img className={styles.expandedImage} src="./servicesButtonImg.png" alt="" />
          ) : (
            <img
              className={styles.servicesBaseImage}
              src="./ourServices_base.svg"
              alt=""
            />
          )}
        </div>
      </div>
      <button className={styles.contactUsButton}>Contact Us</button>
    </div>
  );
};

export default OurServices;
