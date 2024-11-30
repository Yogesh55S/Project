import styles from './header.module.css';
import Example from './Sidebar';
import { GiTreeBranch } from "react-icons/gi";
//import Texts from './Text';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GiWolfHead } from "react-icons/gi";
//import { Link } from 'react-router-dom';

const click = ()=>{
  console.log("Yes Working");
} 
const header = () => {
  return (<>
      <ul className={styles.nav}>
        <li className={styles.name}><GiWolfHead id={styles.icon}/>Alpha Nature</li>
      <li className={styles.list} key="tree"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> <GiTreeBranch /></Link></li>
      <li className={styles.list} key="home"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> Home</Link></li>
        <li className={styles.list} key="contact">Contact</li>
        <li className={styles.list} key="shopping"><Link to="/market" style={{ textDecoration: 'none', color: 'inherit' }}>Market</Link> </li>
        <li className={styles.list} key="about">About</li>
        <li className={styles.list2} key="login" onClick={click} ><Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}> Login/Register</Link></li>
        <li key="menu" className={styles.menu}><Example/></li>
      </ul> <Outlet/>
      
    </>
  );
};

export default header;