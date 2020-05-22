import React from "react";
import { Row, Col } from "react-grid-system";

function NewPizza() {
  return (
    <Row justify="center">
      <Col className="new-pizza-col" sm={1}>
        <input type="checkbox" />
      </Col>
      <Col className="new-pizza-col" sm={1}>
        <input type="checkbox" />
      </Col>
      <Col className="new-pizza-col" sm={1}>
        <input type="checkbox" />
      </Col>
      <Col className="new-pizza-col" sm={1}>
        <select>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </Col>
      <Col className="new-pizza-col" sm={2}>
        <input type="text" />
      </Col>
      <Col className="new-pizza-col" sm={1}>
        <input type="number" min="0" max="10" />
      </Col>
    </Row>
  );
}

export default NewPizza;
