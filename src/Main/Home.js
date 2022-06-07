import React from "react";
import { FaUserAlt, FaQuestionCircle } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { RiBuilding4Fill } from "react-icons/ri";
import { AiFillContainer, AiOutlineMinus } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

// import HomeClient from "../Sub/Home/Client";
// import HomeImport from "../Sub/Home/Import";
// import HomePolicy from "../Sub/Home/Policy";
// import HomeBuilding from "../Sub/Home/Building";
// import HomeContent from "../Sub/Home/Content";
import HomeClaims from "../Sub/Home/Claims";

// New *
// import React from "react";
// import { useState } from "react";
import ErrorImg from "../Img/Icons/alert.svg";
import CheckArrow from "../Img/Icons/CheckArrow.svg";
import { title } from "../Datas/Client/Title";
import { state } from "../Datas/Client/State";
import { StreetType } from "../Datas/Client/StreetType";

// import React from "react";
// import { useState } from "react";
import { excess } from "../Datas/Policy/Excess.js";
import { industry } from "../Datas/Policy/Industry";
import { parties } from "../Datas/Policy/Parties";

// import React from "react";
// import { useState } from "react";
import { build } from "../Datas/Building/Building";
import { wallConstruction } from "../Datas/Building/WallConstruction";
import { roofConstruction } from "../Datas/Building/RoofConstruction";

// import React from "react";
import add from "../Img/Icons/add.svg";
// import { useState } from "react";
import { category_list } from "../Datas/Content/Category";

