import React from 'react';
import './App.css';
import NewPizza from './NewPizza';
import UserActionsBar from './UserActionsBar';
import {ScreenClassProvider, Container, Row, Col} from 'react-grid-system';

function App() {
  return (
    <ScreenClassProvider className="App">
      <Container fluid>
        <Row justify="start" debug>
          <Col sm={0.7}  debug>Pepperoni</Col>
          <Col sm={0.7} debug>Sausage</Col>
          <Col sm={0.7} debug>Spinach</Col>
          <Col sm={0.7} debug>Size</Col>
          <Col sm={2} debug>Special Instructions</Col>
          <Col sm={0.7} debug>Amount</Col>
        </Row>
        <NewPizza />
        <NewPizza /><br />
        <Row justify="start" debug>
          <UserActionsBar />
        </Row>
      </Container>
    </ScreenClassProvider>
  );
}

export default App;
