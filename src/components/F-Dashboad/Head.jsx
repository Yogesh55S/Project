import styles from "./Head.module.css";
import { PiSquaresFour } from "react-icons/pi";
import { GiPerpendicularRings } from "react-icons/gi";
import { LiaSquarespace } from "react-icons/lia";
const Head = () => (
    <>
     <header className={styles.header}>
  <div className={styles.stats}>
    {[
      { icon: PiSquaresFour, value: '100', label: 'Total Product Buyed' },
      { icon: GiPerpendicularRings, value: '262', label: 'Connected with Shop' },
      { icon: LiaSquarespace, value: '11.91%', label: 'Active in site' },
    ].map((stat, idx) => (
      <div key={idx} className={styles.stat}>
        <stat.icon className={styles.squar} />
        <h4 className={styles.value}>{stat.value}</h4>
        <p className={styles.label}>{stat.label}</p>
      </div>
    ))}
  </div>
</header>
    </>
);
export default Head;