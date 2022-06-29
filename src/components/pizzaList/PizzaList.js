import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { getPizzas } from "../../redux/pizzasSlice";

const PizzaList = () => {
  const list = useSelector(getPizzas);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {list.map((p) => (
          <PizzaItem
            price={p.price}
            img={p["imageUrl"]}
            sizeList={p.sizes}
            doughList={p.types}
            name={p.name}
          />
        ))}
      </div>
    </>
  );
};

export default PizzaList;