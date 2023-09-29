import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Homme from "./components/Homme";
import Femme from "./components/Femme";
import Enfant from "./components/Enfant";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import { ShopProvider } from "./Context/ShoppingProduct";
import "./App.css";

function App() {
  return (
    <div>
      <ShopProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homme" element={<Homme />} />
          <Route path="/femme" element={<Femme />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/enfant" element={<Enfant />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopProvider>
    </div>
  );
}

export default App;
