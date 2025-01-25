import { useEffect, useState } from "react";
import styles from "./our-services.module.scss";
import Typography from "../../../../components/typography/typography.component";

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

const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

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

  useEffect(() => {
    const imageUrls: string[] = ourServices.map(
      (serviceOption) => serviceOption.imgurl
    );
    preloadImages(imageUrls);
  }, []);

  return (
    <div className={styles.root}>
      <h1>Our Services</h1>
      <div className={styles.container}>
        <div>
          <div className={styles.servicesContainer}>
            {ourServices.map((service) => (
              <div onClick={() => handleClick(service.key)} key={service.key}>
                <Typography
                  theme="Minimalist"
                  variant="heading-3"
                  className={
                    serviceData?.key === service.key ? styles.activeText : ""
                  }
                >
                  {service.title}
                </Typography>
              </div>
            ))}
          </div>
          <div
            className={`${styles.titleDescription} ${
              serviceData ? styles.active : styles.hidden
            }`}
          >
            {serviceData?.service.map((service) => (
              <div key={service.title}>
                <Typography
                  theme="Minimalist"
                  variant="body-large"
                  className={styles.decoratedTitle}
                >
                  {service.title}
                </Typography>
                <Typography theme="Minimalist" variant="body-medium">
                  {service.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={serviceData?.imgurl ?? "./ourServicesBase.svg"}
            alt=""
            className={`${
              serviceData?.imgurl ? styles.swappedImg : styles.defaultImg
            }`}
          />
        </div>
      </div>
      <button className={styles.contactUsButton}>Contact Us</button>
    </div>
  );
};

export default OurServices;
