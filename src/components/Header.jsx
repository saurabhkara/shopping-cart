import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Nav,
} from "react-bootstrap";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextValue } from "../context/context";

export default function Header() {
  const {
    state: { cart },
    dispatch,
  } = ContextValue();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/cart">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle>
              <FaShoppingCart fontSize={"25px"} color="white" />
              <Badge color="white">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 570 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => {
                    return (
                      <div
                        style={{
                          margin: "5px",
                          borderBottom: "100",
                          borderBottomColor: "black",
                          flexDirection: "row",
                          display: "flex",
                          alignItems: "center",
                          height: "50px",
                        }}
                      >
                        <div
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                        >
                          <FaTrash color="red" />
                        </div>
                        <img
                          src={item.image}
                          style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "13px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "10px",
                          }}
                        >
                          <span style={{ fontSize: "10px" }}>{item.title}</span>
                          <span> $ {item.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
              <Link to="/cart">
                <button
                  style={{
                    width: "170px",
                    height: "25px",
                    borderRadius:'10px',
                    alignSelf: "center",
                    color: "white",
                    backgroundColor: "green",
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft:'15px'
                  }}
                > Go to Cart</button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
