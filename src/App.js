import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Headphones from "./Pages/Headphones/Headphones";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import MarkII from "./Pages/Products/Headphones/MarkII/MarkII";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/products/mark-ii-headphones" element={<MarkII />} />
      </Routes>
    </div>
  );
}

export default App;
