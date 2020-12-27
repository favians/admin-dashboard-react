import Kelpo from 'components/user/kelpo';
import styles from 'resources/styles/Home.module.css';

export default function KelpoUser() {
  return (
    <div className={styles.container}>
      <Kelpo title="kelpo page only" color="red" />
    </div>
  );
}
