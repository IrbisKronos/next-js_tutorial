import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Example</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur. All rights reserved.
      </div>
    </div>
  )
}

export default Footer