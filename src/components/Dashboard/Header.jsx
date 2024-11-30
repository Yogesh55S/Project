import { PiSquaresFour } from "react-icons/pi";
import { GiPerpendicularRings } from "react-icons/gi";
import { LiaSquarespace } from "react-icons/lia";
import styles from './Header.module.css';

const Header = () => {
  const orderStatuses = [
    { id: '#000000', steps: [true, true, true, true, true, true, false] },
    { id: '#000001', steps: [true, true, true, true, true, false, false] },
    { id: '#000002', steps: [true, true, true, true, false, false, false] },
  ];

  const orderSteps = [
    { id: 1, name: 'Placed' },
    { id: 2, name: 'Accepted' },
    { id: 3, name: 'Loaded' },
    { id: 4, name: 'Delivery' },
    { id: 5, name: 'Received' },
    { id: 6, name: 'Full Payment' },
    { id: 7, name: 'Completed' },
  ];

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
  <div className={styles.stats}>
    {[
      { icon: PiSquaresFour, value: '62,783', label: 'Total Product Buyed' },
      { icon: GiPerpendicularRings, value: '262', label: 'Connected with farmer' },
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

      {/* Order Tracking */}
      <div className={styles.ordertracking}>
  <h3 className={styles.track}>Track Your Order</h3>
  <h4 className={styles.order}>Order Id</h4>
  <ul className={styles.ordertrack}>
    {orderSteps.map((step) => (
      <li key={step.id}>{step.name}</li>
    ))}
  </ul>
  {orderStatuses.map((order) => (
    <div key={order.id} className={styles.orderrow}>
      <span className={styles.id}>Order ID: {order.id}</span>
      <div className={styles.steps}>
        {order.steps.map((step, idx) => (
          <span key={idx} className={`step ${step ? 'active' : 'inactive'}`}></span>
        ))}
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default Header;