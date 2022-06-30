import React from "react";
import Categories from "../../components/Categories";
import PizzaList from "../../components/pizzaList/PizzaList";
import ContentWrapper from "./ContentWrapper";

const HomePage = () => {
  return <ContentWrapper components={[<Categories/>, <PizzaList/>]}/>;
};

export default HomePage;
