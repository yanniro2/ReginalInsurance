import React from "react";

function DriverAdd() {
  return (
    <div className="sub-page">
      <h1 className="h1">Main</h1>

      <div className="div">
        <div className="grid-half">
          <div className="grid-left">
            <div className="grid">
              <div className="grid-left">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="firstname"
                />
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="Lastname"
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Gender</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Male </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Female</div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Not Disclosed</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Date of Birth</p>
              </div>
              <div className="grid-right">
                <input type="date" name="" id="" className="date-from" />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Year Australian Driving Licence Obtained and State issued
                </p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <input type="date" name="" id="" className="date-from" />
                  <input
                    type="text"
                    list="datalist"
                    id=""
                    name="state"
                    className="input-text-single"
                    placeholder="Title"
                  />
                  <datalist id="datalist">
                    <option value="dog 1" />
                    <option value="cat 2" />
                    <option value="tiger 3" />
                    <option value="Value 4" />
                  </datalist>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Employment status of the driver </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">Employed</option>
                  <option value="24 Months">Full time student</option>
                  <option value="5 Years">Home duties</option>
                  <option value="5 Years">Retired</option>
                  <option value="5 Years">Self-Employed</option>
                  <option value="5 Years">Unmployed</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Demerit points accumulated in the last 3 years
                </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">0</option>
                  <option value="24 Months">1 - 6 </option>
                  <option value="5 Years">7 - 12</option>
                  <option value="5 Years">13</option>
                  <option value="5 Years">Unsure</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid-right">
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Number of license suspensions or cancellations in last 3
                  years 
                </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">0</option>
                  <option value="24 Months">1</option>
                  <option value="5 Years">2</option>
                  <option value="5 Years">3</option>
                </select>
              </div>
            </div>

            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Convicted, fines or penalties imposed for drug/alcohol
                  offences
                </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">No Fines or Penalties</option>
                  <option value="24 Months">1</option>
                  <option value="5 Years">2</option>
                  <option value="5 Years">3</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Years since first occurrence</p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">0</option>
                  <option value="24 Months">1</option>
                  <option value="5 Years">3</option>
                  <option value="5 Years">4</option>
                  <option value="5 Years">5</option>
                  <option value="5 Years">6</option>
                  <option value="5 Years">7</option>
                  <option value="5 Years">8</option>
                  <option value="5 Years">9</option>
                  <option value="5 Years">10</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Number of claims in the last 3 years </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">0</option>
                  <option value="24 Months">1</option>
                  <option value="5 Years">3</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Had any accident or claim involving a vehicle
                </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">0</option>
                  <option value="24 Months">1</option>
                  <option value="5 Years">2</option>
                  <option value="5 Years">3</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Owns this vehicle</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <button className="btn-no btn">No</button>
                  <button className="btn-yes btn">Yes</button>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Owns another Vehicle</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <button className="btn-no btn">No</button>
                  <button className="btn-yes btn">Yes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-box mgb-4">
        <div className="button-start">
          <button className="btn cancel">Cancel</button>
        </div>
        <div className="button-end">
          <button className="btn preview">Preview</button>
          <button className="btn submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DriverAdd;
