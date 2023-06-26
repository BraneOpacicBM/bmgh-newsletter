import { FC, ReactNode } from 'react';
import styles from './QuickUpdate.module.scss'
import { Company } from '../../common/enums';
import { SOCIAL_MEDIA_LINKS } from './constants';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../icons';

type QuickUpdateProps = {
  bgColor?: 'blue' | 'white' | 'black';
  company: Company;
  title: string;
  description: string | ReactNode;
}

const QuickUpdate: FC<QuickUpdateProps> = ({
  company,
  title,
  description,
  bgColor = 'blue',
}) => {
  const socialMediaLink = SOCIAL_MEDIA_LINKS[company]

  return (
    <div className={styles[`wrapper_${bgColor}`]}>
      <h4>&#128161;</h4>
      <h4>Quick Update</h4>
      <div className={styles.company_name}>
        <h2>{company}</h2>
      </div>
      <div className={styles.main_section}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.social_media}>
        <div>
          <a rel="noreferrer" target='_blank' href={socialMediaLink.youtube}><YoutubeIcon /></a>
          <a rel="noreferrer" target='_blank' href={socialMediaLink.twitter}><TwitterIcon /></a>
          <a rel="noreferrer" target='_blank' href={socialMediaLink.linkedin}><LinkedinIcon /></a>
          <a rel="noreferrer" target='_blank' href={socialMediaLink.instagram}><InstagramIcon /></a>
          <a rel="noreferrer" target='_blank' href={socialMediaLink.facebook}><FacebookIcon /></a>
        </div>
        <div>
          <p>Feel free to support out efforts on Social Media</p>
        </div>
        <div>
          <p>&#128153;</p>
        </div>
      </div>
    </div>
  )
}

export default QuickUpdate