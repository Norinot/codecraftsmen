import { useState } from "react";
import styles from "./our-team.module.scss";
import Typography from "../../../../components/typography/typography.component";

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
        theme="Brutalist"
        className={styles.title}
      >
        Our Team
      </Typography>
      <div>
        <Typography variant="headline" theme="Brutalist">
          Who are we?
        </Typography>
        <Typography variant="body-large" theme="Brutalist">
          A passionate team who create/recreate your website from 0 to 100. We
          are dedicated to transforming your vision into reality with creativity
          and professionalism.
        </Typography>
      </div>
      <div className={styles.memberGrid}>
        <div className={styles.memberWrapper}>
          {ourTeam.map((member) => {
            const isOpen = openMembers.includes(member.name);

            return (
              <div key={member.name} className={styles.memberItem}>
                <div>
                  <Typography theme="Brutalist" variant="headline">
                    {member.name}
                  </Typography>
                </div>
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
                    <Typography theme="Brutalist" variant="body-large">
                      {member.title}
                    </Typography>
                  </div>
                  <Typography theme="Brutalist" variant="body-regular">
                    {member.motto}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
