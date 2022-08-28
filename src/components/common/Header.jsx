import { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { getStoredValue } from "../../utils/storgeHelper";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [carts, setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);

  return (
    <>
      <Navbar bg="info" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/shops">Shops</Nav.Link>
            <Nav.Link href="/carts">
              Carts <Badge bg="warning">{carts.length} </Badge>
            </Nav.Link>
            <Nav>
              <Button variant="sucess">Login</Button>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
