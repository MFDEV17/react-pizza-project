import React from "react";
import Categories from "../components/Categories";
import PizzaList from "../components/pizzaList/PizzaList";

const HomePage = () => {
  return (
    <div className="content">
      <div className="container">
        <Categories/>
        <PizzaList/>
      </div>
    </div>
  );
};

export default HomePage;
