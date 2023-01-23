import React, { useState } from "react";
import { Col, FormControl, ListGroup, Row } from "react-bootstrap";
import { ContextValue } from "../context/context";
import { useEffect } from "react";
import Rating from "../components/Rating";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = ContextValue();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, item) => {
        acc = acc + item.price * item.qty;
        return acc;
      }, 0)
    );
  }, [cart]);
  console.log(cart);
  return (
    <div className="home">
      <div className="products">
        <ListGroup sx={{ width: "100%" }}>
          {cart.map((item, index) => {
            return (
              <ListGroup.Item
                key={index}
                sx={{ display: "flex", width: "100%" }}
              >
                <Row>
                  <Col md={3}>
                    <p>{item.title}</p>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <Rating rating={item.rating.rate} />
                  </Col>
                  <Col md={2}>
                    <FormControl
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_QTY",
                          payload: {qty:e.target.value,id:item.id},
                        })
                      }
                    >
                      {[1, 2, 3, 4, 5].map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </FormControl>
                  </Col>
                  <Col>
                    <FaTrash
                      color="red"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="filter">
        <h3>
          Sub-Total{`( ${cart.length})`} : ${totalPrice}
        </h3>
      </div>
    </div>
  );
}
