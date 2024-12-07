import styles from "./Offcanva.module.css";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TiWeatherPartlySunny } from "react-icons/ti";

function OffCanva({ ...props }) {
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('Delhi'); // default city
  const [error, setError] = useState(null);
  const [weight, setWeight] = useState(0); // weight of farming items
  const [selectedItem, setSelectedItem] = useState(null); // selected farming item

  const API_KEY = "fcc8de7015bbb202209bbf0261babf4c";
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const farmingItems = [
    { name: 'Apple', pricePerKg: 50 },
    { name: 'Banana', pricePerKg: 30 },
    { name: 'Carrot', pricePerKg: 20 },
    { name: 'Potato', pricePerKg: 15 },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  return (
    <>
      <Button onClick={handleShow} style={{ backgroundColor: '#043927', color: 'white', border:"none",fontSize:"18px" }}>
        <TiWeatherPartlySunny style={{fontSize:"25px"}}/> Weather
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className={styles.weatherheader}>Weather Checker</h4>
          <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" className={styles.weatherinput} />
          {error ? (
            <p className={styles.weathererror}>Error: {error}</p>
          ) : weather.main ? (
            <div className={styles.weatherinfo}>
              <p>City: {weather.name}</p>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <h4 className={styles.farmingheader}>Farming Items</h4>
          <select value={selectedItem?.name} onChange={handleItemChange} className={styles.farmingselect}>
            <option value="">Select an item</option>
            {farmingItems.map(item => (
              <option key={item.name} value={item.name}>{item.name}</option>
            ))}
          </select>
          <input type="number" value={weight} onChange={handleWeightChange} placeholder="Enter weight in kg" className={styles.farminginput} />
          {selectedItem && weight > 0 ? (
            <p className={styles.farmingprice}>Price: ₹{selectedItem.pricePerKg * weight}</p>
          ) : (
            <p className={styles.farmingprice}>Please select an item and enter weight</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvas() {
  return (
    <OffCanva placement="top" name="Top" />
  );
}

export default OffCanvas;