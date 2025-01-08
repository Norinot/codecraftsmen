import { ReactNode, FC } from "react";
import styles from "./typography.module.scss";
import { ThemeVariant, ThemeVariantMap } from "./typography.types";

interface TypographyProps<T extends keyof ThemeVariantMap> {
  children: ReactNode;
  className?: string;
  theme: T; 
  variant: ThemeVariant<T>;
}

const Typography = <T extends keyof ThemeVariantMap>({
  children,
  className,
  theme,
  variant,
}: TypographyProps<T>) => {
  const combinedClassName = `${styles[theme]} ${styles[variant]} ${
    className || ""
  }`.trim();

  return <p className={combinedClassName}>{children}</p>;
};

export default Typography;
