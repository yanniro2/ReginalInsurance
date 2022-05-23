import React from "react";
import FromDemo from "./FromDemo";
import { useState, useRef } from "react";
import "./style.css";
function App() {
  //   const [username, setUsername] = useState("");
  //   console.log(username);

  //   const usernameRef = useRef();
  // console.log("re-rendered");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // };

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const [imported, setImport] = useState({
    Policy_Declined: "",
    Claim_Declined: "",
    Criminal_conviction: "",
    Under_Construction: "",
    Bankruptcy: "",
    Date: "",
  });

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <FromDemo name="username" placeholder="username" />
    //     <FromDemo name="firstname" placeholder="Firstname" />
    //     <FromDemo name="lastname" placeholder="Lastname" />
    //     <FromDemo name="date" placeholder="Date of birth" />
    //     <button>Submit</button>
    //   </div>
    // </form>

    <>
      <div className="yes">
        <input type="radio" name="name" id="yes" />
        <label htmlFor="yes">Yes</label>
      </div>
      <div className="no">
        <input type="radio" name="name" id="no" />
        <label htmlFor="no">No</label>
      </div>
      <div className="message">
        <p>Error Message * </p>
      </div>

      <div className="toggle">
        <input
          id="yes-radio"
          type="radio"
          name="Criminal_conviction"
          onChange={(e) => {
            setImport({
              ...imported,
              [e.target.name]: e.target.value,
            });
          }}
          onBlur={handleFocus}
          focused={focused.toString()}
          required={true}
          checked={imported.Criminal_conviction === "yes"}
          value="yes"
        />
        <label htmlFor="yes-radio" className="on-btn">
          yes
        </label>
        <input
          id="no-radio"
          type="radio"
          name="Criminal_conviction"
          onChange={(e) => {
            setImport({
              ...imported,
              [e.target.name]: e.target.value,
            });
          }}
          onBlur={handleFocus}
          focused={focused.toString()}
          required={true}
          value="no"
          checked={imported.Criminal_conviction === "no"}
        />
        <div className="message">
          <p>Error Message * </p>
        </div>
        <label htmlFor="no-radio" className="off-btn">
          no
        </label>
      </div>

      <input
        type="date"
        id="date"
        className="date-input "
        name="Date"
        onChange={(e) => {
          setImport({
            ...imported,
            [e.target.name]: e.target.value,
          });
        }}
        onBlur={handleFocus}
        focused={focused.toString()}
        required={true}
      />
      {/* <div className="message">
        <p>Error Message * </p>
      </div> */}
    </>
  );
}

export default App;
