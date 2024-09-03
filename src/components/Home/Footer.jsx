import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Based on the analysis of content farms, we are a company that produces a large quantity of online articles on various farming-related topics. Our primary goal is to create content that satisfies search engine algorithms, ensuring high visibility in search results.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Get in Touch</h5>
            <p>Address: 123 Main kurukshetra, Haryana, India</p>
            <p>Phone: +91-9350161043</p>
            <p>Email: [Yogesharma914@gmail.com](mailto:info@example.com)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Example Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;