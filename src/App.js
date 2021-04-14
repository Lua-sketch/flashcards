import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Início, Navigation, Trigonometria, NúmerosComplexos, AlgebraLinear, CompClássicaPython } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Início />} />
          <Route path="/trigonometria" exact component={() => <Trigonometria />} />
          <Route path="/números_complexos" exact component={() => <NúmerosComplexos />} />
          <Route path="/álgebra_linear" exact component={() => <AlgebraLinear />} />
          <Route path="/comp_clássica_python" exact component={() => <CompClássicaPython />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
