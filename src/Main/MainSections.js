import React from "react";
import NextIcon from "../Img/Icons/next.svg";
import MainSectionBg1 from "../Img/Photo/Home.jpg";
import MainSectionBg2 from "../Img/Photo/Car.jpg";
import MainSectionBg3 from "../Img/Photo/Land.jpg";
import { Link } from "react-router-dom";
function MainSection() {
  return (
    <>
      <div className="MainSection">
        {/* <---------- MainSection ----------> */}
        <Link
          to="/ReginalInsurance/Home"
          className="MainSection-nav"
          // onClick={(e) => {
          //   e.preventDefault();
          //   window.location.href = "Home";
          // }}
        >
          <h1 className="MainSection-h1">Home & Contents Insurance</h1>
          <h2 className="MainSection-h2">Home & Contents Insurance</h2>
          <p className="MainSection-p">
            A comprehensive MainSection insurance policy, MainSection Protect is
            the ideal cover to protect your most valued asset against unexpected
            and unavoidable risks and liabilities
          </p>
          <button className="MainSection-btn">
            <img src={NextIcon} alt="next img" />
          </button>
          <div className="nav-bg">
            <img src={MainSectionBg1} alt="MainSection bg" />
          </div>
        </Link>

        {/* <---------- MOTOR ----------> */}
        <Link
          to="/ReginalInsurance/Motor"
          className="MainSection-nav"
          // onClick={(e) => {
          //   e.preventDefault();
          //   window.location.href = "Motor";
          // }}
        >
          <h1 className="MainSection-h1">Motor Insurance</h1>
          <h2 className="MainSection-h2">Motor Insurance</h2>
          <p className="MainSection-p">
            A comprehensive MainSection insurance policy, MainSection Protect is
            the ideal cover to protect your most valued asset against unexpected
            and unavoidable risks and liabilities
          </p>
          <button className="MainSection-btn">
            <img src={NextIcon} alt="next img" />
          </button>
          <div className="nav-bg">
            <img src={MainSectionBg2} alt="MainSection bg" />
          </div>
        </Link>

        {/* <---------- LAND ----------> */}
        <Link
          to="/ReginalInsurance/Land"
          className="MainSection-nav"
          // onClick={(e) => {
          //   e.preventDefault();
          //   window.location.href = "Land";
          // }}
        >
          <h1 className="MainSection-h1">LandLoards Insurance</h1>
          <h2 className="MainSection-h2">LandLoards Insurance</h2>
          <p className="MainSection-p">
            A comprehensive MainSection insurance policy, MainSection Protect is
            the ideal cover to protect your most valued asset against unexpected
            and unavoidable risks and liabilities
          </p>
          <button className="MainSection-btn">
            <img src={NextIcon} alt="next img" />
          </button>
          <div className="nav-bg">
            <img src={MainSectionBg3} alt="MainSection bg" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default MainSection;
