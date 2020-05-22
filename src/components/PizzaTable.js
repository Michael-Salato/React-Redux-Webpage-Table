import React from "react";
import { Container, Row, Col } from "react-grid-system";
import NewPizza from "./NewPizza";

class PizzaTable extends React.Component {
  state = {
    pizzas: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };

  render() {
    const newPizzaComponents = this.state.pizzas.map((pizza) => {
      return <NewPizza key={pizza.id} pizza={pizza} />;
    });

    return (
      <Container fluid>
        <Row justify="center">
          <Col className="pizza-table-col" sm={1}>
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
        {newPizzaComponents}
      </Container>
    );
  }
}

export default PizzaTable;
