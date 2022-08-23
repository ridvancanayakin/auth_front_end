import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import CustomNavbar from "./CustomNavbar";

function SelectTime() {

const [isSelected, setisSelected] = useState(false);
  
  const [time, settime] = useState("");
  const handleSubmit = async (event) => {
    setisSelected(true);
  };

  return (
    <div>
      { isSelected && <Navigate to={"/RegisteredUsers/"+time}></Navigate>}
      <CustomNavbar></CustomNavbar>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="text" className="mt-5">
                Enter time period in hours.
              </label>
              <input
                onChange={(event) => settime(event.target.value)}
                type="number"
                min="0"
                className="form-control my-3"
                id="hour"
                placeholder="Time perion in hours"
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

export default SelectTime;
