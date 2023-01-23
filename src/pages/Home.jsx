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

  const {
    state,
    dispatch,
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
  } = ContextValue();
  console.log(state);
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

  function transformProduct() {
    let transState = state.products;
    if (sort) {
      transState = transState.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      transState = transState.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      transState = transState.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      transState = transState.filter((prod) => prod.rating.rate >= byRating);
    }

    if(searchQuery){
      transState = transState.filter((prod)=>prod.title.toLowerCase().includes(searchQuery));
    }

    return transState;
  }

  return (
    <div className="home">
      <Filter />
      <div className="products">
        {isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <>
            {transformProduct().map((item, index) => {
              return <Product key={index} item={item} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}
