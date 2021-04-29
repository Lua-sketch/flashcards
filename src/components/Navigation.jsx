import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css"

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Flashcards
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Início
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/revisão_mat" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/revisão_mat">
                  Revisão Matemática
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/álgebra_linear" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/álgebra_linear">
                  Álgebra Linear
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/comp_clássica_python" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/comp_clássica_python">
                  Computação Clássica e Python
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/mecânica_quântica" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/mecânica_quântica">
                  Mecânica Quântica
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
