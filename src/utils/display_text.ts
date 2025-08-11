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
export const ourServices: IOurServices[] =
  [
    {
      mobileImgUrl:
        "./Minimalist/mobile/Image1_mobile.svg",
      imgurl: "./Minimalist/Image1.svg",
      key: "maintenance",
      title:
        "Website Maintenance & Support",
      service: [
        {
          title:
            "Frontend Development1",
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
          description:
            "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
        },
      ],
    },
    {
      mobileImgUrl:
        "./Minimalist/mobile/Image2_mobile.svg",
      imgurl: "./Minimalist/Image2.svg",
      key: "fullstack",
      title: "Full Stack solutions",
      service: [
        {
          title:
            "Frontend Development2",
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
          description:
            "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
        },
      ],
    },
    {
      mobileImgUrl:
        "./Minimalist/mobile/Image3_mobile.svg",
      imgurl: "./Minimalist/Image3.svg",
      key: "design",
      title:
        "Web design & User Experience",
      service: [
        {
          title:
            "Frontend Development3",
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
          description:
            "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
        },
      ],
    },
    {
      mobileImgUrl:
        "./Minimalist/mobile/Image4_mobile.svg",
      imgurl: "./Minimalist/Image4.svg",
      key: "custom",
      title: "Custom web development",
      service: [
        {
          title:
            "Frontend Development4",
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
          description:
            "Java, .Net, Golang, Angular, React, MySQL, PostgreSQL",
        },
      ],
    },
  ];
