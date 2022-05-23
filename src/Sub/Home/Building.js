import React from "react";
import { useState } from "react";
import { build } from "../Datas/Building/Building";
import { wallConstruction } from "../Datas/Building/WallConstruction";
import { roofConstruction } from "../Datas/Building/RoofConstruction";

function Building() {
  const buildingArray = build.map((data) => (
    <option key={data.id} value={data.type} />
  ));

  const wallArray = wallConstruction.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const roofArray = roofConstruction.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

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

  return (
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
                  <p className="text-pa">Is the property heritage listed? </p>
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
                  <p className="text-pa">What is the occupancy of the home? </p>
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
                    <option value="12 Months">1960 To Now Project Home</option>
                    <option value="24 Months">1960 to now Architect</option>
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
                    <option value="" disabled={building.Quality ? true : null}>
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
                    <option value="" disabled={building.Propert ? true : null}>
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
                    <option value="24 Months">No accessible Windows</option>
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
                      checked={building.Building_Or_Constrcution === "yes"}
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
                    Is there any portion of the Building or Contents located
                    below ground level?
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
                    Are there any private flood mitigation measures at your
                    property?
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
  );
}

export default Building;
