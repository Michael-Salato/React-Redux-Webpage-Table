import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const form = useSelector((state) => state.form);

  let numPizzas = 0;
  if (form.pizzaForm && form.pizzaForm.values) {
    form.pizzaForm.values.pizzas.forEach((pizza, index) => {
      numPizzas += Number(pizza.amount);
    });
  }

  return (
    <header>
      <p>Welcome to the Pizzeria! Pizzas: {numPizzas}</p>
      <nav>
        <ul className="nav-links">
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/orderpizza">
            <li>Order Pizza</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
