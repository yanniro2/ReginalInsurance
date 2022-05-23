import React from "react";
// import { button, Outlet } from "react-router-dom";
import { FaUserAlt, FaQuestionCircle } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { RiBuilding4Fill } from "react-icons/ri";
import { AiFillContainer, AiOutlineMinus } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

import LandClient from "../Sub/Land/Client";
import LandImport from "../Sub/Land/Import";
import LandPoliceCore from "../Sub/Land/Policy";
import LandBuilding from "../Sub/Land/Building";
import LandContent from "../Sub/Land/Content";
import LandClaims from "../Sub/Land/Claims";
function Land() {
  const [isActive, setActive] = useState("btn-1");
  return (
    <div className="Body">
      <div className="navigation">
        <h2 className="h2-1">LandLoards Insurance</h2>
        <nav className="nav-top">
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
            <RiBuilding4Fill className="Link-icon" />
            <span> Building</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-5")}>
            <AiFillContainer className="Link-icon" />
            <span>Content</span>
          </button>
          <button className="Link-1" onClick={() => setActive("btn-6")}>
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
        {isActive === "btn-1" && <LandClient />}
        {isActive === "btn-2" && <LandImport />}
        {isActive === "btn-3" && <LandPoliceCore />}
        {isActive === "btn-4" && <LandBuilding />}
        {isActive === "btn-5" && <LandContent />}
        {isActive === "btn-6" && <LandClaims />}
      </div>
    </div>
  );
}

export default Land;
