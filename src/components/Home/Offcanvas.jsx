import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiMenuBurger } from "react-icons/ci";
import './weather.css'; // Import the CSS file

const API_KEY = "fcc8de7015bbb202209bbf0261babf4c";
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// List of farming items with their prices per unit weight
const farmingItems = [
  { name: 'Apple', pricePerKg: 50 },
  { name: 'Banana', pricePerKg: 30 },
  { name: 'Carrot', pricePerKg: 20 },
  { name: 'Potato', pricePerKg: 15 },
];

function Example() {
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('Delhi'); // default city
  const [error, setError] = useState(null);
  const [weight, setWeight] = useState(0); // weight of farming items
  const [selectedItem, setSelectedItem] = useState(null); // selected farming item

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleItemChange = (e) => {
    const selectedItem = farmingItems.find(item => item.name === e.target.value);
    setSelectedItem(selectedItem);
  };

  return (
    <>
      <CiMenuBurger onClick={handleShow}/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title className="offcanvas-title">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <h4 className="weather-header">Weather Checker</h4>
          <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" className="weather-input" />
          {error ? (
            <p className="weather-error">Error: {error}</p>
          ) : weather.main ? (
            <div className="weather-info">
              <p>City: {weather.name}</p>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <h4 className="farming-header">Farming Items</h4>
          <select value={selectedItem?.name} onChange={handleItemChange} className="farming-select">
            <option value="">Select an item</option>
            {farmingItems.map(item => (
              <option key={item.name} value={item.name}>{item.name}</option>
            ))}
          </select>
          <input type="number" value={weight} onChange={handleWeightChange} placeholder="Enter weight in kg" className="farming-input" />
          {selectedItem && weight > 0 ? (
            <p className="farming-price">Price: ₹{selectedItem.pricePerKg * weight}</p>
          ) : (
            <p className="farming-price">Please select an item and enter weight</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;