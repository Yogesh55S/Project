import "./Card2.css";

function Card2() {
  return (
    <div className="card-container">
      <div className="card" onClick={() => handleCardClick(0)}>
        <div className="circle">
          <img src="/src/components/images/corn.jpg" alt="icon" />
        </div>
        <h3>Soil Conservation</h3>
        <p>Soil conservation is the practice of protecting the soil from erosion and degradation.</p>
        <div className="benefits">
          <ul>
            <li>Reduces soil erosion</li>
            <li>Improves soil fertility</li>
            <li>Increases crop yields</li>
          </ul>
        </div>
      </div>
      <div className="card" onClick={() => handleCardClick(1)}>
        <div className="circle">
          <img src="/src/components/images/wheat.jpg" alt="icon" />
        </div>
        <h3>Crop Rotation</h3>
        <p>Crop rotation is the practice of rotating crops to improve soil fertility and reduce pests and diseases.</p>
        <div className="benefits">
          <ul>
            <li>Improves soil fertility</li>
            <li>Reduces pests and diseases</li>
            <li>Increases crop diversity</li>
          </ul>
        </div>
      </div>
      <div className="card" onClick={() => handleCardClick(2)}>
        <div className="circle">
          <img src="/src/components/images/vegitable.jpg" alt="icon" />
        </div>
        <h3>Irrigation Management</h3>
        <p>Irrigation management is the practice of managing water resources to optimize crop growth and reduce waste.</p>
        <div className="benefits">
          <ul>
            <li>Optimizes water usage</li>
            <li>Reduces water waste</li>
            <li>Improves crop growth</li>
          </ul>
        </div>
      </div>
      <div className="card" onClick={() => handleCardClick(3)}>
        <div className="circle">
          <img src="/src/components/images/sugar.jpg" alt="icon" />
        </div>
        <h3>Organic Farming</h3>
        <p>Organic farming is the practice of growing crops without the use of synthetic fertilizers and pesticides.</p>
        <div className="benefits">
          <ul>
            <li>Reduces chemical usage</li>
            <li>Improves soil health</li>
            <li>Increases crop quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const handleCardClick = (index) => {
  const card = document.querySelectorAll(".card")[index];
  card.classList.toggle("rotate");
  card.classList.toggle("show-benefits");
};

export default Card2;