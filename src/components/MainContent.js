import React from "react";
import PizzaTable from "./PizzaTable";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MainContent extends React.Component {
  handleNewOrder = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Router>
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route
              path="/orderpizza"
              render={(props) => (
                <PizzaTable {...props} onSubmit={this.handleNewOrder} />
              )}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default MainContent;
