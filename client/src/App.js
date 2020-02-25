import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";
import NavTabs from "./components/navigation/NavTabs.js";
import Home from "./pages/Home.js";
import Gratitude from "./pages/Gratitude.js";
import Inspiration from "./pages/Inspiration.js";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CenteredTabs from "../src/components/Tabs";







function App() {
  return <Router>
    <CenteredTabs />
    <Route exact path="/" component={Home} />
    <Route exact path="/gratitude" component={Gratitude} />
    <Route exact path="/inspiration" component={Inspiration} />
  </Router>;
}

export default App;
