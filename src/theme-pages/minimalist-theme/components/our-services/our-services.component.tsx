import { useState } from "react";
import styles from "./our-services.module.scss";
import React from "react";

interface IServiceOption {
  title: string;
  description: string;
}

interface IOurServices {
  key: string;
  imgurl: string;
  title: string;
  service: IServiceOption[];
}

const ourServices: IOurServices[] = [
  {
    imgurl: "./expandedImage1.svg",
    key: "maintenance",
    title: "Website Maintenance & Support",
    service: [
      {
        title: "Frontend Development1",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Backend Development",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Technologies",
        description: "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
      },
    ],
  },
  {
    imgurl: "./expandedImage2.svg",
    key: "fullstack",
    title: "Full Stack solutions",
    service: [
      {
        title: "Frontend Development2",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Backend Development",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Technologies",
        description: "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
      },
    ],
  },
  {
    imgurl: "./expandedImage3.svg",
    key: "design",
    title: "Web design & User Experience",
    service: [
      {
        title: "Frontend Development3",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Backend Development",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Technologies",
        description: "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
      },
    ],
  },
  {
    imgurl: "./expandedImage4.svg",
    key: "custom",
    title: "Custom web development",
    service: [
      {
        title: "Frontend Development4",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Backend Development",
        description:
          "Bringing your designs to life with pixel-perfect precision, our frontend $Team creates responsive and interactive user interfaces that deliver a flawless experience across all devices.",
      },
      {
        title: "Technologies",
        description: "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
      },
    ],
  },
];

const OurServices = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [serviceOption, setServiceOption] = useState<string>("");
  const [serviceData, setServiceData] = useState<IOurServices | undefined>();

  const handleClick = (option: string) => {
    if (option === serviceOption) {
      setOpen(false);
      setServiceOption("");
      setServiceData(undefined);
    } else {
      const service = ourServices.find((service) => service.key === option);

      setOpen(true);
      setServiceOption(option);
      setServiceData(service);
    }
  };

  return (
    <div className={styles.root}>
      <h1>Our Services</h1>
      <div className={styles.listWrapper}>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceButtonWrapper}>
            <ul className={styles.groupWrapper}>
              {ourServices.map((service) => (
                <li
                  key={service.key}
                  onClick={() => handleClick(service.key)}
                  className={`${styles.liStyles}
                ${serviceOption === service.key ? styles.active : ""}
                `}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className={`${styles.serviceWebMaintenanceWrapper} ${
                open ? styles.open : ""
              }`}
            >
              {serviceData?.service?.map((service) => (
                <React.Fragment key={service.title}>
                  <li>{service.title}</li>
                  <span>{service.description}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <img
          className={open ? styles.expandedImage : styles.servicesBaseImage}
          src={serviceData?.imgurl || "./ourServicesBase.svg"}
          alt=""
        />
      </div>
      <button className={styles.contactUsButton}>Contact Us</button>
    </div>
  );
};

export default OurServices;
