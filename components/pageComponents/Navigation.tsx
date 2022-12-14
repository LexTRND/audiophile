import React, { useEffect, useState } from "react";
import { Nav } from "../../styles/Navigation.style";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import logo from "../../public/audiophile 2.png";

const Navigation = () => {
  const { openCart, open } = useCart();
  const [active, setActive] = useState(false);

  const menuToggle = () => {
    if (!open) setActive(!active);
  };
  const handleClose = () => setActive(false);

  return (
    <Nav>
      {open && <Cart />}

      <div className="menu-buttons">
        <button className="menu" onClick={menuToggle}>
          <FontAwesomeIcon icon={active ? faClose : faBars} className="menu" />
        </button>
      </div>

      <div className="logo">
        <Link href="/">
          <a>
            <Image src={logo} alt="product-image headphones" />
          </a>
        </Link>
      </div>
      <nav className={active ? "open" : "close"}>
        <ul>
          <li>
            <Link href="/">
              <motion.a
                whileHover={{ color: "#d87d4a", cursor: "pointer", scale: 4 }}
                onClick={handleClose}>
                {" "}
                home
              </motion.a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphones">
              <motion.a
                whileHover={{ color: "#d87d4a", cursor: "pointer" }}
                onClick={handleClose}>
                {" "}
                headphones
              </motion.a>
            </Link>
          </li>
          <li>
            <Link href="/products/speakers">
              <motion.a
                whileHover={{ color: "#d87d4a", cursor: "pointer" }}
                onClick={handleClose}>
                {" "}
                speakers
              </motion.a>
            </Link>
          </li>
          <li>
            <Link href="/products/earphones">
              <motion.a
                whileHover={{ color: "#d87d4a", cursor: "pointer" }}
                onClick={handleClose}>
                {" "}
                earphones
              </motion.a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="cart">
        <button onClick={openCart}>
          <img src="/cart.png" alt="" />
        </button>
      </div>
    </Nav>
  );
};

export default Navigation;
