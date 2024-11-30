import styles from "./Navbar.module.css";  
const Navbar = () =>{
    return (
        <>
         <div className={styles.place}>
          <button type="button" className={styles.placed}>Placed Order</button>
        </div>

        </>
    )
}
export default Navbar;