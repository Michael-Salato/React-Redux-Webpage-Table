import React from "react";
import { Container, Row, Col } from "react-grid-system";

class UserActionsBars extends React.Component {
  submitOrder() {
    alert("Order Submitted!");
  }

  orderHistory() {
    alert("Opening Order History...");
  }

  render() {
    return (
      <Container fluid>
        <Row justify="center">
          <button onClick={this.submitOrder}>Submit Order</button>&nbsp;&nbsp;
          <button onClick={this.orderHistory}>Order History</button>
        </Row>
      </Container>
    );
  }
}

export default UserActionsBars;
