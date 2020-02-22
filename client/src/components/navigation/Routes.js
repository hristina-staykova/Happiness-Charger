import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs.js";
import Home from "../pages/Home.js";
import Gratitude from "../pages/Gratitude.js";
import Inspiration from "../pages/Inspiration.js";

function Routes() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/gratitude" component={Gratitude} />
        <Route exact path="/inspiration" component={Inspiration} />
      </div>
    </Router>
  );
}

export default Routes;
