import TextFields from 'components/textField/textField';
import styles from 'resources/styles/Home.module.css';

export default function KelpoUser() {
  return (
    <div className={styles.container}>
      <TextFields label="username" />
      <TextFields label="password" />
    </div>
  );
}
