import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Ecom.module.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || { cartItems: [] };

  if (cartItems.length === 0) {
    return <h3 style={{ textAlign: "center" }}>Your cart is empty!</h3>;
  }

  return (
    <Container style={{ marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      <Row>
        {cartItems.map((item, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className={styles.card} style={{ margin: '20px' }}>
              <Card.Img variant="top" src={item.image} className={styles.cardImage} />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>{item.name}</Card.Title>
                <Card.Text className={styles.cardText}>
                  {item.description}
                </Card.Text>
                <Card.Text className={styles.cardPrice}>
                  <strong>Price: {item.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="primary" onClick={() => navigate('/market')}>
          Continue Shopping
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
