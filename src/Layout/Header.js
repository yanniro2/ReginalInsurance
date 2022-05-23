import React from "react";
import Logo from "../Img/Icons/Regional-Insurance-logo.png";
import User from "../Img/Photos/user.jpg";
import Day from "../Img/Icons/day.svg";
import Night from "../Img/Icons/night.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Header-content">
        <div className="logo">
          <img src={Logo} alt="Logo icon" />
        </div>

        <div className="Header-content_end">
          <div className="theme">
            <img src={Day} alt="day icon" className="theme-day" />
            <img src={Night} alt="night icon" className="theme-night" />
          </div>
          <div className="user">
            <img src={User} alt="user img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
