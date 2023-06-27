import { FC } from 'react';
import styles from './ThreeColorDivider.module.scss';

export type ThreeColorDividerProps = {
  hideWhite?: boolean
}

const ThreeColorDivider: FC<ThreeColorDividerProps> = ({
  hideWhite = false,
}) => (
  <div className={hideWhite ? styles.wrapper_one : styles.wrapper_three}>
    <div />
    <div />
    <div />
  </div>
)

export default ThreeColorDivider