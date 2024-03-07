import { FC, ReactNode } from "react";
import styles from "./HeroImage.module.scss";

type HeroImageProps = {
  bgColor?: "blue" | "white" | "black";
  title: string;
  children: ReactNode;
};

const HeroImage: FC<HeroImageProps> = ({
  title,
  bgColor = "blue",
  children,
}) => {
  return (
    <div className={styles[`wrapper_${bgColor}`]}>
      <div className={styles.company_name}>
        <h2>{title}</h2>
      </div>
      <div className={styles.main_section}>{children}</div>
    </div>
  );
};

export default HeroImage;
