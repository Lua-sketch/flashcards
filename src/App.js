import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Início, Navigation, RevisãoMat, AlgebraLinear, CompClássicaPython, MecânicaQuântica } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Início />} />
          <Route path="/revisão_mat" exact component={() => <RevisãoMat />} />
          <Route path="/álgebra_linear" exact component={() => <AlgebraLinear />} />
          <Route path="/comp_clássica_python" exact component={() => <CompClássicaPython />} />
          <Route path="/mecânica_quântica" exact component={() => <MecânicaQuântica />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
