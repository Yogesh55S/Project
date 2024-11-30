import styles from './Card.module.css';
import { GiSeedling } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
const Card = () => {
  return (
    <>
     <div className={styles.head}>
      <div className={styles.content}>
        <p id={styles.content1}>Mission we <br /> are workning on</p>
        <p id={styles.content} >A farming website empowers farmers and agricultural communities by providing accessible information, fostering connections, and supporting sustainable practices, ultimately enhancing productivity, profitability, and community resilience in the agricultural sector.</p>
        <p id={styles.content} >A farming website serves as a vital hub for knowledge, resources, and connections, helping farmers make informed decisions, expand market reach, and adopt sustainable practices to enhance their livelihoods and strengthen the agricultural community.</p>
        <div className={styles.content2}>
      <p id={styles.content3}> <GiSeedling className={styles.icons}/>Organic Farming</p>   
      <p id={styles.content3}><AiOutlineSafetyCertificate className={styles.icons}/>Certified</p>
     <p id={styles.content3}><TbTruckDelivery  className={styles.icons}/>Fast Delivery</p> 
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
        <div className={styles.four}></div>
      </div>
     </div>
    </>
  );
}

export default Card;
/*
  const heading = ["Effective Communication","Marketing and Advertising","Data Collection and Analysis"];
  const description = ["A website enables farmers to share information with customers, suppliers, and partners efficiently, reducing the need for printed materials and phone calls.","A website serves as a primary resource for customers to discover farm products and services, making it an essential tool for marketing and advertising efforts.","Although indirect, a website provides an opportunity to collect data on advertising and marketing efforts, helping farmers refine their strategies and optimize their online presence."];
  const heading2 = ["Efficient Customer Outreach","Cost-Effective","Blogging and Diary"];
  const description2 = [" Instead of printing flyers or relying on traditional mediums, a website provides a centralized platform to update customers about new products, promotions, and events.","A website reduces the need for expensive print materials and allows farmers to reach a wider audience with minimal additional costs.","A website can serve as a digital diary for farmers to document their journey, track progress, and reflect on experiences, providing a valuable resource for future reference."];

  const [currentindex, setcurrentindex] = useState(0);
  const handlenext = () => {
    setcurrentindex((currentindex + 1) % heading.length);
  }
  const handlePrev = () => {
    setcurrentindex((currentindex - 1 + heading.length) % heading.length);
    
     <div className={styles.cards}>
        <div className={styles.images}></div>
        <div id={styles.texts}>
          <h1>{heading[currentindex]}</h1>
          <h2>{description[currentindex]}</h2>
        </div>
      </div>
      <div className={styles.next}>
        <FaChevronLeft onClick={handlePrev} />
        <FaChevronRight onClick={handlenext} />
      </div>
      <div className={styles.cards2}>
        <div className={styles.images2}></div>
        <div id={styles.texts2}>
          <h1>{heading2[currentindex]}</h1>
          <h2>{description2[currentindex]} </h2>
        </div>
      </div>
    */