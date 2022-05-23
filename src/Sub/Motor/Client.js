import React from "react";
import { useState } from "react";
import ErrorImg from "../Icons/alert.svg";
import CheckArrow from "../Icons/CheckArrow.svg";
import { title } from "../Datas/Client/Title";
import { state } from "../Datas/Client/State";
import { StreetType } from "../Datas/Client/StreetType";

function Client(props) {
  const titleArray = title.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const stateArray = state.map((data) => (
    <option key={data.id} value={data.stAus} />
  ));
  const streetArray = StreetType.map((data) => (
    <option key={data.id} value={data.group} />
  ));

  const [isType, setType] = useState(true);
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  const [errorMessage, setErrorMessage] = useState(false);

  const type = function TypeChange() {
    setType(!isType);
    setErrorMessage(true);
  };

  const [address, setAddress] = useState({
    unitNo: "",
    StreetNo: "",
    StreetType: "",
    StreetName: "",
    Suburb: "",
    State: "",
    Postcode: "",
    id: 1,
  });

  const [company, setCompany] = useState({
    clientID: "",
    companyName: "",
    tradingAs: "",
    mobile: "",
    email: "",
  });

  const [personal, setPersonal] = useState({
    clientID: "",
    title: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const cancel_client = () => {
    setCompany({
      companyName: "",
      tradingAs: "",
      mobile: "",
      email: "",
    });

    setAddress({
      unitNo: "",
      StreetNo: "",
      StreetType: "",
      StreetName: "",
      Suburb: "",
      State: "",
      Postcode: "",
      id: 1,
    });

    setCompany({
      companyName: "",
      tradingAs: "",
      mobile: "",
      email: "",
    });

    setPersonal({
      title: "",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
    });

    setType(true);
    setFocused(false);
  };

  const print = () => {
    if (!focused) {
      alert("Empty Values");
    } else {
      if (errorMessage) {
        alert("Add to Successful!!");
        console.log(address, company, personal);
      } else {
        alert("Please Check your values");
      }
    }
  };

  return (
    <div>
      <div className="sub-page">
        <div className="heading">
          <h1 className="h1">General Information</h1>
        </div>

        <div className="form-content">
          <div className="box-main">
            <div className="box-1">
              <h2 className="h2">Type</h2>
              <div className="box-2">
                <div className="radio-type-2">
                  <div className="true-class">
                    <input
                      type="radio"
                      name="radio-2"
                      className="true-radio"
                      onChange={type}
                      checked={isType === true}
                      id="type-yes"
                    />

                    <label htmlFor="type-yes">
                      <span className="radio-true">Company</span>
                    </label>
                  </div>
                  <div className="false-class">
                    <input
                      type="radio"
                      name="radio-2"
                      className="false-radio"
                      onChange={type}
                      checked={isType === false}
                      id="type-no"
                    />
                    <label htmlFor="type-no">
                      <span className="radio-false">Individual</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {isType ? (
              <div className="box-1 width-3" id="company">
                <h2 className="h2">Company Details</h2>
                <div className="box-2 width-1">
                  <input
                    type="text"
                    name="companyName"
                    value={company.companyName}
                    className="input-text width-1"
                    placeholder="Company Name"
                    onChange={(e) => {
                      setCompany({
                        ...company,
                        [e.target.name]: e.target.value,
                        clientID: e.target.value,
                      });
                    }}
                    // onChange={(e) => props.setHomeData(e.target.value)}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    pattern="[a-zA-Z0-9]{1,20}"
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
                    </div>
                    <div className="valid">
                      <img
                        src={CheckArrow}
                        className="check-icon icon-size green"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <input
                      type="text"
                      name="tradingAs"
                      value={company.tradingAs}
                      className="input-text width-1"
                      placeholder="Trading As"
                      onChange={(e) => {
                        setCompany({
                          ...company,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required={true}
                      pattern="[a-zA-Z]{1,20}"
                    />
                    <div className="check">
                      {/* {erroerMessage} */}
                      <div className="error">
                        <img
                          src={ErrorImg}
                          className="error-icon icon-size red"
                          alt=""
                        />
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

                <div className="box-2">
                  <input
                    type="text"
                    name="mobile"
                    value={company.mobile}
                    className="input-text"
                    placeholder="Mobile"
                    onChange={(e) => {
                      setCompany({
                        ...company,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    pattern="[0-9]{1,10}"
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
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
                <div className="box-2">
                  <input
                    type="email"
                    name="email"
                    value={company.email}
                    className="input-text"
                    placeholder="email"
                    onChange={(e) => {
                      setCompany({
                        ...company,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
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
            ) : (
              <div className="box-1 " id="individual">
                <h2 className="h2">Personal Details</h2>
                <div className="box-2">
                  <div className="flex">
                    <input
                      type="text"
                      list="title"
                      value={personal.title}
                      name="title"
                      className="input-text-single"
                      placeholder="Title"
                      onChange={(e) => {
                        setPersonal({
                          ...personal,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required={true}
                      pattern="[a-zA-Z]{1,5}"
                    />
                    <datalist id="title">{titleArray}</datalist>
                    <div className="check">
                      {/* {erroerMessage} */}
                      <div className="error">
                        <img
                          src={ErrorImg}
                          className="error-icon icon-size red"
                          alt=""
                        />
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

                  <input
                    type="text"
                    name="firstName"
                    value={personal.firstName}
                    className="input-text"
                    placeholder="firstname"
                    onChange={(e) => {
                      setPersonal({
                        ...personal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    pattern="[a-zA-Z]{1,20}"
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
                    </div>
                    <div className="valid">
                      <img
                        src={CheckArrow}
                        className="check-icon icon-size green"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      name="lastName"
                      value={personal.lastName}
                      className="input-text"
                      placeholder="lastname"
                      onChange={(e) => {
                        setPersonal({
                          ...personal,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      required={true}
                      pattern="[a-zA-Z]{1,20}"
                    />
                    <div className="check">
                      {/* {erroerMessage} */}
                      <div className="error">
                        <img
                          src={ErrorImg}
                          className="error-icon icon-size red"
                          alt=""
                        />
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
                <div className="box-2">
                  <input
                    type="text"
                    name="mobile"
                    value={personal.mobile}
                    className="input-text"
                    placeholder="Mobile"
                    onChange={(e) => {
                      setPersonal({
                        ...personal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    pattern="[0-9]{1,10}"
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
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
                <div className="box-2">
                  <input
                    type="email"
                    name="email"
                    value={personal.email}
                    className="input-text"
                    placeholder="email"
                    onChange={(e) => {
                      setPersonal({
                        ...personal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
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
            )}
          </div>
          <div className="box-main">
            <div className="box-address">
              <h2 className="h2">Address</h2>
              <div className="box-2">
                <input
                  type="text"
                  name="unitNo"
                  className="input-text"
                  placeholder="Unit no"
                  value={address.unitNo}
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  pattern="[0-9]{1,10}"
                />
                <div className="check">
                  {/* {erroerMessage} */}
                  <div className="error">
                    <img
                      src={ErrorImg}
                      className="error-icon icon-size red"
                      alt=""
                    />
                  </div>
                  <div className="valid">
                    <img
                      src={CheckArrow}
                      className="check-icon icon-size green"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    name="StreetNo"
                    value={address.StreetNo}
                    className="input-text "
                    placeholder="Street No"
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    pattern="[0-9]{1,10}"
                  />

                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
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

              <div className="box-2">
                <input
                  type="text"
                  name="StreetName"
                  value={address.StreetName}
                  className="input-text"
                  placeholder="Street Name"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  pattern="[a-zA-Z]{1,20}"
                />
                <div className="check">
                  {/* {erroerMessage} */}
                  <div className="error">
                    <img
                      src={ErrorImg}
                      className="error-icon icon-size red"
                      alt=""
                    />
                  </div>
                  <div className="valid">
                    <img
                      src={CheckArrow}
                      className="check-icon icon-size green"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    name="Suburb"
                    value={address.Suburb}
                    className="input-text"
                    placeholder="Suburb"
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    pattern="[a-zA-Z0-9]{1,20}"
                  />
                  <div className="check">
                    {/* {erroerMessage} */}
                    <div className="error">
                      <img
                        src={ErrorImg}
                        className="error-icon icon-size red"
                        alt=""
                      />
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
              <div className="box-2">
                <input
                  key={address.id}
                  type="text"
                  list="streetType"
                  name="StreetType"
                  className="input-text-single"
                  placeholder="Street Type"
                  value={address.StreetType}
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  pattern="[a-zA-Z]{1,10}"
                />
                <datalist id="streetType">{streetArray}</datalist>
                <div className="check">
                  {/* {erroerMessage} */}
                  <div className="error">
                    <img
                      src={ErrorImg}
                      className="error-icon icon-size red"
                      alt=""
                    />
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
              <div className="box-2">
                <input
                  type="text"
                  list="state"
                  name="State"
                  className="input-text-single"
                  placeholder="state"
                  value={address.State}
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  pattern="[a-zA-Z]{1,10}"
                />
                <datalist id="state">{stateArray}</datalist>
                <div className="check">
                  {/* {erroerMessage} */}
                  <div className="error">
                    <img
                      src={ErrorImg}
                      className="error-icon icon-size red"
                      alt=""
                    />
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
              <div className="box-2">
                <input
                  type="text"
                  name="Postcode"
                  value={address.Postcode}
                  className="input-text"
                  placeholder="Postcode"
                  onChange={(e) => {
                    setAddress({
                      ...address,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  pattern="[0-9]{1,20}"
                />
                <div className="check">
                  {/* {erroerMessage} */}
                  <div className="error">
                    <img
                      src={ErrorImg}
                      className="error-icon icon-size red"
                      alt=""
                    />
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
          </div>
        </div>
        <div>
          <button className="btn cancel mg-4" onClick={cancel_client}>
            Cancel
          </button>
          {/* <button className="btn submit">Next</button> */}
          <button className="btn submit" onClick={print}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Client;
