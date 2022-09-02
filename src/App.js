import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ShopProductContainer from "./Components/ShopProductContainer";
import ZX9Speaker from "./Components/ZX9Speaker";
import ZX7Speaker from "./Components/ZX7Speaker";
import YX1Earphones from "./Components/YX1Earphones";
import BestGear from "./Components/BestGear";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShopProductContainer />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <BestGear />
      <Footer />
    </div>
  );
}

export default App;
