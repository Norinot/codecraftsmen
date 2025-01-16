import { useState } from "react";
import styles from "./our-team.module.scss";
import Typography from "../../../../components/theme-selector/typography/typography.component";

interface IOurTeam {
  imgUrl: string;
  name: string;
  title: string;
  motto: string;
}

const ourTeam: IOurTeam[] = [
  {
    imgUrl: "./ProfilePic.svg",
    name: "Bence",
    title: "CEO & Founder, Full stack Developer",
    motto: "My Motto: “From Concept to Code, Driving Innovation Forward”",
  },
  {
    imgUrl: "./ProfilePic.svg",
    name: "Dani",
    title: "CO-Founder & Full stack Developer",
    motto: "My Motto: “From Concept to Code, Driving Innovation Forward”",
  },
  {
    imgUrl: "./ProfilePic.svg",
    name: "Eszter",
    title: "Lead UX/UI Designer",
    motto: "My Motto: “From Concept to Code, Driving Innovation Forward”",
  },
  {
    imgUrl: "./ProfilePic.svg",
    name: "Dóra",
    title: "Senior UX/UI Designer",
    motto: "My Motto: “From Concept to Code, Driving Innovation Forward”",
  },
];

const OurTeam = () => {
  const [openMembers, setOpenMembers] = useState<string[]>([]);

  const toggleMemberDetails = (memberName: string) => {
    setOpenMembers((prev) =>
      prev.includes(memberName)
        ? prev.filter((name) => name !== memberName)
        : [...prev, memberName]
    );
  };

  return (
    <div className={styles.root}>
      <Typography
        variant="display-medium"
        theme="Minimalist"
        className={styles.title}
      >
        Our Team
      </Typography>
      <div>
        <Typography variant="heading-3" theme="Minimalist">
          Who are we?
        </Typography>
        <Typography variant="body-large" theme="Minimalist">
          A passionate team who create/recreate your website from 0 to 100. We
          are dedicated to transforming your vision into reality with creativity
          and professionalism.
        </Typography>
      </div>
      <div className={styles.memberWrapper}>
        {ourTeam.map((member) => {
          const isOpen = openMembers.includes(member.name);

          return (
            <div key={member.name} className={styles.memberItem}>
              <img
                src={member.imgUrl}
                alt=""
                className={`${styles.defaultImg} ${
                  isOpen ? styles.openImg : ""
                }`}
                onClick={() => toggleMemberDetails(member.name)}
              />
              <div
                className={`${styles.memberDetails} ${
                  isOpen ? styles.visible : ""
                }`}
              >
                <div>
                  <Typography theme="Minimalist" variant="heading-1">
                    {member.name}
                  </Typography>
                  <Typography theme="Minimalist" variant="body-large">
                    {member.title}
                  </Typography>
                </div>
                <Typography theme="Minimalist" variant="body-small">
                  {member.motto}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
