import "./Navigation.scss";
import Cart from "../../molecules/Cart/index";
import React, { useState } from "react";
import Source from "../../../injection.json";

const TopNavigation = () => {
  const [isCartMenuOpen, IsCartMenuOpen] = useState(false);

  const toggleCart = () => {
    IsCartMenuOpen(!isCartMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation__header-block">
        <div className="renome">{Source.navigation.title}</div>
      </div>
      <div className="navigation__cart-block">
        {isCartMenuOpen && <Cart cart={Source.cartDropDown} />}
        <img
          className="navigation__shopping-cart"
          src={Source.navigation.cart}
          alt="shopping-cart"
          onClick={() => toggleCart()}
        />
        <div className="navigation__cart-count">
          {Source.navigation.cart_content}
        </div>
        <div className="navigation__divider">{Source.navigation.divider}</div>
      </div>
    </nav>
  );
};
export default TopNavigation;
