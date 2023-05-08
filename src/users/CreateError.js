import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateError() {
  let navigate = useNavigate();

  const onSubmit = async (e) => {
    try{
    await axios.get("http://20.22.123.156:8082/customError");
    navigate("/");
  }
  catch (error) {
    console.error(error); 
    return error;
  }
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border  p-4 mt-2 ">
        <h2 className="text-center m-2">Generate Error</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <button type="submit" className="btn ">
            Submit
          </button>
          <Link className="btn" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>
  );
}
