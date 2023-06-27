import { FC } from 'react'
import styles from './Birthdays.module.scss'
import { Employee } from './types'
import { DEFAULT_PROFILE_IMG } from '../../common/constants'

type BirthdaysProps = {
  employees: Array<Employee>
}

const Birthdays: FC<BirthdaysProps> = ({ employees }) => {
  return (
    <div className={styles.wrapper}>
      <h2>🎉 🍰 🎁</h2>
      <h2>Happy Birthday to You All</h2>

      <div className={styles.employees_list}>
        {employees?.map((employee) => (
          <div className={styles.employee} key={employee.name}>
            <img src={employee.imgUrl ?? DEFAULT_PROFILE_IMG} alt='profile' />
            <div>
              <p>{employee.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Birthdays