import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ShopProductContainer from "./Components/ShopProductContainer";
import ZX9Speaker from "./Components/ZX9Speaker";
import ZX7Speaker from "./Components/ZX7Speaker";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShopProductContainer />
      <ZX9Speaker />
      <ZX7Speaker />
    </div>
  );
}

export default App;
