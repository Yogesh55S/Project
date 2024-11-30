import styles from "./Card2.module.css";

const cardData = [
  {
    title: "Quality Standards",
    description: "Quality standards in agriculture ensure that products meet specific safety, consistency, and nutritional benchmarks from production to market.",
    className: styles.img1,
  },
  {
    title: "Organic services",
    description: "Organic services provide farmers and consumers with resources for chemical-free, eco-friendly agriculture health management, organic pest control.",
    className: styles.img2,
  },
  {
    title: "Agriculture Leader",
    description: "An agriculture leader drives sustainable practices, innovation, and policy in farming. They support advancements in ag-tech, advocate for farmers.",
    className: styles.img3,
  },
];

function Card2() {
  return (
    <>
      <div className={styles.head}>
        <p id={styles.name}>Choose from the best</p>
        <div className={styles.images}>
          {cardData.map((card, index) => (
            <div key={index} className={card.className}>
              <p id={styles.cont}>
                {card.title}
                <p id={styles.cont2}>{card.description}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card2;