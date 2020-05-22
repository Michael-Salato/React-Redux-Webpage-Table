import React from "react";
import { Container, Row, Col } from "react-grid-system";
import NewPizza from "./NewPizza";
import "./PizzaTable.css";

function PizzaTable() {
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
      <NewPizza />
      <NewPizza />
      <NewPizza />
      <NewPizza />
      <NewPizza />
    </Container>
  );
}

export default PizzaTable;
