import React from "react";
import { useSelector } from "react-redux";
import { getCount, getSum } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartBottom = () => {
  const count = useSelector(getCount);
  const sum = useSelector(getSum);
  const nav = useNavigate();

  return (
    <div className="cart__bottom">
      <div className="cart__bottom-details">
        <span>
          {" "}
          Всего пицц: <b>{count} шт.</b>{" "}
        </span>
        <span>
          {" "}
          Сумма заказа: <b>{sum} ₽</b>{" "}
        </span>
      </div>
      <div className="cart__bottom-buttons">
        <span className="button button--outline button--add go-back-btn">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span onClick={() => nav("/")}>Вернуться назад</span>
        </span>
        <div className="button pay-btn">
          <span>Оплатить сейчас</span>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;