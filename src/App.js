import React from "react";
import "./App.css";
import { ScreenClassProvider } from "react-grid-system";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaTable from "./components/PizzaTable";
import Welcome from "./components/Welcome";

class App extends React.Component {
  handleNewOrder = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Router>
        <ScreenClassProvider>
          <Header />
          <main>
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
          <Footer />
        </ScreenClassProvider>
      </Router>
    );
  }
}

export default App;
