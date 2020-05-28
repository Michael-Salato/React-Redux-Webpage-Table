import React from "react";
import PizzaTable from "./PizzaTable";

class MainContent extends React.Component {
  handleNewOrder = (values) => {
    console.log(JSON.stringify(values));
  };

  render() {
    return (
      <main className="main-content">
        <PizzaTable onSubmit={this.handleNewOrder} />
      </main>
    );
  }
}

export default MainContent;
