import styles from "./Card3.module.css";
import data from './data.json'

function FarmingPricesCard() {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <h2>{item.commodity}</h2>
          <div className={styles.info}>
            <p>Price: {item.price} {item.unit}</p>
            <p>Market: {item.market}</p>
            <p>Date: {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FarmingPricesCard;