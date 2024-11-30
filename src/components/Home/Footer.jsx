import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colMd3ColSm6}>
            <h5 className={styles.heading}>About Us</h5>
            <p className={styles.paragraph}>Always try your best never give no matter how life going to hard just try your best</p>
          </div>
          <div className={styles.colMd3ColSm6}>
            <h5 className={styles.heading}>Quick Links</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}><a href="#" className={styles.link}>Home</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>About</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>Contact</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>FAQ</a></li>
            </ul>
          </div>
          <div className={styles.colMd3ColSm6}>
            <h5 className={styles.heading}>Follow Us</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}><a href="#" target="_blank"><i className={`fa fa-facebook ${styles.icon}`} aria-hidden="true"></i> Facebook</a></li>
              <li className={styles.listItem}><a href="#" target="_blank"><i className={`fa fa-twitter ${styles.icon}`} aria-hidden="true"></i> Twitter</a></li>
              <li className={styles.listItem}><a href="#" target="_blank"><i className={`fa fa-instagram ${styles.icon}`} aria-hidden="true"></i> Instagram</a></li>
              <li className={styles.listItem}><a href="#" target="_blank"><i className={`fa fa-linkedin ${styles.icon}`} aria-hidden="true"></i> LinkedIn</a></li>
            </ul>
          </div>
          <div className={styles.colMd3ColSm6}>
            <h5 className={styles.heading}>Subscribe to Newsletter</h5>
            <form>
              <input type="email" placeholder="Enter your email" className={styles.input} />
              <button type="submit" className={styles.button}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colMd12}>
            <p className={styles.copyright}>Copyright 2024 Agri Farma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;