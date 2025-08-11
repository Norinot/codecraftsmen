import { useState } from "react";
import styles from "./our-services.module.scss";
import Typography from "../../../../components/typography/typography.component";

interface IService {
  title: string;
  description: string;
  icon: string;
}

interface IOurService {
  key: string;
  title: string;
  services: IService[];
}

const ourServices: IOurService[] = [
  {
    key: "maintenance",
    title: "Website Maintenance & Support",
    services: [
      {
        title: "Ensure Website Security",
        description:
          "Ensure your website stays secure, up-to-date, and running smoothly with our reliable maintenance and support.",
        icon: "E",
      },
    ],
  },
  {
    key: "fullstack",
    title: "Full Stack Solutions",
    services: [
      {
        title: "End-to-End Development",
        description:
          "Solutions covering both frontend and backend to build robust, scalable web applications.",
        icon: "E",
      },
    ],
  },
  {
    key: "design",
    title: "Web Development & User Experience",
    services: [
      {
        title: "Engaging Websites",
        description:
          "Develop engaging websites with a focus on smooth user experiences and optimized performance.",
        icon: "D",
      },
    ],
  },
  {
    key: "custom",
    title: "Custom Web Development",
    services: [
      {
        title: "Tailored Solutions",
        description:
          "Custom web solutions designed to meet your unique business goals and requirements.",
        icon: "C",
      },
    ],
  },
];

const OurServices = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleClick = (key: string) => {
    setActiveKey(key === activeKey ? null : key);
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        <Typography theme="Brutalist" variant="display-medium">
          Check Out Our Services
        </Typography>
      </h1>
      <div className={styles.grid}>
        {ourServices.map((service) => (
          <div
            key={service.key}
            className={`${styles.card} ${
              activeKey === service.key ? styles.active : ""
            }`}
            onClick={() => handleClick(service.key)}
          >
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{service.services[0].icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
            <p className={styles.cardDescription}>
              {service.services[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
