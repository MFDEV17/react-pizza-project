import HomePage from "./pages/homePage/HomePage";
import { useEffect } from "react";
import { fetchPizzas } from "./redux/pizzasSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { getOrderList } from "./redux/cartSlice";
import EmptyCartPage from "./pages/emptyPage/EmptyCartPage";
import CartPage from "./pages/cartPage/CartPage";

function App() {
  const dispatch = useDispatch();
  const orderList = useSelector(getOrderList);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className={"wrapper"}>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route
            path={"/cart"}
            element={orderList.length === 0 ? <EmptyCartPage /> : <CartPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
