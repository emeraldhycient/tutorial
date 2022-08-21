import styles from "./header.module.css";
import logo from "../../assets/logo.png";

function Header() {
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
          <a href="/carts">Carts</a>
        </li>
      </ul>
      <button className={styles.button}>
        <a href="/shop">Shop Now</a>
      </button>
    </nav>
  );
}

export default Header;
