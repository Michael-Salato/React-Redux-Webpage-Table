import React from "react";
import { Container, Row, Col } from "react-grid-system";
import PizzaRow from "./PizzaRow";
import { connect } from "react-redux";
import { addRow } from "../actions";

// React-Redux version
class PizzaTable extends React.Component {
  constructor() {
    super();

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
    const pizzaComponents = this.props.pizzas.map((pizza) => {
      return <PizzaRow key={pizza.id} pizza={pizza} />;
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
        {pizzaComponents}
        <Row justify="center">
          <Col sm={7}>
            <button onClick={() => this.props.addRow()}>+ New Row</button>
          </Col>
        </Row>
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

const mapDispatchToProps = () => {
  return {
    addRow,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PizzaTable);

// React only version
/**
class PizzaTable extends React.Component {
  constructor() {
    super();
    this.state = {
      pizzas: [{ id: 1 }],
    };

    this.newRow = this.newRow.bind(this);
  }

  newRow() {
    this.setState((prevState) => {
      let updatedPizzas = prevState.pizzas.slice();
      updatedPizzas.push({ id: updatedPizzas.length + 1 });

      return {
        pizzas: updatedPizzas,
      };
    });
  }

  render() {
    const pizzaComponents = this.state.pizzas.map((pizza) => {
      return <PizzaRow key={pizza.id} pizza={pizza} />;
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
        {pizzaComponents}
        <Row justify="center">
          <Col sm={7}>
            <button onClick={this.newRow}>+ New Row</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PizzaTable;
*/
