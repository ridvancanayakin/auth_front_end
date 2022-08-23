import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import CustomNavbar from "./CustomNavbar";

function UnRegisteredUsers() {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    await axios
      .get("http://localhost:8080/users/unregistered/", {
        headers: { Authorization: localStorage.getItem("jwt") },
      })
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  console.log("data: ", data);
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <Table>
        <th>id</th>
        <th>name</th>
        <th>surname</th>
        <th>email</th>
        <th>enabled</th>

        {data.map((veri) => {
          return (
            <tr>
              <td>{veri.id}</td>
              <td>{veri.name}</td>
              <td>{veri.surName}</td>
              <td>{veri.email}</td>
              <td>{veri.enabled.toString()}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}
export default UnRegisteredUsers;
