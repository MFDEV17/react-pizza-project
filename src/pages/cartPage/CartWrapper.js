import React from "react";

const CartWrapper = ({ components }) => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart">{components.map((c) => c)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;