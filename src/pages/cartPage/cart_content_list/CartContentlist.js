import React from "react";
import CartListItem from "./CartListItem";

const CartContentList = ({ list = [1, 1, 1, 1, 1, 1, 1, 1, 1] }) => {
  return (
    <div className="content__items">
      {list.map((item) => (
        <CartListItem />
      ))}
    </div>
  );
};

export default CartContentList;
