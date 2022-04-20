import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";
import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";
//import Page1 from "./components/Page1";
//import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Estudante
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/createStudent" className="dropdown-item">
                      Criar Estudante
                  </Link>
                </li>
                <li>
                  <Link to="/listStudent" className="dropdown-item">
                      Listar Estudantes
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/createProfessor" className="dropdown-item">
                      Criar Professor
                  </Link>
                </li>
                <li>
                  <Link to="/listProfessor" className="dropdown-item">
                      Listar Professores
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
