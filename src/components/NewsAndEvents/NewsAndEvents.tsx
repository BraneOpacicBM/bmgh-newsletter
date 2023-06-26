import styles from './NewsAndEvents.module.scss'

const NewsAndEvents = () => {
  return (
    <div className={styles.wrapper}>
      <h2>News and Events &#128227;</h2>
      <div className={styles.news_list}>
        <div>
          <img src='https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png' alt='news' />
          <div>
            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
              {' '}  <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
            </p>
          </div>
        </div>
        <div>
          <img src='https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png' alt='news' />
          <div>
            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
              {' '} <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
            </p>
          </div>
        </div>
        <div>
          <img src='https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png' alt='news' />
          <div>
            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
              {' '}  <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
            </p>
          </div>
        </div>
        <div>
          <img src='https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png' alt='news' />
          <div>
            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
              {' '} <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsAndEvents