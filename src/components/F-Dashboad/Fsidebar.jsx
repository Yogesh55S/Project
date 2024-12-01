import styles from "./Fsidebar.module.css";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { IoMdPower } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
//import OffCanvas from "./Offcanvas";

const Fsidebar = () => {
  const menuItems = [
    { icon: FaHome, label: "Home", to: "/", className: "" },
    { icon: IoPerson, label: "Profile", to: "/profile", className: "" },
    { icon: LiaJediOrder, label: "Order", to: "/post-order", className: "" },
    { icon: RiCoupon2Fill, label: "Dis-Coupon", to: "/coupons", className: "" },
    { icon: TiWeatherPartlySunny, label: "Weather", to: "/weather", className: "auto",},
    { icon: IoMdPower, label: "About Us", to: "/about-us", className: "" },
    { icon: MdHelpOutline, label: "Need Help", to: "/help", className: "auto" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        DASH<span> BOARD</span>
      </div>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link to={menuItem.to} className={menuItem.className}>
              <menuItem.icon className={styles.icon} />
              {menuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fsidebar;