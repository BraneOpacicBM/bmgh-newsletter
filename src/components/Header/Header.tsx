import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h2>BMGH</h2>
        <p>Company Newsletter</p>
      </div>
      <div className={styles.header_text}>
        <div>
          <h1>May Finance & Project Update</h1>
          <div className={styles.header_paragraph}>
            <p>
              <span>Bench Strength: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
            </p>
            <p>
              <span>Cash Flow: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
            </p>
          </div>
        </div>
        <div className={styles.header_paragraph}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.</p>
          <p>
            <span>Profit: </span>
            Acumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
            dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header