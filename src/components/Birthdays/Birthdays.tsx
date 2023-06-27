import { FC } from 'react'
import styles from './Birthdays.module.scss'
import { Employee } from './types'

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
            <img src={employee.imgUrl ?? 'https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif'} alt='profile' />
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