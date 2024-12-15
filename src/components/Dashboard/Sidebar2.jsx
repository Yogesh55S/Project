import styles from "./sidebar2.module.css";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { IoMdPower } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar2 = () => {
  const menuItems = [
    { icon: FaHome, label: "Home", to: "/" },
    { icon: IoPerson, label: "Profile", to: "/profile" },
    { icon: LiaJediOrder, label: "Post Your Order", to: "/post-order" },
    { icon: RiCoupon2Fill, label: "Coupons", to: "/coupons" },
    { icon: LiaJediOrder, label: "Market", to: "/market" },
    { icon: IoMdPower, label: "About Us", to: "/about-us" },
    { icon: MdHelpOutline, label: "Need Help", to: "/help", className: "auto" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <span>DASH</span> BOARD
      </div>
      {menuItems.map((menuItem, index) => (
        <Link key={index} to={menuItem.to} className={menuItem.className}>
          <menuItem.icon className={styles.icon} />
          {menuItem.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar2;