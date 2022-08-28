import React, { useState } from "react";
import styles from "../shop/shop.module.css";
import { Button, Card, Col } from "react-bootstrap";
import { setStorage, getStoredValue } from "../../utils/storgeHelper";
import Counter from "./Counter";

function Cart({ product }) {
  const { title, image, category, price, id, qty, rating } = product;
  // defined a state , and used the getStoredValue function to get the value from localStorage, if not found, return []
  const [carts, setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);

  const handleClick = () => {
    // create a new array and push the new product to the array
    const newCart = [...carts];

    //loop over newCart to remove the current object, using filter function

    const newerCart = newCart.filter((item) => item.id !== id);

    //add the new cart to the storage,
    console.log(setStorage("cart", JSON.stringify(newerCart)));
    //update the state
    setcarts(newerCart);
  };

  return (
    <Col xs={12} md={4}>
      <Card style={{ width: "300px", marginBottom: "10px" }}>
        <Card.Img variant="top" style={{ height: "200px" }} src={image} />
        <Card.Body>
          <Card.Title className="h6">{title}</Card.Title>
          <Card.Text>
            <small>category : {category}</small>
            <small>price : ${price}</small>
            <br />
            <small>qty : {qty}</small>
            <br />
          </Card.Text>
          <div style={{ display: "flex" }}>
            <Button variant="warning" onClick={handleClick}>
              remove item
            </Button>
            {/* pass qty and id prop to the counter component to allow us interact with the cart item*/}
            <Counter qty={qty} id={id} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cart;
