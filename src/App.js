import React from "react";
import "./App.css";
import PizzaTable from "./components/PizzaTable";
import UserActionsBar from "./UserActionsBar";
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ScreenClassProvider className="App">
      <Header />
      <PizzaTable />
      <br />
      <UserActionsBar />
      <Footer />
    </ScreenClassProvider>
  );
}

export default App;
