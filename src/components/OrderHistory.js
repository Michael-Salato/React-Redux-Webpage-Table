import React from "react";
import { Container, Row, Col } from "react-grid-system";
import orderHistory from "../orderHistory";
import cellColor from "../formatters/cellColor";
import toppings from "../formatters/toppings";

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
          <Col
            sm={2}
            className="pizza-cell"
            style={{ backgroundColor: cellColor(index) }}
          >
            <p>{toppings(order)}</p>
          </Col>
          <Col
            sm={1}
            className="pizza-cell"
            style={{ backgroundColor: cellColor(index) }}
          >
            <p>{order.size}</p>
          </Col>
          <Col
            sm={2}
            className="pizza-cell"
            style={{ backgroundColor: cellColor(index) }}
          >
            <p>{order.instructions ? order.instructions : "none"}</p>
          </Col>
          <Col
            sm={1}
            className="pizza-cell"
            style={{ backgroundColor: cellColor(index) }}
          >
            <p>{order.amount}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default OrderHistory;
