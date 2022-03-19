import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-black bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Quizup
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data_bs_toggle="collapse"
            data_bs_target="#navbarSupportedContent"
            aria_controls="navbarSupportedContent"
            aria_expanded="false"
            aria_label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria_current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data_bs_toggle="dropdown"
                  aria_expanded="false"
                >
                  Quiz
                </a>
                <ul className="dropdown-menu" aria_labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"> Contact </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success mx-2" type="submit">
                Signup
              </button>
              <button className="btn btn-outline-success mx-2" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
