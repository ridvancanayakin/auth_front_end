import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import CustomNavbar from "./CustomNavbar";

function SelectDate() {
  const [isSelected, setisSelected] = useState(false);
  const [day, setday] = useState(0);
  const [month, setmonth] = useState(0);
  const [year, setyear] = useState(0);
  const [data, setData] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setisSelected(true);
  };

  if(isSelected){
    console.log("http://localhost:8080/users/avarageTime?year="+year+"&month="+month+"&day="+day);
       axios
        .get("http://localhost:8080/users/avarageTime?year="+year+"&month="+month+"&day="+day
        , {
          headers: { Authorization: localStorage.getItem("jwt") },
        })
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <div>

      <CustomNavbar></CustomNavbar>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <form className="" onSubmit={handleSubmit}>
            Select a day to get avarage register time.
            <div className="form-group">
              <label for="text" className="mt-5">
                Enter day of month.
              </label>
              <input
                onChange={(event) => setday(event.target.value)}
                type="number"
                min="0"
                className="form-control my-3"
                id="day"
                placeholder="Day of month"
              />
              <label for="text" className="mt-5">
                Enter month.
              </label>
              <input
                onChange={(event) => setmonth(event.target.value)}
                type="number"
                min="0"
                className="form-control my-3"
                id="month"
                placeholder="Month"
              />
              <label for="text" className="mt-5">
                Enter year
              </label>
              <input
                onChange={(event) => setyear(event.target.value)}
                type="number"
                min="0"
                className="form-control my-3"
                id="year"
                placeholder="Year"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Col>
        <Col md="4"></Col>
      </Row>

      {isSelected && <div>
        Avarage Register Time On This Date : {data} seconds
        {()=>{
          setisSelected(false)
        }}
        </div>}
    </div>
  );
}

export default SelectDate;
