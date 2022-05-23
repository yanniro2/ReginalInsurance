import React from "react";
import { useState } from "react";
import ErrorImg from "../Img/Icons/alert.svg";
import CheckArrow from "../Img/Icons/CheckArrow.svg";
import "./FromInput.css";

function FromInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, erroerMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="Form">
      <div className="flex">
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <div className="div"></div>
        <div className="check">
          {/* {erroerMessage} */}
          <div className="error">
            <img src={ErrorImg} className="error-icon icon-size red" alt="" />
          </div>
          <div className="valid">
            <img
              src={CheckArrow}
              className="check-icon icon-size green"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromInput;
