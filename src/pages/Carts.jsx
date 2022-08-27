import React, { useState } from "react";
import Cart from "../components/cart/Cart";
import Header from "../components/common/Header";
import { getStoredValue } from "../utils/storgeHelper";
import { Container, Row } from "react-bootstrap";

function Carts() {
  const [carts, setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);
  //console.log(carts);
  return (
    <div>
      <Header />
      <Container variant="fluid" style={{ marginTop: "20px" }}>
        <Row>
          {carts.length > 0
            ? carts.map((item, index) => <Cart product={item} />)
            : "No data found"}
        </Row>
      </Container>
    </div>
  );
}

export default Carts;
