import React from "react";
import { useState } from "react";
import { excess } from "../Datas/Policy/Excess.js";
import { industry } from "../Datas/Policy/Industry";
import { parties } from "../Datas/Policy/Parties";
function Policy() {
  const excessArray = excess.map((data) => (
    <option key={data.id} value={data.price} />
  ));
  const industryArray = industry.map((data) => (
    <option key={data.id} value={data.type} />
  ));

  const partiesArray = parties.map((data) => (
    <option key={data.id} value={data.type} />
  ));
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

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
  return (
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
                        <span className="radio-true">Accidentaal Damage</span>
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
                        <span className="radio-false">Defined Events</span>
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
                      disabled={policyCore.Builiding_Content ? true : null}
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
                  <p className="text-pa">Is business conducted from home  </p>
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
                  <p className="text-pa">Is the property under construction?</p>
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
                      checked={policyCore.property_under_construction === "yes"}
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
                      checked={policyCore.property_under_construction === "no"}
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
                    Is the property in poor condition or poorly maintained?
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
                    Is the property Currently or will be unoccupied for more
                    than 90 days?
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
                      disabled={policyCore.Policyholder_hold ? true : null}
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
  );
}

export default Policy;
