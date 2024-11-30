import styles from './Middle.module.css';

const button = ()=>{
  console.log("Get Started");
}
const button2 = ()=>{
  console.log("Start Free Trial");
}

const Texts = () => {
  return (<>
<div className={styles.container}>
  <div className={styles.color}> 
    <div className={styles.text}>
      <p id={styles.texts}>Organic Farming Reimagined <br/>With Agri Farma</p>
      <div className={styles.image}>
    </div>
    </div>
    <div className={styles.text2}>
    <p id={styles.text2}>Understand your fields in a new way and experience better yields! On our website<br />discover all the information about farming and organic practices that can enhance both your soil and harvest.</p>
  </div>
  <div className={styles.but}>
     <button className={styles.get} onClick={button}>Get Started</button>
  <button className={styles.get2} onClick={button2}>Start Free Trial</button>
  </div>
  </div>
</div>
  </>
  );
};

export default Texts;