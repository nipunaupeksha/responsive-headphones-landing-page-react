import "./App.css";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Sponsor from "./containers/Sponsor/Sponsor";
import Specs from "./containers/Specs/Specs";
import Case from "./containers/Case/Case";
import Discount from "./containers/Discount/Discount";
import Products from "./containers/Products/Products";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Sponsor />
      <Specs />
      <Case />
      <Discount />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
