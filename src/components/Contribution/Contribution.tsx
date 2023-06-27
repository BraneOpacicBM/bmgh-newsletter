import { FC } from 'react'
import styles from './Contribution.module.scss'
import { COMPANIES, CONTRIBUTION_PLATFORMS_MAPPER } from './constants'
import { Platform } from './types'

const Contributions: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Contribute to Our Online Story ✍️</h2>
      <div className={styles.platforms_list}>
        {COMPANIES.map((company) => {
          const companyPlatforms = CONTRIBUTION_PLATFORMS_MAPPER[company];
          const platforms = Object.keys(companyPlatforms);

          return (
            <div className={styles.platform}>
              <p>
                {company}
              </p>
              {
                platforms.map((platform, i) => (
                  <a
                    target='_blank'
                    href={companyPlatforms[platform as Platform]}
                    className={i % 2 === 0 ? styles.chip_blue : styles.chip_white}
                    rel="noreferrer"
                  >
                    {platform}
                  </a>
                ))
              }
            </div>
          )
        })}
      </div>
      <div>
        <p>Help us shine brighter by sharing your invaluable experiences at our company! ✨</p>
      </div>
    </div>
  )
}

export default Contributions