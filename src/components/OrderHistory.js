import React from "react";
import { Container, Row, Col } from "react-grid-system";
import orderHistory from "../orderHistory";

function OrderHistory() {
  return (
    <Container fluid>
      <h1>Order History</h1>
      <Row justify="center">
        <Col className="pizza-table-col" sm={2}>
          Toppings
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
      {orderHistory.map((order, index) => (
        <Row key={"orderHistory-" + index} justify="center">
          <Col sm={2}>
            <p>
              {order.pepperoni ? "Pepperoni" : null} {order.sausage}
            </p>
          </Col>
          <Col sm={1}>
            <p>{order.size}</p>
          </Col>
          <Col sm={2}>
            <p>{order.instructions}</p>
          </Col>
          <Col sm={1}>
            <p>{order.amount}</p>
          </Col>
        </Row>
      ))}
      <p>{JSON.stringify(orderHistory)}</p>
    </Container>
  );
}

export default OrderHistory;
