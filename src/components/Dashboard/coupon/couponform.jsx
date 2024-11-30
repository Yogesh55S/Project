import { useState } from 'react';
import styles from "./Couponform.module.css";

// eslint-disable-next-line react/prop-types
function CouponForm({ onCreate }) {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiry, setExpiry] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code || !discount || !expiry) {
      setError('Please fill in all fields');
      return;
    }
    if (isNaN(discount) || discount < 0 || discount > 100) {
      setError('Discount must be a number between 0 and 100');
      return;
    }
    onCreate({ code, discount, expiry });
    setCode('');
    setDiscount('');
    setExpiry('');
    setError(null);
  };
const show =()=>{
  console.log(alert("Create Succesfully"));
}
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Create a New Coupon</h2>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.inputContainer}>
        <label>Coupon Code:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          placeholder="Enter coupon code"
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Discount (%):</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
          min="0"
          max="100"
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Expiry Date:</label>
        <input
          type="date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <button type="submit" disabled={!code || !discount || !expiry} className={styles.button} onClick={show}>
        Create Coupon
      </button>
    </form>
  );
}

function Coup() {
  const [coupons, setCoupons] = useState([]);

  const handleCreateCoupon = (coupon) => {
    setCoupons((prevCoupons) => [...prevCoupons, coupon]);
  };

  return (
    <>
    <div className={styles.image}> 
      <h1 className={styles.marker}>Coupon Maker</h1>
     <div className={styles.container}>
      <CouponForm onCreate={handleCreateCoupon} />
      <h2 className={styles.list1}>Coupons List</h2>
      <ul className={styles.list}>
        {coupons.map((coupon, index) => (
          <li key={index} className={styles.listItem}>
            {coupon.code} - {coupon.discount}% - Expires on {coupon.expiry}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default Coup;