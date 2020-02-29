import React from "react";
import ReactDOM from "react-dom";
import 'typeface-montserrat'
import 'typeface-roboto'
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
