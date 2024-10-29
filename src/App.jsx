import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Greet from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import UsersInfo from "./UsersInfo";
const App = () => {
  return (
    <div className="App">
      <Greet/>
      <Header />
      <Content />
      <Footer />
      <ProductInfo/>
      <UsersInfo/>
    </div>
  );
};
export default App;
