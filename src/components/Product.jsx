import React from "react";
import { ContextValue } from "../context/context";
import Rating from "./Rating";

export default function Product({ item }) {


  const {
    dispatch,
    state: { cart },
  } = ContextValue();

  
  return (
    <div className="product">
      <div className="productImg">
        <img src={item.image} style={{ height: "300px", width: "300px" }} />
      </div>
      <div className="productTitle">
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>{item.title}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>$ {item.price}</h5>
        <p>{item.inStock ? "Available" : "Not in Stock"}</p>
      </div>
      <Rating rating={item.rating.rate}/>
      <div style={{ justifyContent: "center" }}>
        {!cart.some((it) => it.id == item.id) ? (
          <button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add to Cart
          </button>
        ) : (
          <button
            style={{ backgroundColor: "Red", color: "white" }}
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}
