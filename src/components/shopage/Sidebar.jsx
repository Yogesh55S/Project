import styles from './Sidebar.module.css'; 
import { Link } from 'react-router-dom';
import { GiWheat,GiCorn,GiSugarCane, GiFruitBowl } from "react-icons/gi";
import { CiWheat } from "react-icons/ci";
import { LuVegan } from "react-icons/lu";
import { FaSeedling,FaUserDoctor } from "react-icons/fa6";
const sidebars = ({onCategoryClick }) => {
  return (
    <div className={styles.sidebars}>
      <h2 className={styles.h}>Sidebar</h2>
      <ul className={styles.sid}>
      <li className={styles.sides} onClick={()=> onCategoryClick('farming')}>Home</li>
        <li className={styles.sides} onClick={()=> onCategoryClick('wheat')}><GiWheat/>Wheat</li>
        <li className={styles.sides} onClick={()=> onCategoryClick('Corn')}><GiCorn/>Corn</li>
        <li className={styles.sides}><Link to=""><CiWheat/>Rice</Link></li>
        <li className={styles.sides}><Link to=""><GiSugarCane/>Sugarcan</Link></li>
        <li className={styles.sides}><Link to=""><GiFruitBowl/>Fruits</Link></li>
        <li className={styles.sides}><Link to=""><LuVegan/>Vegetables</Link></li>
        <li className={styles.sides}><Link to=""><FaSeedling/>Seeds</Link></li>
        <li className={styles.sides}><Link to=""><FaUserDoctor/>Doctor Recommendation</Link></li>

      </ul>
    </div>
  );
};

export default sidebars;