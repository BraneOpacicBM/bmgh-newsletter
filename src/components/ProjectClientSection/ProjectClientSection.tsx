import { FC } from "react";
import styles from "./ProjectClientSection.module.scss";
import { Paragraph } from "../../common/types";

type ProjectClientSectionProps = {
  leftParagraphs: Paragraph[]
  rightParagraphs: Paragraph[]
};

const ProjectClientSection: FC<ProjectClientSectionProps> = ({ leftParagraphs, rightParagraphs }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Project / Client Update</h2>
        <h2> &#9994; &#9994;</h2>
      </div>
      <div className={styles.text_section}>
        <div className={styles.paragraph}>
          {leftParagraphs?.map((paragraph) => (
            <p>
              {paragraph.title && <span>{paragraph.title}</span>}
              {paragraph.description}
            </p>
          ))}
        </div>
        <div className={styles.paragraph}>
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
}

export default ProjectClientSection