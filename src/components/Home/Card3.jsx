import { useState } from 'react';
import styles from "./Card3.module.css";
import data from './data.json';

function FarmingPricesCard() {
  const [flippedIndex, setFlippedIndex] = useState(null); 

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <div key={index} className={`${styles.card} ${flippedIndex === index ? styles.flipped : ''}`} onClick={() => handleCardClick(index)}>
            <div className={styles.front}>
              <img src={item.image} alt={item.commodity} />
            </div>
            {flippedIndex === index && (
              <div className={styles.back}>
                <h2>{item.commodity}</h2>
                <p>Price: {item.price} {item.unit}</p>
                <p>Market: {item.market}</p>
                <p>Date: {item.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmingPricesCard;