import React from "react";
import "./App.css";
import PizzaTable from "./components/PizzaTable";
import UserActionsBar from "./UserActionsBar";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";

function App() {
  return (
    <ScreenClassProvider className="App">
      <PizzaTable />
      <br />
      <UserActionsBar />
    </ScreenClassProvider>
  );
}

export default App;
