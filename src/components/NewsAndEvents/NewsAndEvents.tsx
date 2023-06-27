import { FC } from 'react'
import styles from './NewsAndEvents.module.scss'
import { Paragraph } from '../../common/types'

export type NewsAndEventsProps = {
  data: Paragraph[]
}

const NewsAndEvents: FC<NewsAndEventsProps> = ({
  data
}) => (
  <div className={styles.wrapper}>
    <h2>News and Events &#128227;</h2>
    <div className={styles.news_list}>
      {data.map((event) => (
        <div key={event.title}>
          <img src={event.img} alt='news' />
          <div>
            <p className={styles.title}>{event.title}</p>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default NewsAndEvents