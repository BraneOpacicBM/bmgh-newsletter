import { FC } from "react";
import styles from "./Header.module.scss";
import { Paragraph } from "../../common/types";

type HeaderProps = {
  title: string;
  leftParagraphs: Paragraph[]
  rightParagraphs: Paragraph[]
};

const Header: FC<HeaderProps> = ({
  title,
  leftParagraphs = [],
  rightParagraphs = [],
}) => (
  <div className={styles.header}>
    <div>
      <h2>BMGH</h2>
      <p>Company Newsletter</p>
    </div>
    <div className={styles.header_text}>
      <div>
        <h1>{title}</h1>
        <div className={styles.header_paragraph}>
          {leftParagraphs?.map((paragraph) => (
            <p>
              {paragraph.title && <span>{paragraph.title}</span>}
              {paragraph.description}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.header_paragraph}>
        {rightParagraphs?.map((paragraph) => (
          <p>
            {paragraph.title && <span>{paragraph.title}</span>}
            {paragraph.description}
          </p>
        ))}
      </div>
    </div>
  </div>
)

export default Header