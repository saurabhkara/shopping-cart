import React from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { ContextValue } from "../context/context";

export default function Filter() {
  const {
    productState: { byStock, byFastDelivery, byRating, sort },
    productDispatch,
  } = ContextValue();

  return (
    <div className="filter">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
          checked={sort==="lowToHigh"? true:false}
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          checked={sort==="highToLow"? true:false}
          id={"inline-2"}
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          checked={byStock}
          onChange={() => productDispatch({ type: "FILTER_BY_STOCK" })}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          checked={byFastDelivery}
          onChange={() => productDispatch({ type: "FILTER_BY_DELIVERY" })}
        />
      </span>
      <span style={{ flexDirection: "row", display: "flex" }}>
        <label style={{ paddingRight: 10 }}>Rating :</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
          }
        />
      </span>
      <Button variant="light" onClick={()=>productDispatch({type:'CLEAR_FILTERS'})}>Clear Filter</Button>
    </div>
  );
}
