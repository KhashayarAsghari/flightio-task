import { useParams } from "react-router";
import SingleProduct from "../components/SingleProduct";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function SingleProductPage() {
  const params = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  if (!productData) {
    return <h1>loading</h1>;
  }

  return (
    <SingleProduct
      image={productData?.image}
      title={productData?.title}
      price={productData?.price}
    />
  );
}
