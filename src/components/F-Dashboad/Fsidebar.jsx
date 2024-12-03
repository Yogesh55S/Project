import styles from "./Fsidebar.module.css";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { IoMdPower } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import OffCanvas from "./Offcanvas";
import { Link } from "react-router-dom";

const Fsidebar = () =>{
  const menuItems = [
    { icon: FaHome, label: "Home", to: "/" },
    { icon: IoPerson, label: "Profile", to: "/profile" },
    { icon: LiaJediOrder, label: "Your Order", to: "" },
    { icon: RiCoupon2Fill, label: "Coupons", to: "" },
    { icon: IoMdPower, label: "About Us", to: "/about-us" },
    { icon: MdHelpOutline, label: "Need Help", to: "/help", className: "auto" },
  ];
  return (
    <>
    <div className={styles.sidebar2}>
      <div className={styles.logo2}>
        <span>DASH</span> BOARD
      </div>
      {menuItems.map((menuItem, index) => (
        <Link key={index} to={menuItem.to} className={menuItem.className}>
          <menuItem.icon className={styles.icon2} />
          {menuItem.label}
        </Link>
      )
      )}
       <OffCanvas/>
    </div>
    </>
  )
}
export default Fsidebar;