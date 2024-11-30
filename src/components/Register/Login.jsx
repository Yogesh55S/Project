//import { MdAgriculture } from "react-icons/md";
//import { CiShoppingTag } from "react-icons/ci";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Footer from "/src/components/Home/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
const Login = () =>{
  return (<> 
<div className={styles.text}>Choose Your Path</div>
 <div className={styles.container}>
  <div className={styles.image}>
 <div className={styles.farmer}></div>
 <p id={styles.name}>Farmer</p>
 <p id={styles.content}>A true farmer sees the future in each seed. Farming teaches patience; you cant hurry the harvest. <br /> The soil is the connector of all life.</p>
 <button  id={styles.button}><Link to="/farmers" className={styles.link}><FaArrowRightLong id={styles.icon1}/></Link></button>
 <div className={styles.store}></div>
  <p id={styles.name2}>Shopkeeper</p>
<p id={styles.content2}>A storekeeper doesnt just manage goods; they create experiences. <br /> Every interaction is a chance to build trust. Success lies in the dedication to serve with a smile.</p>
<button  id={styles.button2}><Link to="/shop"><FaArrowRightLong id={styles.icon}/></Link></button>
  </div>
</div>
<Footer/>
  </>)
}
export default Login;

/* <div className={styles.container}>
    <div className={styles.Login}>
  <MdAgriculture className={styles.logo} />
  <p>Login/Register as a Farmer</p>
    <Link to="/farmers"><input type="button" value="Farmer" className={styles.Farmer}/></Link>
    <CiShoppingTag className={styles.logo2}/>
    <p>Login/Register as a ShopKeeper</p>
    <Link to="/shop"><input type="button" value="Shopkeeper" className={styles.Shop} /></Link>
  </div>
  </div>
  
   <div className={styles.farmer}>
<p id={styles.name}>Farmer</p>
<p id={styles.content}>A true farmer sees the future in each seed. Farming teaches patience; you cant hurry the harvest. <br /> The soil is the connector of all life.</p>
  <button  id={styles.button}><FaArrowRightLong id={styles.icon}/></button>

  </div>
  <div className={styles.store}>
<p id={styles.name2}>Shopkeeper</p>
<p id={styles.content2}>A storekeeper doesnt just manage goods; they create experiences. Every interaction is a chance to build trust. Success lies in the dedication to serve with a smile.</p>
<button  id={styles.button2}><FaArrowRightLong id={styles.icon}/></button>
  </div>
  */
  