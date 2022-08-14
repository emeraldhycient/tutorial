import styles from "./header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Shops</li>
      </ul>
      <button className={styles.button}>Shop Now</button>
    </nav>
  );
}

export default Header;
