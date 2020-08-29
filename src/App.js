import React from "react";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="about" />
        <Portfolio path="portfolio" />
        <Contact path="contact" />
      </Router>
    </div>
  );
};

export default App;
