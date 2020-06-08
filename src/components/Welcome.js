import React from "react";

function Welcome(props) {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Welcome to the Pizzeria!</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => props.history.push("/orderpizza")}>
          Order Pizza
        </button>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
