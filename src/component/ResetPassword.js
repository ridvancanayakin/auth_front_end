import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

function ResetPassword() {
  const { token } = useParams();
  let navigate = useNavigate();
  const [pass, setpass] = useState("");
  const [passRepeat, setpassRepeat] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pass == passRepeat) {
      console.log(token);
      await axios
        .post("http://localhost:8080/auth/reset",{
          password:pass,
          token:token
        })
        .then(function (response) {
          alert(response.data);
          console.log(response);
        })
        .catch(function (error) {
          alert(error.data);
          console.log(error);
        });
    } else {
      alert("Passwords does not match.");
      console.log("passwords doesnt match");
    }
  };

  return (
    <div>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputPassword1" className="mt-5">
                Password
              </label>
              <input
                onChange={(event) => setpass(event.target.value)}
                type="password"
                className="form-control my-3"
                id="exampleInputPassword1"
                placeholder="Password"
              />

              <label for="exampleInputPassword2">Repeat Password</label>
              <input
                onChange={(event) => setpassRepeat(event.target.value)}
                type="password"
                className="form-control my-3"
                id="exampleInputPassword2"
                placeholder="Repeat Password"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
}

export default ResetPassword;
