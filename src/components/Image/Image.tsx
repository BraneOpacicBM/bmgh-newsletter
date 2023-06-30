import { FC, useState } from 'react'
import Loader from '../Loader/Loader';
import styles from './Image.module.scss';

type ImageProps = {
  src: string;
  height?: string;
  width?: string;
  alt?: string;
}

const Image: FC<ImageProps> = ({ src, height = '100%', width = '100%', alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div style={{
      height,
      width,
    }}
      className={styles.wrapper}
    >
      {!isLoaded && (
        <span>
          <Loader />
        </span>
      )}
      {
        <img src={src} alt={alt ?? 'image-with-loader'} onLoad={() => {
          setIsLoaded(true)
        }}
          className={isLoaded ? styles.visible : styles.hidden}
        />
      }
    </div >
  )
}

export default Image