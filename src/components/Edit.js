import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`https://6489ad595fa58521cab00a2a.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/read");
      })
      .catch((error) => {
        console.log("Edit error", error);
      });
  }

  return (
    <>
      <div className="container">
        <Link to="/read">
          <button type="button" className="btn btn-success mb-2 mt-2">
            Go to Read page
          </button>
        </Link>
        <h2 className="p-1 mb-2 bg-primary text-white">Edit From</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        {/* {name}
        <br />
        {email}
        <br />
        {age} */}
      </div>
    </>
  );
}

export default Edit;