// import React from "react";
// import { useState } from "react";
// import add from "../Icons/add.svg";
import { claimType } from "../Datas/Claims/Claims";
import { insurAu } from "../Datas/Claims/Insurer";
function Home() {
  const [isActive, setActive] = useState("btn-1");

  const btnChange = () => {
    var header = document.getElementsByClassName("nav-top");
    var btns = header.getElementsByClassName("Link-1");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += "active";
      });
    }
  };

  // const [homeData, setHomeData] = useState("");
  // console.log(homeData);

  // Client  start ------>
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
  // const [focused, setFocused] = useState(false);
  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

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

  // const print = () => {
  //   let value = "";
  //   let erro = 0;
  //   for (let x in address) {
  //     value = address[x];
  //     if (value === "" || value == null) {
  //       console.log(erro);
  //       alert("Please Check your values!!!");
  //       break;
  //     } else {
  //       erro = erro + 1;
  //     }
  //   }
  //   if (erro === Object.keys(address).length) {
  //     alert("Datas add to Success!!!");
  //     console.log(address);
  //   }

  //   if (isType) {
  //     for (let x in company) {
  //       value = company[x];
  //       if (value === "" || value == null) {
  //         console.log(erro);
  //         alert("Please Check your values!!!");
  //         break;
  //       } else {
  //         erro = erro + 1;
  //       }
  //     }
  //   } else {
  //     for (let x in personal) {
  //       value = personal[x];
  //       if (value === "" || value == null) {
  //         console.log(erro);
  //         alert("Please Check your values!!!");
  //         break;
  //       } else {
  //         erro = erro + 1;
  //       }
  //     }
  //   }
  //   if (erro === Object.keys(personal).length) {
  //     alert("Datas add to Success!!!");
  //     console.log(personal, address, company);
  //   }
  // };

  // <----------- Client End
  // ImportQuestions  start ------>
  // const [focused, setFocused] = useState(false);

  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  const [imported, setImport] = useState({
    Policy_Declined: "",
    Claim_Declined: "",
    Criminal_conviction: "",
    Under_Construction: "",
    Bankruptcy: "",
    Building_Flooded: "",
  });

  const cancel_import = () => {
    setImport({
      Policy_Declined: "",
      Claim_Declined: "",
      Criminal_conviction: "",
      Under_Construction: "",
      Bankruptcy: "",
      Building_Flooded: "",
    });
  };

  const printImport = () => {
    let value = "";
    let erro = 0;
    for (let x in imported) {
      value = imported[x];
      if (value === "" || value == null) {
        console.log(erro);
        alert("Please Check your values!!!");
        break;
      } else {
        erro = erro + 1;
      }
    }
    if (erro === Object.keys(imported).length) {
      alert("Datas add to Success!!!");
      console.log(imported);
    }
  };
  // <----------- ImportQuestions End

  // Policy Core  start ------>
  const excessArray = excess.map((data) => (
    <option key={data.id} value={data.price} />
  ));
  const industryArray = industry.map((data) => (
    <option key={data.id} value={data.type} />
  ));

  const partiesArray = parties.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  // const [focused, setFocused] = useState(false);
  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  const [policyCore, setPolicyCore] = useState({
    coverType: "",
    Basic_settlement: "",
    Builiding_Content: "",
    Policy_from: "",
    Policy_to: "",
    Date_of_bith: "",
    Policyholder: "",
    PolicyHolder_retired: "",
    business_conducted: "",
    property_under_construction: "",
    Poor_conditon: "",
    unoccupided: "",
    UseAsHotel: "",
    UseAsCommunity: "",
    Policyholder_hold: "",
    Interested_parties: "",
    Excess: "",
    Payment_frequency: "",
  });

  const printPolicyCore = () => {
    let value = "";
    let erro = 0;
    for (let x in policyCore) {
      value = policyCore[x];
      if (value === "" || value == null) {
        console.log(erro);
        alert("Please Check your values!!!");
        break;
      } else {
        erro = erro + 1;
      }
    }
    if (erro === Object.keys(policyCore).length) {
      alert("Datas add to Success!!!");
      console.log(policyCore);
    }
  };

  const cancel_Policy = () => {
    setPolicyCore({
      coverType: "",
      Basic_settlement: "",
      Builiding_Content: "",
      Policy_from: "",
      Policy_to: "",
      Date_of_bith: "",
      Policyholder: "",
      PolicyHolder_retired: "",
      business_conducted: "",
      property_under_construction: "",
      Poor_conditon: "",
      unoccupided: "",
      UseAsHotel: "",
      UseAsCommunity: "",
      Policyholder_hold: "",
      Interested_parties: "",
      Excess: "",
      Payment_frequency: "",
    });
  };
  // <----------- Policy Core End

  // Building  start ------>
  const buildingArray = build.map((data) => (
    <option key={data.id} value={data.type} />
  ));

  const wallArray = wallConstruction.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const roofArray = roofConstruction.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  // const [focused, setFocused] = useState(false);
  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  const [building, setBuilding] = useState({
    AsSameAddress: "",
    IsThe_Propery_heritage: "",
    occupancy: "",
    BuildingType: "",
    siteExceeding: "",
    constructionPeriod: "",
    originalYear: "",
    Construction: "",
    RoofConditon: "",
    Quality: "",
    Propert: "",
    WaterHouse: "",
    MainsWater: "",
    WindowSecurity: "",
    DoorSecurity: "",
    BurglarAlam: "",
    Building_Or_Constrcution: "",
    SwimmingPool: "",
    Below_Ground_level: "",
    Private_flood: "",
  });

  const printbuilding = () => {
    let value = "";
    let erro = 0;
    for (let x in building) {
      value = building[x];
      if (value === "" || value == null) {
        console.log(erro);
        alert("Please Check your values!!!");
        break;
      } else {
        erro = erro + 1;
      }
    }
    if (erro === Object.keys(building).length) {
      alert("Datas add to Success!!!");
      console.log(building);
    }
  };
  const cancel_Building = () => {
    setBuilding({
      AsSameAddress: "",
      IsThe_Propery_heritage: "",
      occupancy: "",
      BuildingType: "",
      siteExceeding: "",
      constructionPeriod: "",
      originalYear: "",
      Construction: "",
      RoofConditon: "",
      Quality: "",
      Propert: "",
      WaterHouse: "",
      MainsWater: "",
      WindowSecurity: "",
      DoorSecurity: "",
      BurglarAlam: "",
      Building_Or_Constrcution: "",
      SwimmingPool: "",
      Below_Ground_level: "",
      Private_flood: "",
    });
  };
  // <----------- Building End

  // Content  start ------>
  // const [focused, setFocused] = useState(false);
  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  const categoryArray = category_list.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const [inputField, setInputField] = useState([
    { Type: "", Category: "", Description: "", Value: "" },
  ]);

  const handleFromChange = (index, event) => {
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };

  const addFields = () => {
    let newField = { Type: "", Category: "", Description: "", Value: "" };
    setInputField([...inputField, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputField];
    data.splice(index, 1);
    setInputField(data);
  };

  const printContent = (e) => {
    let value = "";
    let erro = 0;
    let error_1 = 0;

    for (let key in inputField) {
      for (let subkey in inputField[key]) {
        value = inputField[key][subkey];

        if (value === "" || value == null) {
          alert("please check your values");
          break;
        } else {
          erro++;
          if (erro === 0) {
            alert("Empty !!!");
          } else if (erro === Object.keys(inputField[key][subkey]).length) {
            error_1++;
            console.log("Valid");
            erro = 0;
          }
        }
      }
    }
    console.log(error_1);
    if (error_1 === 0) {
      alert("Empty !!!");
    } else if (error_1 === Object.keys(inputField).length) {
      alert("Datas add to Success!!!");
      console.log(inputField);
      console.log(error_1);
    }
  };

  // const contentCancel = (e) => {
  //   setInputField([{ Type: "", Category: "", Description: "", Value: "" }]);
  //   let newField = { Type: "", Category: "", Description: "", Value: "" };
  //   setInputField([...inputField, newField]);
  // };
  // <----------- Content End

  // Claims  start ------>
  const [claims, setClaims] = useState([
    {
      Type: "",
      Date: "",
      Description: "",
      Amount: "",
      Insurer: "",
    },
  ]);
  const claimTypeArray = claimType.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const insurAuArray = insurAu.map((data) => (
    <option key={data.id} value={data.insurAus} />
  ));

  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleFromChangeClaims = (index, event) => {
    let data = [...claims];
    data[index][event.target.name] = event.target.value;
    setClaims(data);
  };

  const removeFieldChange = (index) => {
    let data = [...claims];
    data.splice(index, 1);
    setClaims(data);
  };

  const addFieldClaims = () => {
    let newField = {
      Type: "",
      Date: "",
      Description: "",
      Amount: "",
      Insurer: "",
    };
    setClaims([...claims, newField]);
  };

  const printClaims = (e) => {
    let value = "";
    let erro = 0;
    let error_1 = 0;

    for (let key in claims) {
      for (let subkey in claims[key]) {
        value = claims[key][subkey];

        if (value === "" || value == null) {
          alert("please check your values");
          break;
        } else {
          erro++;
          if (erro === 0) {
            alert("Empty !!!");
          } else if (erro === Object.keys(claims[key][subkey]).length) {
            error_1++;
            console.log("Valid");
            erro = 0;
          }
        }
      }
    }
    console.log(error_1);
    if (error_1 === 0) {
      alert("Empty !!!");
    } else if (error_1 === Object.keys(claims).length) {
      alert("Datas add to Success!!!");
      console.log(claims);
      console.log(error_1);
    }

    // console.log(claims);
  };
  // <----------- Claims End
  return (
    <div className="Body">
      <div className="navigation">
        <h2 className="h2-1">Home & Contents Insurance</h2>
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
          <Link
            // type="button"
            // onClick={(e) => {
            //   e.preventDefault();
            //   window.location.href = "/";
            // }}
            className="Link-btn"
            to="/ReginalInsurance"
          >
            <ImHome />
          </Link>
          <button>
            <AiOutlineMinus className="btn-icon" />
          </button>
          <button>
            <FiLogOut />
          </button>
        </nav>
      </div>

      <div className="content">
        {/* <Outlet /> */}
        {/* Client */}
        {isActive === "btn-1" && (
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
        )}
        {/* import Question */}
        {isActive === "btn-2" && (
          // <div>
          <div className="sub-page">
            <h1 className="h1">import questions</h1>

            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Any insurance policy declined or cancelled by the insurer in
                  the last 5 years
                </p>
              </div>
              <div className="grid-right">
                <select
                  name="Policy_Declined"
                  id=""
                  className="select"
                  onChange={(e) => {
                    setImport({
                      ...imported,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  value={imported.Policy_Declined}
                >
                  <option
                    value=""
                    disabled={imported.Policy_Declined ? true : null}
                  >
                    No
                  </option>
                  <option value="12 Months">12 Months</option>
                  <option value="24 Months">24 Months</option>
                  <option value="5 Years">5 Years</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Had a claim declined </p>
              </div>
              <div className="grid-right">
                <select
                  name="Claim_Declined"
                  className="select"
                  onChange={(e) => {
                    setImport({
                      ...imported,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  value={imported.Claim_Declined}
                >
                  <option
                    value=""
                    disabled={imported.Claim_Declined ? true : null}
                  >
                    No
                  </option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Years</option>
                  <option value="3 Years"> 3 Years</option>
                  <option value="4 Years"> 4 Years</option>
                  <option value="5 Years"> 5 Years</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Had any criminal conviction relating to fraud, theft,
                  dishonesty, arson, or malicious damage (excluding any
                  convictions that are not legally required to be disclosed)?
                </p>
              </div>
              <div className="grid-right">
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
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Is the home under construction / renovation?
                </p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="Under_Construction"
                    onChange={(e) => {
                      setImport({
                        ...imported,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    value="yes"
                    checked={imported.Under_Construction === "yes"}
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="Under_Construction"
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
                    checked={imported.Under_Construction === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Has any person who will be covered by this insurance ever
                  filed for Bankruptcy
                </p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="Bankruptcy"
                    onChange={(e) => {
                      setImport({
                        ...imported,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    value="yes"
                    checked={imported.Bankruptcy === "yes"}
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="Bankruptcy"
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
                    checked={imported.Bankruptcy === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Has the land or building been flooded more than once in the
                  last 10 years?
                </p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="Building_Flooded"
                    onChange={(e) => {
                      setImport({
                        ...imported,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    value="yes"
                    checked={imported.Building_Flooded === "yes"}
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="Building_Flooded"
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
                    checked={imported.Building_Flooded === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="button-box mgb-4">
              <div className="button-start">
                <button className="btn cancel" onClick={cancel_import}>
                  Cancel
                </button>
              </div>
              <div className="button-end">
                {/* <button className="btn preview" onClick={() => setActive("btn-1")}>
              Preview
            </button> */}
                <button className="btn submit" onClick={printImport}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          // </div>
        )}
        {/* Policy */}
        {isActive === "btn-3" && (
          <div className="content">
            <div className="sub-page">
              <h1 className="h1">Policy Core</h1>

              <div className="div">
                <div className="grid-half">
                  <div className="grid-left">
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Cover Type (Accidental Damage or Defined Events only) 
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="radio-type-3">
                          <div className="true-class flex-2">
                            <input
                              type="radio"
                              className="true-radio"
                              id="coverType-yes"
                              name="coverType"
                              onChange={(e) => {
                                setPolicyCore({
                                  ...policyCore,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value="yes"
                              checked={policyCore.coverType === "yes"}
                            />
                            <label htmlFor="coverType-yes">
                              <span className="radio-true">
                                Accidentaal Damage
                              </span>
                            </label>
                          </div>
                          <div className="false-class flex-2">
                            <input
                              type="radio"
                              name="coverType"
                              id="coverType-no"
                              onChange={(e) => {
                                setPolicyCore({
                                  ...policyCore,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value="no"
                              checked={policyCore.coverType === "no"}
                              className="false-radio"
                            />
                            <label htmlFor="coverType-no">
                              <span className="radio-false">
                                Defined Events
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Basis of settlement</p>
                      </div>
                      <div className="grid-right">
                        <div className="radio-type-3">
                          <div className="true-class flex-2">
                            <input
                              type="radio"
                              name="Basic_settlement"
                              onChange={(e) => {
                                setPolicyCore({
                                  ...policyCore,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value="yes"
                              checked={policyCore.Basic_settlement === "yes"}
                              className="true-radio"
                              id="Basic_settlement-yes"
                            />
                            <label htmlFor="Basic_settlement-yes">
                              <span className="radio-true">Replacement</span>
                            </label>
                          </div>
                          <div className="false-class flex-2">
                            <input
                              type="radio"
                              name="Basic_settlement"
                              onChange={(e) => {
                                setPolicyCore({
                                  ...policyCore,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value="no"
                              checked={policyCore.Basic_settlement === "no"}
                              className="false-radio"
                              id="Basic_settlement-no"
                            />
                            <label htmlFor="Basic_settlement-no">
                              <span className="radio-false">Indemnity</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Building or Contents</p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="Builiding_Content"
                          className="select"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={policyCore.Builiding_Content}
                        >
                          <option
                            value=""
                            disabled={
                              policyCore.Builiding_Content ? true : null
                            }
                          >
                            No
                          </option>
                          <option value="Building only">Building only </option>
                          <option value="Content only">Content only</option>
                          <option value="Building and Contents">
                            Building and Contents
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-2 ">
                      <div className="input-date">
                        <label htmlFor="date">Policy From Date</label>
                        <input
                          type="date"
                          id="date"
                          className="date-input"
                          name="Policy_from"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          checked={policyCore.Policy_from}
                        />
                      </div>
                      <div className="input-date">
                        <label htmlFor="date">Policy to Date</label>
                        <input
                          type="date"
                          id="date"
                          className="date-input"
                          name="Policy_to"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          checked={policyCore.Policy_to}
                        />
                      </div>
                    </div>

                    <div className="input-date">
                      <label htmlFor="date">Granted of oldest insured</label>
                      <input
                        type="date"
                        id="date"
                        className="date-input"
                        name="Policy_from"
                        onChange={(e) => {
                          setPolicyCore({
                            ...policyCore,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required={true}
                        checked={policyCore.Policy_from}
                      />
                    </div>

                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Industry of Policyholder</p>
                      </div>
                      <div className="grid-right">
                        <input
                          type="text"
                          list="Industry"
                          className="input-text-single"
                          placeholder="Policy Holder"
                          name="Policyholder"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={policyCore.Policyholder}
                        />
                        <datalist id="Industry">{industryArray}</datalist>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Policyholder Retired </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="PolicyHolder_retired"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={policyCore.PolicyHolder_retired === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="PolicyHolder_retired"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={policyCore.PolicyHolder_retired === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is business conducted from home  
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="business_conducted"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={policyCore.business_conducted === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="business_conducted"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={policyCore.business_conducted === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is the property under construction?
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="property_under_construction"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={
                              policyCore.property_under_construction === "yes"
                            }
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="property_under_construction"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={
                              policyCore.property_under_construction === "no"
                            }
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-right">
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is the property in poor condition or poorly
                          maintained?
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="Poor_conditon"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={policyCore.Poor_conditon === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="Poor_conditon"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={policyCore.Poor_conditon === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is the property Currently or will be unoccupied for
                          more than 90 days?
                        </p>
                      </div>
                      <div className="grid-right">
                        <select
                          className="select"
                          name="unoccupided"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                        >
                          <option
                            value=""
                            disabled={policyCore.unoccupided ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">60 Days</option>
                          <option value="24 Months">90 Days</option>
                          <option value="5 Years">120 Days</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is the property used as a hostel, bed and breakfast or
                          guesthouse?
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="UseAsHotel"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={policyCore.UseAsHotel === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="UseAsHotel"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={policyCore.UseAsHotel === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is the property used for community housing or public
                          housing?
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="UseAsCommunity"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={policyCore.UseAsCommunity === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="UseAsCommunity"
                            onChange={(e) => {
                              setPolicyCore({
                                ...policyCore,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={policyCore.UseAsCommunity === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Policyholder currently hold insurance 
                        </p>
                      </div>
                      <div className="grid-right">
                        <select
                          className="select"
                          name="Policyholder_hold"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={policyCore.Policyholder_hold}
                        >
                          <option
                            value=""
                            disabled={
                              policyCore.Policyholder_hold ? true : null
                            }
                          >
                            No
                          </option>
                          <option value="12 Months"> 0 - 1 Year</option>
                          <option value="24 Months"> 1 - 5 Years</option>
                          <option value="5 Years">5 - 10 Years</option>
                          <option value="5 Years">10+ Years</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Interested Parties </p>
                      </div>
                      <div className="grid-right">
                        <input
                          type="text"
                          list="Parties"
                          className="input-text-single"
                          name="Interested_parties"
                          placeholder="Parties"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={policyCore.Interested_parties}
                        />
                        <datalist id="Parties">{partiesArray}</datalist>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Excess Option 1 </p>
                      </div>
                      <div className="grid-right">
                        <input
                          type="text"
                          list="Excess"
                          className="input-text-single"
                          placeholder="$"
                          name="Excess"
                          onChange={(e) => {
                            setPolicyCore({
                              ...policyCore,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={policyCore.Excess}
                        />
                        <datalist id="Excess">{excessArray}</datalist>
                      </div>
                    </div>

                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Payment Frequency</p>
                      </div>
                      <div className="grid-right">
                        <div className="radio-type-3">
                          <div className="true-class flex-2">
                            <input
                              type="radio"
                              name="Payment_frequency"
                              id="Payment_frequency-yes"
                              onChange={(e) => {
                                setPolicyCore({
                                  ...policyCore,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value="yes"
                              checked={policyCore.Payment_frequency === "yes"}
                              className="true-radio"
                            />
                            <label htmlFor="Payment_frequency-yes">
                              <span className="radio-true">Yearly</span>
                            </label>
                          </div>
                          <div className="false-class flex-2">
                            <input
                              type="radio"
                              id="Payment_frequency-no"
                              name="Payment_frequency"
                              onChange={(e) => {
                                setPolicyCore({
                                  ...policyCore,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value="no"
                              checked={policyCore.Payment_frequency === "no"}
                              className="false-radio"
                            />
                            <label htmlFor="Payment_frequency-no">
                              <span className="radio-false">Monthly</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-box mgb-4">
                <div className="button-start">
                  <button className="btn cancel" onClick={cancel_Policy}>
                    Cancel
                  </button>
                </div>
                <div className="button-end">
                  <button className="btn preview">Preview</button>
                  <button className="btn submit" onClick={printPolicyCore}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Building  */}
        {isActive === "btn-4" && (
          <div className="content">
            <div className="sub-page">
              <h1 className="h1">BUILDING INFORMATION</h1>
              <div>
                <div className="grid-half">
                  <div className="grid-left">
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is insured address the same as Postal Address? 
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="AsSameAddress"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.AsSameAddress === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="AsSameAddress"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.AsSameAddress === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is the property heritage listed? 
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="IsThe_Propery_heritage"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.IsThe_Propery_heritage === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="IsThe_Propery_heritage"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.IsThe_Propery_heritage === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          What is the occupancy of the home? 
                        </p>
                      </div>
                      <div className="grid-right">
                        <select
                          className="select"
                          name="occupancy"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                        >
                          <option
                            value=""
                            disabled={building.occupancy ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">Rent / Lease</option>
                          <option value="24 Months">Owner Occupied</option>
                          <option value="5 Years">Holiday Home</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Building Type </p>
                      </div>
                      <div className="grid-right">
                        <input
                          type="text"
                          list="Building "
                          name="BuildingType"
                          className="input-text-single"
                          placeholder="Select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.BuildingType}
                        />
                        <datalist id="Building ">{buildingArray}</datalist>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Site exceeding 20,000 square meters or 2 hectares or 5
                          acres? 
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="siteExceeding"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.siteExceeding === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="siteExceeding"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.siteExceeding === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Construction Period </p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="constructionPeriod"
                          className="select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.constructionPeriod}
                        >
                          <option
                            value=""
                            disabled={building.constructionPeriod ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">
                            1960 To Now Project Home
                          </option>
                          <option value="24 Months">
                            1960 to now Architect
                          </option>
                          <option value="5 Years">1946 - 1959</option>
                          <option value="5 Years">1914 - 1945</option>
                          <option value="5 Years">1891 - 1913</option>
                          <option value="5 Years">1840 - 1890</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-2">
                      <div className="input-date">
                        <label htmlFor="date">Original Year Built</label>
                        <input
                          type="date"
                          id="date"
                          className="date-input"
                          name="originalYear"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          checked={building.originalYear}
                        />
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Construction of the walls</p>
                      </div>
                      <div className="grid-right">
                        <input
                          type="text"
                          list="Construction"
                          name="Construction"
                          className="input-text-single"
                          placeholder="Construction"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          checked={building.Construction}
                        />
                        <datalist id="Construction">{wallArray}</datalist>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Roof Construction</p>
                      </div>
                      <div className="grid-right">
                        <input
                          type="text"
                          list="RoofConstruction"
                          name="RoofConditon"
                          className="input-text-single"
                          placeholder="Roof Type"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          checked={building.RoofConditon}
                        />
                        <datalist id="RoofConstruction">{roofArray}</datalist>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Construction quality of home</p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="Quality"
                          className="select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.Quality}
                        >
                          <option
                            value=""
                            disabled={building.Quality ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">Standard </option>
                          <option value="24 Months">Quality</option>
                          <option value="5 Years">Prestige</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="grid-right">
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Number of Storeys does the property have
                        </p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="Propert"
                          className="select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.Propert}
                        >
                          <option
                            value=""
                            disabled={building.Propert ? true : null}
                          >
                            No
                          </option>
                          <option value="1">1 </option>
                          <option value="2">2</option>
                          <option value="3 & more">3 & more</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          House within 250m of named water course or effected by
                          flood 
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="WaterHouse"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.WaterHouse === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="WaterHouse"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.WaterHouse === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Mains Water Supply</p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="MainsWater"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.MainsWater === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="MainsWater"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.MainsWater === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Window Security</p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="WindowSecurity"
                          className="select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.WindowSecurity}
                        >
                          <option
                            value=""
                            disabled={building.WindowSecurity ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">Key Operated Locks</option>
                          <option value="24 Months">
                            No accessible Windows
                          </option>
                          <option value="5 Years">Security Screens</option>
                          <option value="5 Years">None of these</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Door Security </p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="DoorSecurity"
                          className="select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.DoorSecurity}
                        >
                          <option
                            value=""
                            disabled={building.DoorSecurity ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">
                            Key Operated dead Locks / bolts
                          </option>
                          <option value="24 Months">
                            Double Key Operated Dead locks / Bolts
                          </option>
                          <option value="5 Years">Security Cards</option>
                          <option value="5 Years">None of the above</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">Burglar Alarm </p>
                      </div>
                      <div className="grid-right">
                        <select
                          name="BurglarAlam"
                          className="select"
                          onChange={(e) => {
                            setBuilding({
                              ...building,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          onBlur={handleFocus}
                          focused={focused.toString()}
                          required={true}
                          value={building.BurglarAlam}
                        >
                          <option
                            value=""
                            disabled={building.BurglarAlam ? true : null}
                          >
                            No
                          </option>
                          <option value="12 Months">back to base</option>
                          <option value="24 Months">Local</option>
                          <option value="5 Years">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Building or construction in the next 12 months  
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="Building_Or_Constrcution"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={
                              building.Building_Or_Constrcution === "yes"
                            }
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="Building_Or_Constrcution"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.Building_Or_Constrcution === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Does the property have an inground swimming pool
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="SwimmingPool"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.SwimmingPool === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="SwimmingPool"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.SwimmingPool === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Is there any portion of the Building or Contents
                          located below ground level?
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="Below_Ground_level"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.Below_Ground_level === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="Below_Ground_level"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.Below_Ground_level === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="grid-left">
                        <p className="text-pa">
                          Are there any private flood mitigation measures at
                          your property?
                        </p>
                      </div>
                      <div className="grid-right">
                        <div className="toggle">
                          <input
                            id="yes-radio"
                            type="radio"
                            name="Private_flood"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            checked={building.Private_flood === "yes"}
                            value="yes"
                          />
                          <label htmlFor="yes-radio" className="on-btn">
                            yes
                          </label>
                          <input
                            id="no-radio"
                            type="radio"
                            name="Private_flood"
                            onChange={(e) => {
                              setBuilding({
                                ...building,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required={true}
                            value="no"
                            checked={building.Private_flood === "no"}
                          />
                          <label htmlFor="no-radio" className="off-btn">
                            no
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-box mgb-4">
                <div className="button-start">
                  <button className="btn cancel" onClick={cancel_Building}>
                    Cancel
                  </button>
                </div>
                <div className="button-end">
                  <button className="btn preview">Preview</button>
                  {/* <button className="btn submit">next</button> */}
                  <button className="btn submit" onClick={printbuilding}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Content */}
        {isActive === "btn-5" && (
          <div className="content">
            <div className="sub-page">
              <h1 className="h1">CONTENTS</h1>
              <div>
                <div className="text-pa mg-top mg-left">
                  Use the ADD MORE button below to add "Valuable Items" and
                  "Specified Portable Items". Please ensure that when adding the
                  Valuable Items or the Specified valuable Item that you
                  complete all fields
                </div>
                <form>
                  {inputField.map((input, index) => {
                    return (
                      <div key={index} className="flex-4">
                        <div className="grid">
                          <div className="grid-left">
                            <p className="text-pa">Type</p>
                          </div>
                          <div className="grid-right">
                            <select
                              name="Type"
                              className="select"
                              onChange={(event) =>
                                handleFromChange(index, event)
                              }
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value={input.Type}
                            >
                              <option
                                value=""
                                disabled={input.Type ? true : null}
                              >
                                No
                              </option>
                              <option value="Valuable Item">
                                Valuable Item{" "}
                              </option>
                              <option value="Specified Portable Item">
                                Specified Portable Item
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="grid">
                          <div className="grid-left">
                            <p className="text-pa">Category</p>
                          </div>
                          <div className="grid-right">
                            <input
                              type="text"
                              list="category"
                              name="Category"
                              className="input-text-single"
                              placeholder="Category"
                              onChange={(event) =>
                                handleFromChange(index, event)
                              }
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value={input.Category}
                            />
                            <datalist id="category">{categoryArray}</datalist>
                          </div>
                        </div>
                        <div className="grid">
                          <div className="grid-left">
                            <p className="text-pa">Description</p>
                          </div>
                          <div className="grid-right">
                            <input
                              type="text"
                              name="Description"
                              className="input-text"
                              placeholder="Description"
                              onChange={(event) =>
                                handleFromChange(index, event)
                              }
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value={input.Description}
                            />
                          </div>
                        </div>
                        <div className="grid">
                          <div className="grid-left">
                            <p className="text-pa">Value</p>
                          </div>
                          <div className="grid-right">
                            <input
                              type="text"
                              name="Value"
                              className="input-text"
                              placeholder="$"
                              onChange={(event) =>
                                handleFromChange(index, event)
                              }
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              value={input.Value}
                            />
                          </div>
                        </div>
                        <div className="button-box ">
                          <div className="button-start">
                            <button
                              className="btn cancel mg-4"
                              onClick={() => removeFields(index)}
                            >
                              Remove
                            </button>
                          </div>
                          <div className="button-end">
                            {/* <button className="btn preview " onClick={contentCancel}>
                        Cancel
                      </button> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </form>
              </div>
              <div className="button-box">
                <div className="button-start">
                  <button className="big-btn" onClick={addFields}>
                    <img src={add} alt="img icon" className="icon" />
                    <p>Add</p>
                  </button>
                </div>
                <div className="button-end">
                  <button className="btn submit" onClick={printContent}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Claims */}
        {/* <div>
          {" "}
          {isActive === "btn-6" && (
            <div className="content">
              <div className="sub-page">
                <h1 className="h1">Claims</h1>
                <div>
                  <div className="text-pa mg-top mg-left">
                    Add button below to add claims in the last 5 years
                  </div>
                  <form>
                    {claims.map((input, index) => {
                      return (
                        <div key={index} className="width-1">
                          <div className="grid">
                            <div className="grid-left">
                              <p className="text-pa">Type of Claims</p>
                            </div>
                            <div className="grid-right">
                              <input
                                type="text"
                                list="type"
                                name="Type"
                                className="input-text-single"
                                placeholder="Type"
                                onChange={(event) =>
                                  handleFromChangeClaims(index, event)
                                }
                                onBlur={handleFocus}
                                focused={focused.toString()}
                                required={true}
                                value={input.Type}
                              />
                              <datalist id="type">{claimTypeArray}</datalist>
                            </div>
                          </div>

                          <div className="input-date ">
                            <label htmlFor="date">Date</label>
                            <input
                              type="date"
                              id="date"
                              className="date-input "
                              name="Date"
                              onChange={(event) =>
                                handleFromChangeClaims(index, event)
                              }
                              onBlur={handleFocus}
                              focused={focused.toString()}
                              required={true}
                              checked={input.Date}
                            />
                          </div>
                          <div className="grid">
                            <div className="grid-left">
                              <p className="text-pa">Description</p>
                            </div>
                            <div className="grid-right">
                              <input
                                type="text"
                                name="Description"
                                className="input-text"
                                placeholder="Description"
                                onChange={(event) =>
                                  handleFromChangeClaims(index, event)
                                }
                                onBlur={handleFocus}
                                focused={focused.toString()}
                                required={true}
                                value={input.Description}
                              />
                            </div>
                          </div>
                          <div className="grid">
                            <div className="grid-left">
                              <p className="text-pa">Amount</p>
                            </div>
                            <div className="grid-right">
                              <input
                                type="text"
                                name="Amount"
                                className="input-text"
                                placeholder="Amount $"
                                onChange={(event) =>
                                  handleFromChangeClaims(index, event)
                                }
                                onBlur={handleFocus}
                                focused={focused.toString()}
                                required={true}
                                value={input.Amount}
                              />
                            </div>
                          </div>
                          <div className="grid">
                            <div className="grid-left">
                              <p className="text-pa">Insurer</p>
                            </div>
                            <div className="grid-right">
                              <input
                                type="text"
                                list="insurer"
                                name="Insurer"
                                className="input-text-single"
                                placeholder="Insurer"
                                onChange={(event) =>
                                  handleFromChangeClaims(index, event)
                                }
                                onBlur={handleFocus}
                                focused={focused.toString()}
                                required={true}
                                value={input.Insurer}
                              />
                              <datalist id="insurer">{insurAuArray}</datalist>
                            </div>
                          </div>
                          <div className="button-box ">
                            <div className="button-start">
                              <button
                                className="btn cancel mg-4"
                                onClick={() => removeFieldChange(index)}
                              >
                                Remove
                              </button>
                            </div>
                            <div className="button-end">
                              {/* <button className="btn preview " onClick={contentCancel}>
                        Cancel
                      </button> */}
        {/* </div>
                          </div>
                        </div>
                      );
                    })}
                  </form>
                </div>
                <div className="button-box">
                  <div className="button-start">
                    <button className="big-btn" onClick={addFieldClaims}>
                      <img src={add} alt="img icon" className="icon" />
                      <p>Add</p>
                    </button>
                  </div>
                  <div className="button-end">
                    <button className="btn submit" onClick={printClaims}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div> */}

        {isActive === "btn-6" && <HomeClaims />}
      </div>
    </div>
  );
}

export default Home;
