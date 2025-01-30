import { ReactNode, MouseEventHandler } from "react";
import styles from "./typography.module.scss";
import { ThemeVariant, ThemeVariantMap } from "./typography.types";

interface TypographyProps<T extends keyof ThemeVariantMap> {
  children: ReactNode;
  className?: string;
  theme: T;
  variant: ThemeVariant<T>;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
}

const Typography = <T extends keyof ThemeVariantMap>({
  children,
  className,
  theme,
  variant,
  onClick,
}: TypographyProps<T>) => {
  const combinedClassName = `${styles[theme]} ${styles[variant]} ${
    className || ""
  }`.trim();

  return (
    <p className={combinedClassName} onClick={onClick}>
      {children}
    </p>
  );
};

export default Typography;
