import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import NewPizza from './NewPizza';

function PizzaTable() {
    return(
        <Container fluid>
            <Row justify="center" debug>
                <Col sm={1}  debug>Pepperoni</Col>
                <Col sm={1} debug>Sausage</Col>
                <Col sm={1} debug>Spinach</Col>
                <Col sm={1} debug>Size</Col>
                <Col sm={2} debug>Special Instructions</Col>
                <Col sm={1} debug>Amount</Col>
            </Row>
            <NewPizza />
            <NewPizza />
        </Container>
    );
}

export default PizzaTable;