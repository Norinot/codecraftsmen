import styles from "./Contact.module.scss";

interface StyleProps {
  anchor?: "top" | "bottom";
}

const ContactComponent = ({ anchor }: StyleProps) => {
  return (
    <div>
      <h1 className={`${styles.default} ${anchor ?  styles[anchor] : ''}`}>
        Lets begin our journey together
      </h1>
      <div className={styles.animationWrapper}>
        <div>Animáció</div>
        <div className={styles.formContainer}>
          <form action="">
            <span>
              Ready to collaborate or become our client? Lets bring your vision
              to life together. Reach out to us, and lets
              <strong>create something exceptional.</strong>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
