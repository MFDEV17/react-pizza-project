import PizzaItem from "./PizzaItem";

const PizzaList = ({ list = [1, 1, 1, 1, 1, 1, 1, 1, 1] }) => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {list.map((p) => (
          <PizzaItem />
        ))}
      </div>
    </>
  );
};

export default PizzaList;