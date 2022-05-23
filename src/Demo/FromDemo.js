import React from "react";
import "./style.css";

function FromDemo(props) {
  return (
    <div className="from">
      <label htmlFor="">{props.placeholder}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        // onChange={(e) => props.setUsername(e.target.value)}
        // ref={props.refer}
      />
    </div>
  );
}

export default FromDemo;
