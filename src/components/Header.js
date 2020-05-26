import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const numPizzas = useSelector((state) => state.pizzas).length;

  return (
    <header className="header">
      <p>Welcome to the Pizzeria! Pizzas: {numPizzas}</p>
    </header>
  );
}

export default Header;
