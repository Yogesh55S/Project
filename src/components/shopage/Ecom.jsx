/* eslint-disable react/prop-types */
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Ecom.css";
import Pagination from 'react-bootstrap/Pagination';

// Medicine Card Component
const MedicineCard = ({medicine }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={medicine.image} />
      <Card.Body>
        <Card.Title>{medicine.name}</Card.Title>
        <Card.Text>
          {medicine.description}
        </Card.Text>
        <Card.Text>
          <strong>Price: ${medicine.price.toFixed(2)}</strong>
        </Card.Text>
        <Button variant="primary" onClick={() => alert('Added to cart!')}>Add to Cart</Button>
        <Button variant="success" style={{ marginLeft: '10px' }} onClick={() => alert('Buying now!')}>Buy</Button>
      </Card.Body>
    </Card>
  );
};

// App Component
const Ecom = () => {
  // Example data
  const medicines = [
    {
      id: 1,
      name: 'Aspirin',
      description: 'Pain relief medicine.',
      price: 12.99,
      image: '/src/components/images/id1.jpg'
    },
    {
      id: 2,
      name: 'Antibiotic',
      description: 'Fights bacterial infections.',
      price: 19.99,
      image: '/src/components/images/id2.jpg'
    },
    {
      id: 3,
      name: 'Antiseptic',
      description: 'Disinfects wounds.',
      price: 8.99,
      image: '/src/components/images/id3.jpg'
    },
    {
      id: 4,
      name: 'Cough Syrup',
      description: 'Relieves cough and throat irritation.',
      price: 9.99,
      image: '/src/components/images/id4.jpg'
    },
    {
      id: 5,
      name: 'Aspirin',
      description: 'Pain relief medicine.',
      price: 12.99,
      image: '/src/components/images/id1.jpg'
    },
    {
      id: 6,
      name: 'Antibiotic',
      description: 'Fights bacterial infections.',
      price: 19.99,
      image: '/src/components/images/id2.jpg'
    },
    {
      id: 7,
      name: 'Antiseptic',
      description: 'Disinfects wounds.',
      price: 8.99,
      image: '/src/components/images/id3.jpg'
    },
    {
      id: 8,
      name: 'Cough Syrup',
      description: 'Relieves cough and throat irritation.',
      price: 9.99,
      image: '/src/components/images/id4.jpg'
    }
  ];

  return (
    <Container>
      <nav>
    <div className="search">
      <input type="text" name="Search" id="search" placeholder="search" />
      <button className="searchbtn">Search</button>
    </div>

  </nav>
      <Row>
        {medicines.map(medicine => (
          <Col key={medicine.id} md={3}>
            <MedicineCard medicine={medicine} />
          </Col>
        ))}
      </Row>
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item >{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </Container>
  );
};

export default Ecom;

/*import "./Ecom.css";
const Ecom =() =>{
  return (<>
  <nav>
    <div className="search">
      <input type="text" name="Search" id="search" placeholder="search" />
      <button className="searchbtn">Search</button>
    </div>

  </nav>
  </>)
}
export default Ecom;*/