import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import "./styles.css";
import Product from "../components/Product";
import { ContextValue } from "../context/context";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProduct();
  }, []);
  const { state, dispatch } = ContextValue();
  async function getProduct() {
    try {
      setIsLoading(true);
      let res = await fetch("https://fakestoreapi.com/products");
      res = await res.json();
      res.forEach((item) => {
        item.fastDelivery = item.id % 2 === 0 ? true : false;
        item.inStock = parseInt(10 % item.id);
      });
      dispatch({ type: "LOAD_PRODUCTS", payload: res });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="home">
      <Filter />
      <div className="products">
        {isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <>
            {state.products.map((item, index) => {
              return <Product key={index} item={item} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}
