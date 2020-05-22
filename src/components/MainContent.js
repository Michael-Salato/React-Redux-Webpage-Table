import React from "react";
import PizzaTable from "./PizzaTable";
import UserActionsBar from "./UserActionsBar";

class MainContent extends React.Component {
  render() {
    return (
      <main className="main-content">
        <PizzaTable />
        <br />
        <UserActionsBar />
      </main>
    );
  }
}

export default MainContent;
