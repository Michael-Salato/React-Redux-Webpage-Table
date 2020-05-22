import React from "react";
import { Container, Row, Col } from "react-grid-system";

function UserActionsBars() {
  return (
    <Container fluid>
      <Row justify="center" debug>
        <button>Submit Order</button>&nbsp;&nbsp;
        <button>Order History</button>
      </Row>
    </Container>
  );
}

export default UserActionsBars;
