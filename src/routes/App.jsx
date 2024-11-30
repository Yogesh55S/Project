import "bootstrap/dist/css/bootstrap.min.css";
//-----------------------Bootstrap--------------------------------
import Navbar from "../components/Home/Header";
import Texts from "../components/Home/Middle";
import Card from "../components/Home/Cards";
import Card2 from "../components/Home/Card2";
import Review from "../components/Home/Review";
import Card3 from "../components/Home/Card3";
import Footer from "../components/Home/Footer";
//import ShopRegistrationForm from "../components/shopage/Upload";
function App() {
  return (
    <>
      <Navbar/>
      <Texts/>
      <Card/>
      <Card2/>
      <Review/>
      <Card3/>
      <Footer/>
    </>
  );
}
export default App;