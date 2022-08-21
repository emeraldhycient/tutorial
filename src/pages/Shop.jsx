import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Product from "../components/shop/Product";
import { Container, Row } from "react-bootstrap";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <section>
      <Header />
      <Container variant="fluid" style={{ marginTop: "20px" }}>
        <Row>
          {products.length > 0 ? (
            products.map((product) => <Product product={product} />)
          ) : (
            <div>loading...</div>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Shop;
