import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Headphones from "./Pages/Headphones/Headphones";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import MarkII from "./Pages/Products/Headphones/MarkII/MarkII";
import MarkI from "./Pages/Products/Headphones/MarkI/MarkI";
import XX59 from "./Pages/Products/Headphones/XX59/XX59";
import ZX9 from "./Pages/Products/Speakers/ZX9/ZX9";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/products/mark-ii-headphones" element={<MarkII />} />
        <Route path="/products/mark-i-headphones" element={<MarkI />} />
        <Route path="/products/mark-i-headphones" element={<MarkI />} />
        <Route path="/products/xx59-headphones" element={<XX59 />} />
        <Route path="/products/zx9-speaker" element={<ZX9 />} />
      </Routes>
    </div>
  );
}

export default App;
