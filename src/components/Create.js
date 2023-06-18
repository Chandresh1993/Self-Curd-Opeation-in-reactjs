import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, nameSet] = useState("");
  const [age, ageSet] = useState("");
  const [email, emailSet] = useState("");

  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post("https://6489ad595fa58521cab00a2a.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/read");
      });
  }
  return (
    <div className="container">
      <Link to="/read">
        <button type="button" className="btn btn-success mb-2 mt-2">
          Go to Read page
        </button>
      </Link>
      <h2 className="p-1 mb-2 bg-primary text-white">Test From</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => nameSet(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Age"
            onChange={(e) => ageSet(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => emailSet(e.target.value)}
          />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {name}
      <br />
      {email}
      <br />
      {age}
    </div>
  );
};

export default Create;
