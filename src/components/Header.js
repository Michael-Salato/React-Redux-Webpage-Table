import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const form = useSelector((state) => state.form);

  let numPizzas = 0;
  if (form.pizzaForm && form.pizzaForm.values) {
    numPizzas = form.pizzaForm.values.pizzas.length;
  }

  return (
    <header className="header">
      <p>Welcome to the Pizzeria! Pizzas: {numPizzas}</p>
    </header>
  );
}

export default Header;
