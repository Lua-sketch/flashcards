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
                  props.location.pathname === "/trigonometria" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/trigonometria">
                  Trigonometria
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/números_complexos" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/números_complexos">
                  Números Complexos
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
