import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    try{
      console.log("entered laod users data method "); 
      const result = await axios.get("http://20.22.123.156:8082/users");
      console.log("exited laod users data method "); 
    setUsers(result.data);
    }
    catch (error) {
      console.log("Entering catch"); 
      console.log(error); 
    }
    
  };

  const deleteUserData = async (id) => {
    try{
      console.log("entered deleteUserData method "); 
    await axios.delete(`http://20.22.123.156:8082/user/${id}`);
    console.log("exited deleteUserData method "); 
    loadUsersData();
  }
  catch (error) {
    console.log("Entering catch"); 
    console.log(error); 
  }
  };

  return (
    <div className="container">
      <div >
        <table className="table border ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn mx-2"
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
            
}
