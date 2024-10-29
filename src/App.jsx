import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Greet from "./components/Greeting";
const App = () => {
  return (
    <div className="App">
      <Greet/>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default App;
