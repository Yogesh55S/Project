
import styles from './coupons.module.css';

const Coupon = () => {
    const couponData = [
        { code: 'SAVE20', discount: '20% off', description: 'Get 20% off on your next purchase!' },
        { code: 'FREESHIP', discount: 'Free Shipping', description: 'Enjoy free shipping on orders over $50!' },
        { code: 'BUY1GET1', discount: 'Buy 1 Get 1 Free', description: 'Buy one item and get another one free!' },
        { code: 'BUY1GET1', discount: 'Buy 3 Get 1 Free', description: 'Buy one item and get another one free!' },
        { code: 'BUY1GET1', discount: 'Buy 2 Get 1 Free', description: 'Buy one item and get another one free!' },
    ];

    return (
        <>
        <div className={styles.couponscontainer}>
            <h2>Your Coupons</h2>
            <div className={styles.couponslist}>
                {couponData.map((coupon, index) => (
                    <div className={styles.couponcard} key={index}>
                        <h3 className={styles.couponcode}>{coupon.code}</h3>
                        <p className={styles.coupondiscount}>{coupon.discount}</p>
                        <p className={styles.coupondescription}>{coupon.description}</p>
                        <button className={styles.copybutton} onClick={() => navigator.clipboard.writeText(coupon.code)}>
                            Copy Code
                        </button>
                    </div>
                ))}
            </div>
            
        </div>
        <img src="/src/components/images/wave2.jpg" className={styles.image} />
        </>
    );
};

export default Coupon;