import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [get, setGet] = useState([]);

  function getData() {
    axios
      .get("https://6489ad595fa58521cab00a2a.mockapi.io/crud")
      .then((response) => {
        setGet(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // Delete
  function handleDelete(id) {
    axios
      .delete(`https://6489ad595fa58521cab00a2a.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }
  //

  function SetEditData(id,name,age,email) {
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("age",age)
    localStorage.setItem("email",email)

  }

  const sortedData = get.sort((a, b) => {
    return a.e_name.localeCompare(b.e_name);
  });

  console.log(">>>", sortedData);

  return (
    <>
      <Link to="/">
        <button type="button" className="btn btn-success mb-2 mt-2">
          Go to Home page
        </button>
      </Link>
      <table className="table table-striped table-hover table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.e_name}</td>
                <td>{items.e_age}</td>
                <td>{items.e_email}</td>
                <td>
                  <Link to="/edit">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        SetEditData(
                          items.id,
                          items.e_name,
                          items.e_age,
                          items.e_email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      if (window.confirm("Are sure to Delete this data")) {
                        handleDelete(items.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
