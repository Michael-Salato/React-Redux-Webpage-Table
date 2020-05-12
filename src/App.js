import React from 'react';
import './App.css';
import NewPizza from './NewPizza';
import UserActionsBar from './UserActionsBar';

function App() {
  return (
    <div className="App">
      <div>
        <table>
          <tr>
            <th>Pepperoni</th>
            <th>Sausage</th>
            <th>Spinach</th>
            <th>Size</th>
            <th>Special Instructions</th>
            <th>Amount</th>
          </tr>
          <NewPizza />
          <NewPizza />
        </table>
      </div><br />
      <div>
        <UserActionsBar />
      </div>
      
    </div>
  );
}

export default App;
