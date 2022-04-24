import React, { useState } from "react";
import { addtocart, removefromcart } from "../reduxenv/action";
import store from "../reduxenv/store";
export default function Item(item) {
  const [cartList, updateCart] = useState(store.getState().cartList);
  store.subscribe(() => updateCart(store.getState().cartList));
  const data = item.item;
  let added = cartList.includes(data);
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${data.image})` }}> </div>
      <h1> {data.name} </h1>
      <p> ${data.price} </p>
      <button
        className="btn"
        onClick={() => {
          added ? removefromcart(data) : addtocart(data);
        }}
      >
        {added ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
}
