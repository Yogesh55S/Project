import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react"; // Import useState
import styles from "./buy.module.css";

const ItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the passed item data
  const item = location.state?.item;

  // State for coupon code and discounted price
  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(item.price);

  if (!item) {
    return <h2 className={styles.name}>No item data available</h2>;
  }

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT20") { // Check for the specific coupon code
      const discount = item.price * 0.20; // Calculate 20% discount
      setDiscountedPrice(item.price - discount); // Update the discounted price
    } else {
      alert("Invalid coupon code"); // Alert for invalid coupon
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.item}>Item Details</h1>
        <img src={item.image} alt={item.name} style={{ maxWidth: "300px" }} className={styles.image} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>
          <strong>Price: {discountedPrice.toFixed(2)}</strong> {/* Show discounted price */}
        </p>
        <input 
          type="text" 
          name="Coupon" 
          placeholder="Enter Your Coupon Code"
          id={styles.coupon} 
          value={couponCode} 
          onChange={(e) => setCouponCode(e.target.value)}
          style={{ textAlign: "center" }}
        />
        <button id={styles.apply} onClick={handleApplyCoupon}>Apply</button> {/* DISCOUNT20 coupon code */}
        <button className={styles.button} onClick={() =>  {console.log("Booking confirmed"); navigate(-1) ;alert("Booking confirmed");}}>Buy Now</button>
        <Button variant="success" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </>
  );
};

export default ItemDetails;