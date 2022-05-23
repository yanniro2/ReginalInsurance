import React from "react";
// import { button, Outlet } from "react-router-dom";
import { FaBus } from "react-icons/fa";
import { GoTools } from "react-icons/go";
import { GiSteeringWheel } from "react-icons/gi";
import { FaUserAlt, FaQuestionCircle } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

import MotorClient from "../Sub/Motor/Client";
import MotorImport from "../Sub/Motor/Import";
import MotorPoliceCore from "../Sub/Motor/Policy";
import MotorVehicle from "../Sub/Motor/Vehicle";
import MotorModification from "../Sub/Motor/Modification";
import MotorDriver from "../Sub/Motor/Driver";
import MotorClaims from "../Sub/Motor/Claims";
function Motor() {
  const [isActive, setActive] = useState("btn-1");
  return (
    <div className="Body">
      <div className="navigation">
        <h2 className="h2-1">Motor Insurance</h2>
        <nav className="nav-top ">
          <button className="Link-1" onClick={() => setActive("btn-1")}>
            <FaUserAlt className="Link-icon" />
            <span>Client</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-2")}>
            <FaQuestionCircle className="Link-icon" />
            <span>Import Questions</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-3")}>
            <MdPolicy className="Link-icon" />
            <span> Policy Core</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-4")}>
            <FaBus className="Link-icon" />
            <span> Vehicle</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-5")}>
            <GoTools className="Link-icon" />
            <span> Modification</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-6")}>
            <GiSteeringWheel className="Link-icon" />
            <span> Driver</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-7")}>
            <BsCheckAll className="Link-icon" />
            <span>Claims</span>
          </button>
        </nav>
        <nav className="nav-bottom">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          >
            <ImHome />
          </button>
          <button>
            <AiOutlineMinus />
          </button>
          <button>
            <FiLogOut />
          </button>
        </nav>
      </div>
      <div className="content">
        {/* <Outlet /> */}
        {isActive === "btn-1" && <MotorClient />}
        {isActive === "btn-2" && <MotorImport />}
        {isActive === "btn-3" && <MotorPoliceCore />}
        {isActive === "btn-4" && <MotorVehicle />}
        {isActive === "btn-5" && <MotorModification />}
        {isActive === "btn-6" && <MotorDriver />}
        {isActive === "btn-7" && <MotorClaims />}
      </div>
    </div>
  );
}

export default Motor;
