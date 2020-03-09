import React from "react";
import { Login } from "./components/Login/Login";
import { Story } from "./components/Story/Story";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/story" component={Story} />
    </Router>
  );
}

export default App;
