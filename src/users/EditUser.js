import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    try{
    const result = await axios.get(`http://localhost:8082/user/${id}`);
    setUser(result.data);
  }
  catch (error) {
    console.error(error); 
    return error;
  }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border p-4 mt-2 ">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
              Username
              </label>
              <input
                type={"text"}
                className="form-control"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
            <Link className="btn mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
