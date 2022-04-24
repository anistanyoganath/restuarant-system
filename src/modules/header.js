import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import store from "../reduxenv/store";
const Header = () => {
  const [cartList, updateCart] = useState(store.getState().cartList);
  store.subscribe(() => updateCart(store.getState().cartList));
  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        backgroundColor: "#121619",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        paddingLeft: "10%",
        color: "aliceblue",
      }}
    >
      <div style={{ paddingLeft: 50 }}>
        <Link
          className="header-link"
          to="/"
          style={{ paddingRight: 50, textDecoration: "none" }}
        >
          Home
        </Link>
        <Link className="header-link" to="/cart">
          Cart <span>{cartList.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
