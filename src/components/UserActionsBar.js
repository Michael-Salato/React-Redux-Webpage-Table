import React from "react";
import { Container, Row } from "react-grid-system";
import { connect } from "react-redux";

class UserActionsBar extends React.Component {
  constructor(props) {
    super(props);

    this.submitOrder = this.submitOrder.bind(this);
  }

  submitOrder() {
    alert(
      "Order Submitted!\nTotal of " + this.props.pizzas.length + " pizza(s)."
    );
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

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
  };
};

export default connect(mapStateToProps)(UserActionsBar);
