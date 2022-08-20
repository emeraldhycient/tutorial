import React from "react";
import styles from "./shop.module.css";

function Product({ title, image }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.img} alt="" />
      <h1 className={styles.title}>{title}</h1>
      <div>3.4 rating</div>
      <button>shop now</button>
    </div>
  );
}

export default Product;
