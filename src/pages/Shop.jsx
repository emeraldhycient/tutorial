import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Product from "../components/shop/Product";

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
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <Product title={product.title} image={product.image} />
          ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </section>
  );
}

export default Shop;
