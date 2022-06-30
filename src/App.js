import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { fetchPizzas } from "./redux/pizzasSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return <HomePage />;
}

export default App;
