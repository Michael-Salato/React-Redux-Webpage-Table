import React from "react";
import { Row, Col } from "react-grid-system";
import { Field } from "redux-form";
import Pizza from "../Pizza";
import constants from "../constants";

import renderField from "../renderField";
import renderSelectField from "../renderSelectField";

function cellColor(index) {
  return index % 2 !== 0 ? "#E9EBF5" : "#CFD5EA";
}

function normalizeAmount(value) {
  if (value < constants.MIN_PIZZA_AMOUNT) {
    return constants.MIN_PIZZA_AMOUNT;
  } else if (value > constants.MAX_PIZZA_AMOUNT) {
    return constants.MAX_PIZZA_AMOUNT;
  } else {
    return value;
  }
}

function renderPizzas({ fields, meta: { error } }) {
  return (
    <React.Fragment>
      {error && (
        <Row justify="center">
          <Col sm={6.7}>
            <span className="error">{error}</span>
          </Col>
        </Row>
      )}
      {fields.map((pizza, index) => (
        <Row key={index} justify="center">
          <Col sm={0.6} className="button-delete-container">
            <button
              className="button-delete"
              type="button"
              onClick={() => fields.remove(index)}
            >
              Delete
            </button>
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field
              name={`${pizza}.pepperoni`}
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
              name={`${pizza}.sausage`}
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
              name={`${pizza}.spinach`}
              component="input"
              type="checkbox"
            />
          </Col>
          <Col
            className="new-pizza-col"
            style={{ backgroundColor: cellColor(index) }}
            sm={1}
          >
            <Field name={`${pizza}.size`} component={renderSelectField}>
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
              name={`${pizza}.instructions`}
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
              name={`${pizza}.amount`}
              component={renderField}
              type="number"
              min={constants.MIN_PIZZA_AMOUNT}
              max={constants.MAX_PIZZA_AMOUNT}
              normalize={normalizeAmount}
            />
          </Col>
        </Row>
      ))}
      <Row justify="center">
        <Col sm={6.7}>
          <button
            className="button-new-row"
            type="button"
            onClick={() => fields.push(new Pizza())}
          >
            + New Row
          </button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default renderPizzas;
