import React from "react";
import { Container, Row, Col } from "react-grid-system";
import orderHistory from "../orderHistory";
import cellColor from "../formatters/cellColor";
import toppings from "../formatters/toppings";

import moment from "moment";

function OrderHistory() {
  console.log(orderHistory);
  return (
    <Container fluid>
      <h1 style={{ textAlign: "center" }}>Order History</h1>
      <Row justify="center">
        <Col className="pizza-table-col" sm={2}>
          Order Date/Time
        </Col>
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
            <p>{moment(order.date).format("MM/DD/YYYY, h:mm a")}</p>
          </Col>
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
