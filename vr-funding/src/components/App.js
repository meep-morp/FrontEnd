import React from "react";
import Nav from "./nav";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./styles/css/index.css";
import PrivateRoute from "./utils/PrivateRoute";
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Router>
        {/* HOME PAGE -- SIGNUP & LOGIN  */}
        <Route path="/" exact>
          <Nav />
        </Route>
        <Route path="/Login">
            <Login/>
        </Route>

        {/*  DASHBOARD  */}
        <PrivateRoute path="/dashboard"></PrivateRoute>
      </Router>
    </div>
  );
}

export default App;
