import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Product from "../components/shop/Product";

function Shop() {
  const [products, setProducts] = useState([]);

  return (
    <section>
      <Header />
      <div>
        <Product />
      </div>
    </section>
  );
}

export default Shop;
