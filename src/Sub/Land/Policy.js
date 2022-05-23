import React from "react";

function Policy() {
  return (
    <div className="sub-page">
      <h1 className="h1">Policy Core</h1>

      <div className="div">
        <div className="grid-half">
          <div className="grid-left">
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Cover Type (Accidental Damage or Defined Events only) *
                </p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Accidental Damage </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Listed Events</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">What is the occupancy of the home?</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Valuable Item </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Specified Portable Item</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">How is the property managed?</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">
                      Landlord Manages the Property{" "}
                    </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">
                      Property Manager / onsite manager
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Building or Contents</p>
              </div>
              <div className="grid-right">
                <select name="month" id="" className="select">
                  <option value="No" disabled>
                    Please Select{" "}
                  </option>
                  <option value="12 Months">Building Only</option>
                  <option value="24 Months">Contents Only</option>
                  <option value="5 Years">Building & Contents</option>
                </select>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Building Sum Insured </p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="$"
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Landlord Contents Sum Insured Amount </p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="$"
                />
              </div>
            </div>

            <div className="flex width-max">
              <input type="date" name="" id="" className="date-from" />
              <input type="date" name="" id="" className="date-end mg-left" />
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Date of Birth of oldest insured</p>
              </div>
              <div className="grid-right">
                <input type="date" name="" id="" className="date-from" />
              </div>
            </div>

            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Policyholder currently hold insurance 
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
                <p className="text-pa">Is the policyholder retired </p>
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
                <p className="text-pa">Interested Parties</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Valuable Item </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Specified Portable Item</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Restricted driver discount</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Insurer Decides</div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">PolicyHolder Decides</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-right">
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Holding Broker?</p>
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
                <p className="text-pa">Current Insurer?</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Valuable Item </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Specified Portable Item</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Stamp Duty Exempt?</p>
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
                <p className="text-pa">No claim bonus</p>
              </div>
              <div className="grid-right">
                <div className="range-main">
                  <div className="min">0 Level</div>
                  <input type="range" name="" id="" className="range" />
                  <div className="max">6 Level</div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Payment Frequency </p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Yearly </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Monthly</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Optional cover for Theft by tenant </p>
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
                <p className="text-pa">Optional cover for Loss of Rent </p>
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
                <p className="text-pa">Annual rental amount </p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="$"
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Weekly rental amount </p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  name="firstname"
                  id=""
                  className="input-text"
                  placeholder="$"
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Optional Cover for Accidental damage by tenants 
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
                <p className="text-pa">Optional cover for Rent Default</p>
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
                <p className="text-pa">SVU Excess Option 1</p>
              </div>
              <div className="grid-right">
                <div className="flex">
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Valuable Item </div>
                  </label>
                  <label className="rad-label">
                    <input type="radio" className="rad-input" name="rad" />
                    <div className="rad-design"></div>
                    <div className="rad-text">Specified Portable Item</div>
                  </label>
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

export default Policy;
