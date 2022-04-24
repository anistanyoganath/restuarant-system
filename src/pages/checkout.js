import React, { useState } from "react";
import "../styles/checkout.css";
import store from "../reduxenv/store";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [total, updatetotal] = useState(store.getState().total);
  store.subscribe(() => updatetotal(store.getState().total));
  return (
    <div>
      {total !== 0 ? (
        <>
          <form className="form"  action="/success">
            <h4>
              Total Price : $<span>{total}</span>
            </h4>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="number" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea type="text" id="address" required />
            </div>

            <button type="submit" className="btn btn-success">
              Place Order!
            </button>
          </form>{" "}
        </>
      ) : (
        <Link to={"/"}>
          <button style={{ marginTop: "25vh" }} className="btn btn-success">
            Add Some Products to place the order..
          </button>
        </Link>
      )}
    </div>
  );
};

export default Checkout;
