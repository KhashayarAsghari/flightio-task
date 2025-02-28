import { BrowserRouter, Route, Routes } from "react-router";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import SingleProduct from "./components/SingleProduct";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Layout from "./layout";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
