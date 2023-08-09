import React from "react";
import "../Css/dashboard.module.css";
import Navbar from "../Js/Navbar.js";
import Dropdown from "../Js/Dropdown.js";
import Card from "../Js/Card.js";
import Semicircle from "../Js/Semicircle.js";
import Chart from "../Js/Chart.js";
import Floatingbtn from "../Js/Floatingbtn.js";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <Card />
      <Semicircle />
      <Chart />
      <Floatingbtn />
    </div>
  );
}

export default Dashboard;
