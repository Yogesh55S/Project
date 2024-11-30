import styles from './root.module.css';

const Root = () => {
const products = [
  { name: 'Tender Coconut', location: 'Bowenpally (3 KM)', price: '₹50-60/Piece', change: '+5% ^' },
 { name: ' Tender Coconut', location: 'Bowenpally (3 KM)', price: '₹50-60/Piece', change: '+5%' },
  { name: ' Tender Coconut', location: 'Bowenpally (3 KM)', price: '₹50-60/Piece', change: '+5%' },
  { name: ' Tender Coconut', location: 'Bowenpally (3 KM)', price: '₹50-60/Piece', change: '+5%' },
];

return (
  <>
  <div className={styles.container}>
    <div className={styles.header}>
      <h4 className={styles.name}>Market Prices</h4>
      <div className={styles.Card}>
          {products.map((product, index) => (
        <div key={index} className={styles.card}>
          <img src="/src/components/images/coco.jpg" alt={product.name} className={styles.image} />
          <div className={styles.cardInfo}>
            <h4 className={styles.cardname}>{product.name}</h4>
            <p className={styles.location}>{product.location}</p>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.change}>{product.change}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  </div>
   </>
  );
};

export default Root;
