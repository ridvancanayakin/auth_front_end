import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import axios from "axios";

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isLogin, setisLogin] = useState(false)

    const handleSubmit= async (event) => {
        event.preventDefault();
        console.log("email:"+email+"   pass: "+password);
        await axios.post('http://localhost:8080/auth/login', {
            email:email,
            password:password
          })
          .then(function (response) {
            localStorage.setItem("jwt",response.data);
            console.log(response);
            setisLogin(true);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


  return (
    <div className="m-3">
        { isLogin && <Navigate to="/home"></Navigate>}
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input onChange={event => setemail(event.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input onChange={event => setpassword(event.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
          </form>
          <Link to={"/forgotPassword"}>Forgot Password?</Link>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
}

export default Login;
