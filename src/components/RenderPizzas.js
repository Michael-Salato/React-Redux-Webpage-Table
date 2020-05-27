import React from "react";
import { Row, Col } from "react-grid-system";
import { Field } from "redux-form";

function cellColor(index) {
  return index % 2 !== 0 ? "#E9EBF5" : "#CFD5EA";
}

function renderPizzas({ fields }) {
  return (
    <React.Fragment>
      {fields.map((member, index) => (
        <Row key={index} justify="center">
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field
              name={`${member}.pepperoni`}
              component="input"
              type="checkbox"
            />
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field
              name={`${member}.sausage`}
              component="input"
              type="checkbox"
            />
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field
              name={`${member}.spinach`}
              component="input"
              type="checkbox"
            />
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field name={`${member}.size`} component="select">
              <option />
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </Field>
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={2}
          >
            <Field
              name={`${member}.instructions`}
              component="input"
              type="text"
            />
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field
              name={`${member}.amount`}
              component="input"
              type="number"
              min="0"
              max="10"
            />
          </Col>
        </Row>
      ))}
      <Row justify="center">
        <Col sm={7}>
          <button type="button" onClick={() => fields.push()}>
            + New Row
          </button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default renderPizzas;
