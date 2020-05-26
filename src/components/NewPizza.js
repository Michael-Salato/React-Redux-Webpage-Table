import React from "react";
import { Row, Col } from "react-grid-system";

function NewPizza(props) {
  const cellColor = props.pizza.id % 2 === 0 ? "#E9EBF5" : "#CFD5EA";

  return (
    <Row justify="center" id={"pizzaRow-" + props.pizza.id}>
      <Col
        className="new-pizza-col"
        style={{ backgroundColor: cellColor }}
        sm={1}
      >
        <input type="checkbox" />
      </Col>
      <Col
        className="new-pizza-col"
        style={{ backgroundColor: cellColor }}
        sm={1}
      >
        <input type="checkbox" />
      </Col>
      <Col
        className="new-pizza-col"
        style={{ backgroundColor: cellColor }}
        sm={1}
      >
        <input type="checkbox" />
      </Col>
      <Col
        className="new-pizza-col"
        style={{ backgroundColor: cellColor }}
        sm={1}
      >
        <select>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </Col>
      <Col
        className="new-pizza-col"
        style={{ backgroundColor: cellColor }}
        sm={2}
      >
        <input type="text" />
      </Col>
      <Col
        className="new-pizza-col"
        style={{ backgroundColor: cellColor }}
        sm={1}
      >
        <input type="number" min="0" max="10" />
      </Col>
    </Row>
  );
}

export default NewPizza;
