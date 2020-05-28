function validate(values) {
  const errors = {};

  if (!values.pizzas || !values.pizzas.length) {
    errors.pizzas = { _error: "Enter at least one pizza" };
  } else {
    const pizzaArrayErrors = [];
    values.pizzas.forEach((pizza, index) => {
      const pizzaErrors = {};

      if (!pizza.amount) {
        pizzaErrors.amount = "Required";
        pizzaArrayErrors[index] = pizzaErrors;
      } else if (Number(pizza.amount) < 1 || Number(pizza.amount) > 10) {
        pizzaErrors.amount = "Amount must be between 1 & 10";
        pizzaArrayErrors[index] = pizzaErrors;
      }

      return pizzaErrors;
    });
    if (pizzaArrayErrors.length) {
      errors.pizzas = pizzaArrayErrors;
    }
  }
  return errors;
}

export default validate;
