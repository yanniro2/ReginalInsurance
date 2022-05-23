import React from "react";

function Vehicle() {
  return (
    <div className="sub-page">
      <h1 className="h1">Vehicle INFORMATION</h1>
      <div>
        <div className="grid-half">
          <div className="grid-left">
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Vehicle Type</p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  list="datalist"
                  id=""
                  name="state"
                  className="input-text-single"
                  placeholder="Select"
                />
                <datalist id="datalist">
                  <option value="dog 1" />
                  <option value="cat 2" />
                  <option value="tiger 3" />
                  <option value="Value 4" />
                </datalist>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Construction Period </p>
              </div>
              <div className="grid-right">
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
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Original Year Built </p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="Year"
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
                  list="datalist"
                  id=""
                  name="state"
                  className="input-text-single"
                  placeholder="Select"
                />
                <datalist id="datalist">
                  <option value="defalt" disabled />
                  <option value="Free Standing / House" />
                  <option value="TownHouse" />
                  <option value="Apartment / Ground Floor" />
                  <option value="Apartment / Above Ground Floor" />
                  <option value="Display Home" />
                  <option value="Semi-Detached  / Terrace" />
                  <option value="Other" />
                </datalist>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Roof Construction</p>
              </div>
              <div className="grid-right">
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
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Number of bathrooms and ensuites </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">1</option>
                  <option value="24 Months">2</option>
                  <option value="5 Years">3</option>
                  <option value="5 Years">4</option>
                  <option value="5 Years">5</option>
                  <option value="5 Years">6</option>
                  <option value="5 Years">7</option>
                  <option value="5 Years">8</option>
                  <option value="5 Years">9</option>
                  <option value="5 Years">10+</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Number of bedrooms  </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">1</option>
                  <option value="24 Months">2</option>
                  <option value="5 Years">3</option>
                  <option value="5 Years">4</option>
                  <option value="5 Years">5</option>
                  <option value="5 Years">6</option>
                  <option value="5 Years">7</option>
                  <option value="5 Years">8</option>
                  <option value="5 Years">9</option>
                  <option value="5 Years">10+</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Construction quality of home</p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">Standard</option>
                  <option value="24 Months">Quality</option>
                  <option value="5 Years">Prestige</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Storeys</p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">Ground</option>
                  <option value="12 Months">1</option>
                  <option value="24 Months">2</option>
                  <option value="5 Years">3 / More </option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Vehicle size in square meters</p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="meters"
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  House within 250m of named water course or effected by flood
                </p>
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
                <p className="text-pa">Mains Water Supply</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <button className="btn-no btn">No</button>
                  <button className="btn-yes btn">Yes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-right">
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Window Security</p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">Key Operated Locks</option>
                  <option value="24 Months">No accessible windows</option>
                  <option value="5 Years">Security screens</option>
                  <option value="5 Years">None of these</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Door Security</p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select
                  </option>
                  <option value="12 Months">
                    Key Operated Operated dead locks / bolts
                  </option>
                  <option value="24 Months">Security Cards</option>
                  <option value="5 Years">None of the above</option>
                </select>
              </div>
            </div>

            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Burglar Alarm </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select
                  </option>
                  <option value="12 Months">back to base</option>
                  <option value="24 Months">Local</option>
                  <option value="5 Years">None</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Smoke Detectors </p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select
                  </option>
                  <option value="12 Months">Back to Base</option>
                  <option value="24 Months">Local</option>
                  <option value="5 Years">None</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Vehicle or construction in the next 12 months  
                </p>
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
                <p className="text-pa">
                  Does the property have a swimming pool, outdoor spa or lift
                </p>
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
                <p className="text-pa">
                  Is there any portion of the Vehicle or Contents located below
                  ground level?
                </p>
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
                <p className="text-pa">
                  Are there any private flood mitigation measures at your
                  property?
                </p>
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
                <p className="text-pa">Has property an occupancy certificate</p>
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
                <p className="text-pa">
                  Is the property registered under a Body Corporate ?
                </p>
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
                <p className="text-pa">
                  Is the property part of a strata title *
                </p>
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
                <p className="text-pa">
                  How many unrelated persons are living in the Vehicle 
                </p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="No"
                />
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

export default Vehicle;
