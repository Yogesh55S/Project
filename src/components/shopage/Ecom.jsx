/* eslint-disable react/prop-types */
import styles from './Ecom.module.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Sidebar from "./Sidebar";
import Pagi from "./Pagi";
import Search from "./Search";
import { useState } from "react";
import itemsData from './items.json';
import { FaOpencart } from "react-icons/fa";


const FarmingItemCard = ({ item, onAddToCart }) => {
  return (
    <div className="card-container">
      <Card className={styles.card} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={item.image} className={styles.cardImage} />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{item.name}</Card.Title>
          <Card.Text className={styles.cardText}>
            {item.description}
          </Card.Text>
          <Card.Text className={styles.cardPrice}>
            <strong>Price: {item.price}</strong>
          </Card.Text>
          <Button variant="primary" className={styles.cardBtnPrimary} onClick={onAddToCart}>
            Add to Cart
          </Button>
          <Button variant="success" className={styles.cardBtnSuccess} style={{ marginLeft: '10px' }}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const FarmingItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentItems, setCurrentItems] = useState(itemsData.farmingItems); 
  const [cartCount, setCartCount] = useState(0);

  const handleSidebarClick = (category) => {
    if (category === 'wheat') {
      setCurrentItems(itemsData.wheatItems); 
    } else if (category === 'corn') {
      setCurrentItems(itemsData.cornItems); 
    } else {
      setCurrentItems(itemsData.farmingItems); 
    }
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    
    console.log('Items in cart:', cartCount + 1); 
  };

  const filteredItems = currentItems.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <p style={{ textAlign: "center", fontSize: "50px", fontFamily: "Libre Baskerville", color: "#043927" }}>AGRI-FARMA</p>
      <Sidebar onCategoryClick={handleSidebarClick} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginRight: '150px' }}>
        <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ marginRight: "10px" }} />
          <FaOpencart id={styles.cart} />
          {cartCount > 0 && (
            <div className={styles.none}>
              {cartCount}
            </div>
          )}
        
      </div>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          {filteredItems.map((item, index) => (
            <Col key={item.id} md={3} xs={6}>
              <FarmingItemCard item={item} onAddToCart={handleAddToCart} />
              {(index + 1) % 4 === 0 && <hr />}
            </Col>
          ))}
        </Row>
      </Container>
      <Pagi />
    </>
  );
};

export default FarmingItems;