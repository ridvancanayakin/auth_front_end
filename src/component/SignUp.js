import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

function SignUp() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [surName, setsurName] = useState("");
    const [role, setrole] = useState("");

    const handleSubmit= async (event) => {
        event.preventDefault();
        console.log("email:"+email+"   pass: "+password
        +"name: "+name +" surname: "+ surName+"  role: "+role);
        await axios.post('http://localhost:8080/auth/register', {
            email:email,
            password:password,
            role:role,
            name:name,
            surName:surName
          })
          .then(function (response) {
              alert(response.data);
            //localStorage.setItem("jwt",response.data);
            console.log(response);
            //setisLogin(true);
          })
          .catch(function (error) {
            alert(error.data);
            console.log(error);
          });
    }
  return (
    <div className="m-3">
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <form className="" onSubmit={handleSubmit}>
          <div className="form-group">
              <label for="name">Name</label>
              <input onChange={event => setname(event.target.value)}
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label for="surName">Surname</label>
              <input onChange={event => setsurName(event.target.value)}
                type="text"
                className="form-control"
                id="surName"
                aria-describedby="surNameHelp"
                placeholder="Enter surname"
              />
            </div>
            <div className="form-group">
              <label for="role">Role</label>
              <input onChange={event => setrole(event.target.value)}
                type="text"
                className="form-control"
                id="role"
                aria-describedby="roleHelp"
                placeholder={"Enter "+"\""+"ADMIN"+"\""+" for admin role"}
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input onChange={event => setemail(event.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input onChange={event => setpassword(event.target.value)}
                type="password"
                className="form-control mb-3"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
          </form>
          <div className="my-3"><Link to={"/"}>Login</Link></div>

          
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
}

export default SignUp;
