import styles from './Cardi.module.css';

const Cardi = () => {
  const products = [
    { name: 'Patato', location: 'Bowenpally (3 KM)', price: '₹50-60/Piece', image: '/src/components/images/patato.jpg' },
    { name: 'Tamato', location: 'Punjab(13 KM)', price: '₹50-60/Piece', image: '/src/components/images/tamato.jpg' },
    { name: 'Carot', location: 'Haryana (23 KM)', price: '₹50-60/Piece', image: '/src/components/images/carot.jpg' },
    { name: 'Banana', location: 'Karela (36 KM)', price: '₹50-60/Piece', image: '/src/components/images/banana.jpg' },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.name}>Market Prices</h4>
          <div className={styles.Card}>
            {products.map((product, index) => (
              <div key={index} className={styles.card}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.cardInfo}>
                  <h4 className={styles.cardname}>{product.name}</h4>
                  <p className={styles.location}>{product.location}</p>
                  <p className={styles.price}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardi;