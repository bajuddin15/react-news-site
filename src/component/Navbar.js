import React, { useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <div class="container">
            <Link className="navbar-brand hero text-warning" to="#">
              News Monkey
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
                <li class="nav-item mx-2">
                  <Link
                    className="nav-link text-white "
                    aria-current="page"
                    to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/business">
                    Business
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/general">
                    General
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/health">
                    Health
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/science">
                    Science
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/sports">
                    Sports
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link className="nav-link text-white" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-success mx-3 px-3" type="submit">
                  Sign Up
                </button>
                <button class="btn btn-outline-success mx-3 px-4" type="submit">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
