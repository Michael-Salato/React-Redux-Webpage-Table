import React from "react";
import { Container, Row, Col } from "react-grid-system";
import renderPizzas from "./RenderPizzas";
import Pizza from "../Pizza";
import validate from "../validate";

import { FieldArray, reduxForm } from "redux-form";

function OrderPizza(props) {
  const { handleSubmit, invalid, pristine, reset, submitting } = props;
  return (
    <Container fluid>
      <h1 style={{ textAlign: "center" }}>Order Pizza</h1>
      <form onSubmit={handleSubmit}>
        <Row justify="center">
          <Col className="pizza-table-col" sm={1} offset={{ sm: 0.6 }}>
            Pepperoni
          </Col>
          <Col className="pizza-table-col" sm={1}>
            Sausage
          </Col>
          <Col className="pizza-table-col" sm={1}>
            Spinach
          </Col>
          <Col className="pizza-table-col" sm={1}>
            Size
          </Col>
          <Col className="pizza-table-col" sm={2}>
            Special Instructions
          </Col>
          <Col className="pizza-table-col" sm={1}>
            Amount
          </Col>
        </Row>
        <FieldArray name="pizzas" component={renderPizzas} />
        <Row justify="center">
          <button type="submit">Submit Order</button>
          &nbsp;&nbsp;
          <button type="button" onClick={reset}>
            Clear Order
          </button>
        </Row>
      </form>
    </Container>
  );
}

export default reduxForm({
  form: "pizzaForm",
  initialValues: {
    pizzas: [new Pizza()],
  },
  validate,
})(OrderPizza);
