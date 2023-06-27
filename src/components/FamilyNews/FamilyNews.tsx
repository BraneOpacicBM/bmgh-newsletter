import { FC } from 'react'
import styles from './FamilyNews.module.scss'

const FamilyNews: FC = () => (
  <div className={styles.wrapper}>
    <p>And</p>
    <h2>Wedding Bells Ring at Brightly ❤️</h2>
    <div className={styles.news_list}>
      <div>
        <img src='https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='news' />
        <div>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
            Congratulations to <span> John Doe</span>
          </p>
        </div>
      </div>
      <div>
        <img src='https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='news' />
        <div>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
            Congratulations to <span> John Doe</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default FamilyNews