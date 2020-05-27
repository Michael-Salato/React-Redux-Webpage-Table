import React from "react";
import { Container, Row, Col } from "react-grid-system";
import renderPizzas from "./RenderPizzas";
import PizzaRow from "./PizzaRow";
import { connect } from "react-redux";
import { addRow } from "../actions";

import { Field, FieldArray, reduxForm } from "redux-form";

function PizzaTable(props) {
  const { handleSubmit, invalid, pristine, reset, submitting } = props;
  return (
    <Container fluid>
      <form onSubmit={handleSubmit}>
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
})(PizzaTable);

// React-Redux version
// class PizzaTable extends React.Component {
//   constructor() {
//     super();

//     this.submitOrder = this.submitOrder.bind(this);
//   }

//   submitOrder() {
//     alert(
//       "Order Submitted!\nTotal of " + this.props.pizzas.length + " pizza(s)."
//     );
//   }

//   orderHistory() {
//     alert("Opening Order History...");
//   }

//   render() {
//     const pizzaComponents = this.props.pizzas.map((pizza) => {
//       return <PizzaRow key={pizza.id} pizza={pizza} />;
//     });

//     return (
//       <Container fluid>
// <Row justify="center">
//   <Col className="pizza-table-col" sm={1}>
//     Pepperoni
//   </Col>
//   <Col className="pizza-table-col" sm={1}>
//     Sausage
//   </Col>
//   <Col className="pizza-table-col" sm={1}>
//     Spinach
//   </Col>
//   <Col className="pizza-table-col" sm={1}>
//     Size
//   </Col>
//   <Col className="pizza-table-col" sm={2}>
//     Special Instructions
//   </Col>
//   <Col className="pizza-table-col" sm={1}>
//     Amount
//   </Col>
// </Row>
//         {pizzaComponents}
//         <Row justify="center">
//           <Col sm={7}>
//             <button onClick={() => this.props.addRow()}>+ New Row</button>
//           </Col>
//         </Row>
//         <Row justify="center">
//           <button onClick={this.submitOrder}>Submit Order</button>&nbsp;&nbsp;
//           <button onClick={this.orderHistory}>Order History</button>
//         </Row>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas,
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     addRow,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps())(PizzaTable);
