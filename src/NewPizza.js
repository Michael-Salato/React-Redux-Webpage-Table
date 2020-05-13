import React from 'react';
import {Row, Col} from 'react-grid-system';

function NewPizza() {
    return(
        <Row justify="start" debug>
            <Col sm={0.7} debug>
                <input type="checkbox" />
            </Col>
            <Col sm={0.7} debug>
                <input type="checkbox" />
            </Col>
            <Col sm={0.7} debug>
                <input type="checkbox" />
            </Col>
            <Col sm={0.7} debug>
                <select>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </Col>
            <Col sm={2} debug>
                <input type="text" />
            </Col>
            <Col sm={0.7} debug>
                <input type="number" min="0" max="10"/>
            </Col>
        </Row>
    );
}

export default NewPizza;