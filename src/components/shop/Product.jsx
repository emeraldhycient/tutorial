import React, { useState } from "react";
import styles from "./shop.module.css";
import { Button, Card, Col } from "react-bootstrap";
import { setStorage, getStoredValue } from "../../utils/storgeHelper";

function Product({ product }) {
  const { title, image, category, price, id, description, rating } = product;
  // defined a state , and used the getStoredValue function to get the value from localStorage, if not found, return []
  const [carts, setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);

  const handleClick = () => {
    // create a new array and push the new product to the array
    const newCart = [...carts, { id, title, image, category, price, qty: 1 }];
    //add the new cart to the storage,
    console.log(setStorage("cart", JSON.stringify(newCart)));
    //update the state
    setcarts(newCart);
  };

  return (
    <Col xs={12} md={3}>
      <Card style={{ width: "200px", marginBottom: "10px" }}>
        <Card.Img variant="top" style={{ height: "200px" }} src={image} />
        <Card.Body>
          <Card.Title className="h6">{title}</Card.Title>
          <Card.Text>
            <small>category : {category}</small>
            <small>price : ${price}</small>
            <br />
            <small className="text-warning">Rating {rating.rate}</small>
          </Card.Text>
          <Button variant="success" onClick={handleClick}>
            shop now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
