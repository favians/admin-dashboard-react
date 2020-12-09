import styles from 'resources/styles/Home.module.css'

export default function JustCallDotENv() {
  console.log(process.env.REACT_APP_NAME)
  return (
    <div className={styles.container}>
      <h1>try to open your console, and you will see all the ENV that has been set before.</h1>
    </div>
  )
}
