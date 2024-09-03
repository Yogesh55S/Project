import styles from './Text.module.css';
import 'animate.css';

const Texts = () => {
  return (<>
   <div className={styles.text}>
      <p className={styles.p1}>KNOWLEDGE IS JUST LIKE A GARDERN;</p>
      <p className={styles.p2}>IF IT IS NOT CULTIVATED </p>
      <p className={styles.p3}>IT CANNOT BE HARVESTED</p>
    </div>
  </>
  );
};

export default Texts;