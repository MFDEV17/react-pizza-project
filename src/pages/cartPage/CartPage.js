import CartTitle from "./CartTitle";
import CartContentList from "./CartContentlist";
import CartBottom from "./CartBottom";
import CartWrapper from "./CartWrapper";

const CartPage = () => {
  return (
    <CartWrapper
      components={[<CartTitle />, <CartContentList />, <CartBottom />]}
    />
  );
};

export default CartPage;
