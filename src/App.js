import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './App.css';
import OrderForm from './OrderForm';
import CompletedOrder from './CompletedOrder';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders/:id">
            <CompletedOrder/>
          </Route>
          <Route path="/">
            <OrderForm/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}



export default App;
