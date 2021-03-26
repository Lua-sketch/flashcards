import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Início, Navigation, Trigonometria, NúmerosComplexos } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Início />} />
          <Route path="/trigonometria" exact component={() => <Trigonometria />} />
          <Route path="/números_complexos" exact component={() => <NúmerosComplexos />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
