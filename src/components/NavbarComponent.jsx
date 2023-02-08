import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import avatar from "../assets/avatar.png";
import logo from "../assets/netflix_logo.png";

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar fixed="top" expand="lg" className="" id="nav-bar">
      <img src={logo} alt="netflix" className="netflix-logo" />
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/details">
            <div
              className={`nav.link pr-3 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </div>
          </Link>
          <Link to="/tvshows">
            <div
              className={`pr-3 nav.link ${
                location.pathname === "/tvshows" ? "text-white" : ""
              }`}
            >
              TV Shows
            </div>
          </Link>
          <Link to="/movies">
            <div
              className={`pr-3 nav.link ${
                location.pathname === "/movies" ? "text-white" : ""
              }`}
            >
              Movies
            </div>
          </Link>
          <Link to="/recently">
            <div
              className={`nav.link pr-3 ${
                location.pathname === "/recently" ? "active" : ""
              }`}
            >
              Recently Added
            </div>
          </Link>
          <Link to="/mylist">
            <div
              className={`nav.link pr-3 ${
                location.pathname === "/mylist" ? "active" : ""
              }`}
            >
              My list
            </div>
          </Link>
        </Nav>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>

        <p className="mx-3 mb-0">KIDS</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>

        <NavDropdown
          title={<img src={avatar} alt="avatar icon" />}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
