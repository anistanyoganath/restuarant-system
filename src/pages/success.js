import React from "react";
import "../styles/item.css";
import { Link } from "react-router-dom";
export default function Success() {
  return (
    <div
      className="menuItem"
      style={{
        margin: "auto",
        marginTop: "5%",
        padding: 10,
      }}
    >
      <div style={{ paddingTop: "30%" }}>
        <h1 style={{ fontWeight: "bold" }}>We have received your order!</h1>
        <p>Stay tuned for further update..</p>
        <Link to={"/"}>
          <button className="btn  btn-primary">Go back.</button>
        </Link>
      </div>
    </div>
  );
}
