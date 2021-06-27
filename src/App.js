import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/Pages/HomePage.js";
import HowToPlay from "./components/Pages/HowToPlay.js";
import Play from "./components/Pages/Play.js";
import Header from "./components/Layout/Header.js";


function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/howtoplay" component={ HowToPlay } />
        <Route path="/play" component={ Play } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
