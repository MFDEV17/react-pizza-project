import emptyCartImg from "../../assets/img/empty-cart.png";
import { useNavigate } from "react-router-dom";
import EmptyPageWrapper from "./EmptyPageWrapper";

const EmptyCartPage = () => {
  const nav = useNavigate();

  return (
    <EmptyPageWrapper
      components={[
        <>
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вероятней всего, вы ещё не заказывали пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCartImg} alt="Empty cart" />
          <span className="button button--black">
            <span onClick={() => nav("/")}>Вернуться назад</span>
          </span>
        </>,
      ]}
    />
  );
};

export default EmptyCartPage;
