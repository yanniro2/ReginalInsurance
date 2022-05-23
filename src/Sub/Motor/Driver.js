import React from "react";
import add from "../Icons/add.svg";
import { Link, Outlet } from "react-router-dom";

function Driver() {
  return (
    <div className="sub-page-3 ">
      <h1 className="h1">DRIVERS INFORMATION</h1>
      <div className="Add">
        <Link to="DriverAdd" className="Link-2">
          <div className="big-btn ">
            <img src={add} alt="" className="icon" />
            <h3 className="h3-1">Add</h3>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Driver;
