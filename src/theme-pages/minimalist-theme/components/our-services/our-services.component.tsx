import { useEffect, useState } from "react";
import styles from "./our-services.module.scss";
import Typography from "../../../../components/typography/typography.component";
import useWindowSize from "../../../../hooks/windowSize.hook";
import Accordion from "./components/accordion/accordion.component";

export interface IServiceOption {
  title: string;
  description: string;
}

export interface IOurServices {
  key: string;
  mobileImgUrl: string;
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
    mobileImgUrl: "./Minimalist/mobile/expandedImage1_mobile.svg",
    imgurl: "./Minimalist/desktop/expandedImage1.svg",
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
    mobileImgUrl: "./Minimalist/mobile/expandedImage2_mobile.svg",
    imgurl: "./Minimalist/desktop/expandedImage2.svg",
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
    mobileImgUrl: "./Minimalist/mobile/expandedImage3_mobile.svg",
    imgurl: "./Minimalist/desktop/expandedImage3.svg",
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
    mobileImgUrl: "./Minimalist/mobile/expandedImage4_mobile.svg",
    imgurl: "./Minimalist/desktop/expandedImage4.svg",
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
  const windowWidth = useWindowSize();
  const isMobile = windowWidth <= 828;

  const [serviceOption, setServiceOption] = useState<string>("");
  const [serviceData, setServiceData] = useState<IOurServices | undefined>();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleClick = (option: string) => {
    if (option === serviceOption) {
      setServiceOption("");
      setServiceData(undefined);
    } else {
      const service = ourServices.find((service) => service.key === option);

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

  const handleToggle = (key: string) => {
    setActiveKey(activeKey === key ? null : key);
    const service = ourServices.find((service) => service.key === key);

    setServiceData(activeKey === key ? undefined : service);
  };

  return (
    <div className={styles.root}>
      <h1>Our Services</h1>
      <div className={styles.container}>
        <div>
          <div className={styles.servicesContainer}>
            {!isMobile &&
              ourServices.map((service) => (
                <div onClick={() => handleClick(service.key)} key={service.key}>
                  <Typography
                    theme="Minimalist"
                    variant={isMobile ? "body-large" : "heading-3"}
                    className={`${styles.titleText} ${
                      serviceData?.key === service.key ? styles.activeText : ""
                    }`}
                  >
                    {service.title}
                  </Typography>
                </div>
              ))}

            {isMobile && (
              <div className={styles.container}>
                {ourServices.map((service) => (
                  <Accordion
                    key={service.key}
                    title={service.title}
                    content={service.service}
                    isOpen={activeKey === service.key}
                    onToggle={() => handleToggle(service.key)}
                  />
                ))}
              </div>
            )}
          </div>
          {!isMobile && (
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
          )}
        </div>
        <div
          className={`${styles.imageContainer} ${
            serviceData?.imgurl ? styles.activeImage : ""
          }`}
        >
          <img
            src={
              isMobile
                ? serviceData?.mobileImgUrl ??
                  "./Minimalist/mobile/ourServicesBase_mobile.svg"
                : serviceData?.imgurl ??
                  "./Minimalist/desktop/ourServicesBase.svg"
            }
            alt=""
            className={`${styles.baseImage} ${
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
