import { FC } from 'react'
import styles from './Colleagues.module.scss'
import { Colleague } from './types'
import { DEFAULT_PROFILE_IMG } from '../../common/constants'

export type ColleaguesProps = {
  colleagues?: Array<Colleague>
}
const Colleagues: FC<ColleaguesProps> = ({
  colleagues = []
}) => (
  <div className={styles.wrapper}>
    <p>Last But Not Least</p>
    <h2>Let's Praise Our Colleagues 🙌</h2>
    <div className={styles.colleagues_list}>
      {
        colleagues?.map((colleague) => (
          <div key={colleague.fullName}>
            <img src={colleague.imgUrl ?? DEFAULT_PROFILE_IMG} alt='profile' />
            <div>
              <p className={styles.title}>{colleague.fullName}</p>
              <p className={styles.job_title}>{colleague.jobTitle}</p>
              <p className={styles.description}>{colleague.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div >
)

export default Colleagues