import Kelpo from 'components/user/kelpo';
import styles from 'resources/styles/Home.module.css';
import Image from 'next/image';

export default function KelpoUser() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/bayi-gondrong.jpg"
        alt="Picture of the author"
      />
      <Kelpo title="kelpo page only" color="red" />
    </div>
  );
}
