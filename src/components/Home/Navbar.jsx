import styles from './index.module.css';
import Example from './Offcanvas';
import { GiTreeBranch } from "react-icons/gi";
import Texts from './Text';


const Navbar = () => {
  return (<>
    <div className={styles.image}>
      <ul className={styles.nav}>
        <li key="tree" className={styles.tree}> <GiTreeBranch /></li>
        <li key="home">Home</li>
        <li key="contact">Contact</li>
        <li key="shopping">Shopping</li>
        <li key="about">About</li>
        <li key="login">Login/Register</li>
        <li key="menu" className={styles.menu}><Example/></li>
      </ul>
      <Texts/>
    </div>
   
    </>
  );
};

export default Navbar;