const orderHistory = [
  {
    date: new Date(),
    pepperoni: true,
    sausage: true,
    spinach: true,
    size: "medium",
    instructions: "",
    amount: "1",
  },
  {
    pepperoni: true,
    sausage: false,
    spinach: true,
    size: "small",
    instructions: "Half sausage, half pepperoni",
    amount: "1",
  },
  {
    pepperoni: false,
    sausage: false,
    spinach: false,
    size: "large",
    instructions: "",
    amount: "2",
  },
];

export default orderHistory;
