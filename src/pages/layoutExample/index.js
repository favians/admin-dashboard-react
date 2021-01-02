import styles from 'resources/styles/Home.module.css';
import Menu from 'layout/Menu';

const LayoutExample = () => (
  <div className={styles.container}>
    <h1>We are using anther layout, than default layout</h1>
  </div>
);

LayoutExample.Layout = Menu;

export default LayoutExample;
