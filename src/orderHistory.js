const date = new Date();

const orderHistory = [
  {
    date: date,
    pepperoni: true,
    sausage: true,
    spinach: true,
    size: "medium",
    instructions: "",
    amount: "1",
  },
  {
    date: date,
    pepperoni: true,
    sausage: true,
    spinach: false,
    size: "small",
    instructions: "Half sausage, half pepperoni",
    amount: "1",
  },
  {
    date: date,
    pepperoni: false,
    sausage: false,
    spinach: false,
    size: "large",
    instructions: "",
    amount: "2",
  },
];

export default orderHistory;
