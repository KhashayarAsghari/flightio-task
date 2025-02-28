import { useEffect, useState } from "react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar";
import SingleProduct from "../components/SingleProduct";
import { useMemo } from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    return () => {
      console.log("home page unmounted");
    };
  }, []);


  function handleProductClick() {
    navigate("")
  }

  return (
    <>
      <SearchBar />
      {products.map((item) => (
        <SingleProduct
          onClick={handleProductClick}
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </>
  );
}
