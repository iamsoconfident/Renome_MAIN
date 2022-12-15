import "./Cart.scss";
import React from "react";
import Source from "../../../injection.json";

const Cart = (component) => {
  return (
    <div className="cartInside">
      <div>{Source.cartDropDown.price}</div>
      <div>{Source.cartDropDown.viewCart}</div>
      <div>{Source.cartDropDown.checkout}</div>
    </div>
  );
};

export default Cart;
