//import react into the bundle
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import "jquery/dist/jquery.min.js";

//include bootstrap npm library into the bundle
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
