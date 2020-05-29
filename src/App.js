import React from "react";
import "./App.css";
import { ScreenClassProvider } from "react-grid-system";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderPizza from "./components/OrderPizza";
import OrderHistory from "./components/OrderHistory";
import Welcome from "./components/Welcome";

class App extends React.Component {
  handleNewOrder = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Router>
        <ScreenClassProvider>
          <div className="App">
            <Header />
            <main>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route
                  path="/orderpizza"
                  render={(props) => (
                    <OrderPizza {...props} onSubmit={this.handleNewOrder} />
                  )}
                />
                <Route path="/orderhistory" component={OrderHistory} />
              </Switch>
            </main>
            <Footer />
          </div>
        </ScreenClassProvider>
      </Router>
    );
  }
}

export default App;
