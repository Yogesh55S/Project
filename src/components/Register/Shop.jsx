import { useState } from 'react';
import { CiShop } from "react-icons/ci";
import styles from './shop.module.css';
import myImage from '/src/components/images/day.jpg'; 
import Footer from "/src/components/Home/Footer";
import { Link } from 'react-router-dom';
const Farmers = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <div className={styles.head}>
               <div className={styles.container}>
                    <CiShop className={styles.logo} />
                    <div className={styles.toggleContainer}>
                        <button
                            className={`${styles.toggleButton} ${isLogin ? styles.active : ''}`}
                            onClick={handleToggle}
                        >
                            Login
                        </button>
                        <button
                            className={`${styles.toggleButton} ${!isLogin ? styles.active : ''}`}
                            onClick={handleToggle}
                        >
                            Register
                        </button>
                    </div>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>
                <img src={myImage} className={styles.rightImage}></img>      
               <p id={styles.good}>Every product on the shelf holds a story,  <br /> and every customer interaction builds a bond. <br /> A storekeeper shapes community one smile at a time.</p>
            </div>
            <Footer/>
        </>
    );
};
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in:', { email, password });
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Login</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="loginEmail">Email</label>
                    <input
                        type="email"
                        id="loginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="loginPassword">Password</label>
                    <input
                        type="password"
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}><Link to="/Dashboard" className={styles.link}> Login</Link></button>
            </form>
        </div>
    );
};

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle registration logic here
        console.log('Registering:', { email, password, zipCode });
    };

    return (<>
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="registerEmail">Email</label>
                    <input
                        type="email"
                        id="registerEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="registerPassword">Password</label>
                    <input
                        type="password"
                        id="registerPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}><Link to="/Dashboard" className={styles.link}> Register</Link></button>
            </form>
        </div>
        </>
    );
};

export default Farmers;
