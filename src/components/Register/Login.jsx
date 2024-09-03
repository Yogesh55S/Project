import { MdAgriculture } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import "./Login.css";
const Login = () =>{
  return (<>
  <div className="container">
    <div className="Login">
  <MdAgriculture id="logo" />
  <p>Login/Register as a Farmer</p>
    <input type="button" value="Farmer" id="Farmer"/>
    <CiShoppingTag id="logo2"/>
    <p>Login/Register as a ShopKeeper</p>
    <input type="button" value="Shopkeeper" id="Shop"/>
  </div>
  </div>
  
  </>)
}
export default Login;