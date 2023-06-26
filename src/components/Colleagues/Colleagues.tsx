import { FC } from 'react'
import styles from './Colleagues.module.scss'
import { Colleague } from './types'

export type ColleaguesProps = {
  colleagues?: Array<Colleague>
}
const Colleagues: FC<ColleaguesProps> = ({
  colleagues = []
}) => {
  return (
    <div className={styles.wrapper}>
      <p>Last But Not Least</p>
      <h2>Let's Praise Our Colleagues 🙌</h2>
      <div className={styles.colleagues_list}>
        {
          colleagues?.map((colleague) => (
            <div>
              <img src={colleague.imgUrl || 'https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif'} alt='profile' />
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
}

export default Colleagues