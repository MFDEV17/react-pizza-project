import React from "react";
import CartListItem from "./CartListItem";
import { useSelector } from "react-redux";
import { getOrderList } from "../../../redux/cartSlice";

const CartContentList = () => {
  const orderList = useSelector(getOrderList);

  return (
    <div className="content__items">
      {orderList.map((i) => (
        <CartListItem
          orderPizzaName={i.name}
          pizzaSize={i.size}
          pizzaDoughType={i.dough}
        />
      ))}
    </div>
  );
};

export default CartContentList;
