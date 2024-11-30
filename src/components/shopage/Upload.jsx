import { useState } from 'react';
import styles from './upload.module.css';
import { Link } from 'react-router-dom';
const ShopRegistrationForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Image:', image);
  };

  return (
    <div className={styles['form-container']}>
      <h1>Register Your Product</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}> 
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}> 
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}> 
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}> 
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className={styles['form-button']}> 
         <Link to="/market">Submit</Link> 
        </button>
      </form>
    </div>
  );
};

export default ShopRegistrationForm;