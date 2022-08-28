import { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { getStoredValue } from "../../utils/storgeHelper";
import { Badge } from "react-bootstrap";

function Header() {
  const [carts, setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <ul className={styles.list}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/shops">Shops</a>
        </li>
        <li>
          <a href="/carts">
            Carts <Badge bg="warning">{carts.length} </Badge>
          </a>
        </li>
      </ul>
      <button className={styles.button}>
        <a href="/shop">Shop Now</a>
      </button>
    </nav>
  );
}

export default Header;
