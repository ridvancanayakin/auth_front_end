import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";

function ForgotPassword() {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("email:" + email);
    /*      await axios.post('http://localhost:8080/auth/login', {
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
          }); */
  };

  const loginPage = (event) => {
    event.preventDefault();
    console.log("button");
    navigate("/");
  };

  return (
    <div>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" className="mt-5">
                Email address
              </label>
              <input
                onChange={(event) => setemail(event.target.value)}
                type="email"
                className="form-control mt-3 mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <button type="submit"  className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          <button onClick={loginPage} className="btn btn-primary mt-3">
            Login
          </button>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
}

export default ForgotPassword;
