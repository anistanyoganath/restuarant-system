import React, { useState } from "react";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import store from "../reduxenv/store";
import {
  removefromcart,
  clearcart,
  increasequantity,
  decreasequantity,
} from "../reduxenv/action";
const Cart = () => {
  const [cartList, updateCart] = useState(store.getState().cartList);
  store.subscribe(() => updateCart(store.getState().cartList));

  const [total, updateTotal] = useState(store.getState().total);
  store.subscribe(() => updateTotal(store.getState().total));
 
  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <h1>Cart</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td className="quantity">
                      <button
                        className="btn"
                        onClick={() => decreasequantity(item.id)}
                      >
                        -
                      </button>
                      <p>{item.quantity === undefined ? 1 : item.quantity}</p>
                      <button
                        className="btn"
                        onClick={() => increasequantity(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ fontSize: 12 }}
                        className="btn btn-warning"
                        onClick={() => removefromcart(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2>
            Total Price : $<span>{parseInt(total)}</span>
          </h2>
          <button
            style={{ marginRight: 5 }}
            className="btn btn-danger"
            onClick={() => clearcart()}
          >
            Clear Cart
          </button>
          <Link to={"/checkout"}>
            <button className="btn btn-success">Proceed.</button>
          </Link>{" "}
        </>
      ) : (
        <div>
          <h1 style={{ marginTop: "25vh", color: "indianred" }}>
            Cart is Empty!
          </h1>
          <Link to={"/"}>
            <button className="btn btn-primary">Let's Buy Something..</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
