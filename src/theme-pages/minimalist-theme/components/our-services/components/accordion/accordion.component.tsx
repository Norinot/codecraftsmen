import Typography from "../../../../../../components/typography/typography.component";
import styles from "./accordion.module.scss";
import { IServiceOption } from "../../our-services.component";

interface AccordionProps {
  title: string;
  content: IServiceOption[];
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion = ({ title, content, isOpen, onToggle }: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      <Typography
        theme="Minimalist"
        variant="heading-3"
        className={`${styles.titleText} ${isOpen ? styles.activeText : ""}`}
        onClick={onToggle}
      >
        {title}
      </Typography>
      <div className={`${styles.content} ${isOpen ? styles.active : ""}`}>
        <div className={styles.inner}>
          {content.map((item, index) => (
            <div key={index}>
              <Typography
                theme="Minimalist"
                variant="body-large"
                className={styles.decoratedTitle}
              >
                {item.title}
              </Typography>
              <Typography theme="Minimalist" variant="body-medium">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
