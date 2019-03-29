import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import RegistrationForms from "./components/Form";

import Layouts from "./components/Layout";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Layouts display={<RegistrationForms />} displayed="Packages" />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
