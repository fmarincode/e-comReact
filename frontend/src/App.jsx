import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Homme from "./components/Homme";
import Femme from "./components/Femme";
import Enfant from "./components/Enfant";
import ProductView from "./components/ProductView";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homme" element={<Homme />} />
        <Route path="/femme" element={<Femme />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/enfant" element={<Enfant />} />
      </Routes>
    </div>
  );
}

export default App;
