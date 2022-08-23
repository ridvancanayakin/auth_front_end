import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function CustomNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link px-5 " to={"/"}>
                Login <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to={"/users"}>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to={"/activeUsers"}>
                Active Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to={"/selectTime"}>
                Registered Users Within Time Period
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to={"/unregisteredUsers"}>
                Users With Expired Confirmation Tokens
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to={"/selectDate"}>
                Avarage Register Time
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" className="btn btn-outline-danger">
            Quit
          </button>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
