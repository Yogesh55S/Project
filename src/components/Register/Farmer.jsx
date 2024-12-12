import { useState } from 'react';
import { MdAgriculture } from "react-icons/md";
import styles from './Farmers.module.css';
import myImage from '/src/components/images/even.jpg'; 
import Footer from "/src/components/Home/Footer";
import { Link } from 'react-router-dom';

const Farmers = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in:', { loginEmail, loginPassword });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (registerPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle registration logic here
        console.log('Registering:', { registerEmail, registerPassword, zipCode });
    };

    return (
        <>
            <div className={styles.head}>
                <div className={styles.container}>
                    <MdAgriculture className={styles.logo} />
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
                    {isLogin ? (
                        <div className={styles.formContainer}>
                            <h2 className={styles.title}>Login</h2>
                            <form className={styles.form} onSubmit={handleLoginSubmit}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="loginEmail">Email</label>
                                    <input
                                        type="email"
                                        id="loginEmail"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="loginPassword">Password</label>
                                    <input
                                        type="password"
                                        id="loginPassword"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        required
                                    />
                                </div> 
                                <button type="submit" className={styles.button}><Link to='/fboard' id={styles.link}>Login</Link></button>
                            </form>
                        </div>
                    ) : (
                        <div className={styles.formContainer}>
                            <h2 className={styles.title}>Register</h2>
                            <form className={styles.form} onSubmit={handleRegisterSubmit}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="registerEmail">Email</label>
                                    <input
                                        type="email"
                                        id="registerEmail"
                                        value={registerEmail}
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="registerPassword">Password</label>
                                    <input
                                        type="password"
                                        id="registerPassword"
                                        value={registerPassword}
                                        onChange={(e) => setRegisterPassword(e.target.value)}
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
                                <button type="submit" className={styles.button}><Link to='/fboard' id={styles.link}>Register</Link></button>
                            </form>
                        </div>
                    )}
                </div>
                <img src={myImage} className={styles.rightImage}></img>      
                <p id={styles.good}>Everyone gets what they deserve according to their deeds, <br /> neither more nor less</p>
            </div>
            <Footer/>
        </>
    );
};

export default Farmers;