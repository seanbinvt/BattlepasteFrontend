import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" // Public CSS framework available for use for quick frontend styling
import "./App.css"

import Navbar from "./components/navbar.component"
import Home from "./components/home.component"
import BattlePaste from "./components/battlepaste.component"
import SubmitBattlePaste from "./components/submitBattlePaste.component.js"
import ViewBattlePaste from "./components/viewBattlePaste.component"
import SearchBattlePaste from "./components/searchBattlePaste.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/battlepaste" exact component={BattlePaste} />
        <Route path="/battlepaste/submit" exact component={SubmitBattlePaste} />
        <Route path="/battlepaste/:server/:id" exact component={ViewBattlePaste} />
        <Route path="/battlepaste/search" exact component={SearchBattlePaste} />
      </div>
    </Router>
  );
}

export default App;

// /        <Route path="/country/:country/:information" exact component={CountryInfo} />

/*
        <Route path="/battlepaste/:server/:id" exact component={ViewBattlePaste} />
                <Route path="/battlepaste" component={BattlePaste} />
*/