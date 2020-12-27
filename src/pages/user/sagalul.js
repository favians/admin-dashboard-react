import Sagalul from 'components/user/SagaLul';
import styles from 'resources/styles/Home.module.css';

export default function SagaLulUser() {
  return (
    <div className={styles.container}>
      <Sagalul title="sagalul page only" color="yellow" />
    </div>
  );
}
