import React from "react";

function Client() {
  return (
    <div className="sub-page">
      <div className="heading">
        <h1 className="h1">General Information</h1>
      </div>
      <div className="form-content">
        <div className="box-main">
          <div className="flex-2 pad-1">
            <p className="text-pa">EXISTING Client ?</p>
            <input
              type="text"
              name="firstname"
              id=""
              className="input-text"
              placeholder="Client Code"
            />
          </div>
          <div className="box-1">
            <h2 className="h2">Type</h2>
            <div className="box-2">
              <label className="rad-label">
                <input type="radio" className="rad-input" name="rad" />
                <div className="rad-design"></div>
                <div className="rad-text">Individual</div>
              </label>
            </div>
            <div className="box-2">
              <label className="rad-label">
                <input type="radio" className="rad-input" name="rad" />
                <div className="rad-design"></div>
                <div className="rad-text">Company</div>
              </label>
            </div>
          </div>
          <div className="box-1">
            <h2 className="h2">insured address the same</h2>
            <div className="box-2">
              <label className="rad-label">
                <input type="radio" className="rad-input" name="rad" />
                <div className="rad-design"></div>
                <div className="rad-text">Yes</div>
              </label>
            </div>
            <div className="box-2">
              <label className="rad-label">
                <input type="radio" className="rad-input" name="rad" />
                <div className="rad-design"></div>
                <div className="rad-text">No</div>
              </label>
            </div>
          </div>
          <div className="box-2">
            <input
              type="text"
              name="mobile"
              id=""
              className="input-text"
              placeholder="Mobile"
            />

            <input
              type="email"
              name="email"
              id=""
              className="input-text"
              placeholder="email"
            />
          </div>
        </div>
        <div className="box-main">
          <div className="box-address">
            <div className="box-1"></div>
            <h2 className="h2">Address</h2>
            <div className="box-2">
              <input
                type="text"
                name="streetNo"
                id=""
                className="input-text"
                placeholder="Unit No"
              />
            </div>
            <div className="box-2">
              <input
                type="text"
                name="streetNo"
                id=""
                className="input-text"
                placeholder="Street No"
              />
              <input
                type="text"
                list="datalist"
                id=""
                name="streetType"
                className="input-text-single datalist-width "
                placeholder="Street Type"
              />
              <datalist id="datalist">
                <option value="dog 1" />
                <option value="cat 2" />
                <option value="tiger 3" />
                <option value="Value 4" />
              </datalist>
            </div>
            <div className="box-2">
              <input
                type="text"
                name="streetName"
                id=""
                className="input-text"
                placeholder="Street Name"
              />
              <input
                type="text"
                name="Suburb"
                id=""
                className="input-text"
                placeholder="Suburb"
              />
            </div>
            <div className="box-2">
              <input
                type="text"
                list="datalist"
                id=""
                name="state"
                className="input-text-single"
                placeholder="state"
              />
              <datalist id="datalist">
                <option value="dog 1" />
                <option value="cat 2" />
                <option value="tiger 3" />
                <option value="Value 4" />
              </datalist>
            </div>
            <div className="box-2">
              <input
                type="text"
                name="PostCode"
                id=""
                className="input-text"
                placeholder="Postcode"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn cancel mg-4">Cancel</button>
        <button className="btn submit">Submit</button>
      </div>
    </div>
  );
}

export default Client;
