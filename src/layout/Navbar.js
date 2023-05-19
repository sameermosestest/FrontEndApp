import React from "react";
import "./Navbar.css";


export default function Navbar() {
  return (
    <div>
    <div class="p-1 text-center bg-light">
    <h2 class="mb-3">Observability POC</h2>
    <h4 class="mb-3">Test Demo App</h4>
  </div>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
      </li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li class="nav-item">
        <a class="nav-link" href="/adduser">Add User</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link" href="createerror">Generate Error</a>
        </li>
      </ul>
    </div>
  </div>
</nav>      
    </div>
  );
}
