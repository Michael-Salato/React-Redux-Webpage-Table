function toppings(pizza) {
  let pizzaToppings = "";

  if (pizza.pepperoni) {
    pizzaToppings += "Pepperoni";
  }
  if (pizza.sausage) {
    if (pizza.pepperoni) {
      pizzaToppings += ", ";
    }
    pizzaToppings += "Sausage";
  }
  if (pizza.spinach) {
    if (pizza.pepperoni || pizza.sausage) {
      pizzaToppings += ", ";
    }
    pizzaToppings += "Spinach";
  }

  if (pizzaToppings === "") {
    pizzaToppings = "Cheese pizza, seriously?";
  }

  return pizzaToppings;
}

export default toppings;
