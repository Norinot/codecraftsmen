import { useState } from "react";
import styles from "./our-services.module.scss";
import Typography from "../typography/typography.component";

type ServiceOption = "maintenance" | "webdesign" | "fullstack" | "customWeb";

type ServiceContents = Record<ServiceOption, JSX.Element>;

const OurServices = () => {
  const [serviceOption, setServiceOption] = useState<ServiceOption | null>(
    null
  );
  const handleClick = (option: ServiceOption) => {
    if (option === serviceOption) {
      setServiceOption(null);
    } else {
      setServiceOption(option);
    }
  };

  const serviceOptionWebMaintenance = (
    <div className={styles.serviceWebMaintenanceWrapper}>
      <li>Frontend Development | Maintenance</li>
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

  const serviceOptionWebDesign = (
    <div className={styles.serviceWebMaintenanceWrapper}>
      <li>Frontend Development | WebDesign </li>
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
  const serviceOptionFullStack = (
    <div className={styles.serviceWebMaintenanceWrapper}>
      <li>Frontend Development | FullStack</li>
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
  const serviceOptionCustomWeb = (
    <div className={styles.serviceWebMaintenanceWrapper}>
      <li>Frontend Development | CustomWeb</li>
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

  const serviceContents: ServiceContents = {
    maintenance: serviceOptionWebMaintenance,
    webdesign: serviceOptionWebDesign,
    fullstack: serviceOptionFullStack,
    customWeb: serviceOptionCustomWeb,
  };

  const serviceImages: Record<ServiceOption | "default", string> = {
    maintenance: "./ourServices_maintenance.svg",
    webdesign: "./ourServices_design.svg",
    fullstack: "./ourServices_fullStack.svg",
    customWeb: "./ourServices_customWeb.svg",
    default: "./ourServices_base.svg",
  };

  return (
    <div className={styles.root}>
      <Typography theme="Minimalist" variant="display-medium">
        Our Services
      </Typography>
      <div className={styles.container}>
        <div className={styles.serviceOptions}>
          <div className={styles.grid}>
            <span
              onClick={() => handleClick("maintenance")}
              className={`${
                serviceOption === "maintenance" ? styles.active : ""
              }`}
            >
              Website Maintenance & Support
            </span>
            <span
              onClick={() => handleClick("webdesign")}
              className={`${
                serviceOption === "webdesign" ? styles.active : ""
              }`}
            >
              Web design & User Experience
            </span>
            <span
              onClick={() => handleClick("fullstack")}
              className={`${
                serviceOption === "fullstack" ? styles.active : ""
              }`}
            >
              Full Stack solutions
            </span>
            <span
              onClick={() => handleClick("customWeb")}
              className={`${
                serviceOption === "customWeb" ? styles.active : ""
              }`}
            >
              Custom web development
            </span>
          </div>
          {serviceOption ? serviceContents[serviceOption] : null}
        </div>
        <div>
          <img
            src={
              serviceOption
                ? serviceImages[serviceOption]
                : serviceImages.default
            }
            alt=""
          />
        </div>
      </div>
      <button className={styles.contactUsButton}>Contact Us</button>
    </div>
  );
};

export default OurServices;
