import { FC } from 'react'
import styles from './FamilyNews.module.scss'
import { Paragraph } from '../../common/types'

export type FamilyNewsProps = {
  title: string;
  data: Paragraph[]
}

const FamilyNews: FC<FamilyNewsProps> = ({ data, title }) => (
  <div className={styles.wrapper}>
    <p>And</p>
    <h2>{title}</h2>
    <div className={styles.news_list}>
      {data.map((post) => (
        <div>
          <img src={post.img} alt='news' />
          <div>
            <p className={styles.description}>
              {post.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default FamilyNews