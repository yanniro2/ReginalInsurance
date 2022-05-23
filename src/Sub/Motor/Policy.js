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
    CorrentInsurer: "",
    DutyExempt: "",
    NoOfClaimsProtection: "",
    NoClaimBonus: "",
    PaymentFrequency: "",
    CoverType: "",
    SumInsured: "",
    Policy_from: "",
    Policy_To: "",
    Roadside: "",
    HireCare: "",
    WindScreen: "",
    Restricted: "",
    Name: "",
    ToolsOfTrade: "",
    Intrested_parties: "",
    Occupation: "",
    CommercialPurpose: "",
    Excuess: "",
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
      CorrentInsurer: "",
      DutyExempt: "",
      NoOfClaimsProtection: "",
      NoClaimBonus: "",
      PaymentFrequency: "",
      CoverType: "",
      SumInsured: "",
      Policy_from: "",
      Policy_To: "",
      Roadside: "",
      HireCare: "",
      WindScreen: "",
      Restricted: "",
      Name: "",
      ToolsOfTrade: "",
      Intrested_parties: "",
      Occupation: "",
      CommercialPurpose: "",
      Excuess: "",
    });
  };
  return (
    <div className="sub-page">
      <h1 className="h1">Policy Core</h1>

      <div className="div">
        <div className="grid-half">
          <div className="grid-left">
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Current Insurer?</p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  list="Industry"
                  className="input-text-single"
                  placeholder="CorrentInsurer"
                  name="CorrentInsurer"
                  onChange={(e) => {
                    setPolicyCore({
                      ...policyCore,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  value={policyCore.CorrentInsurer}
                />
                <datalist id="Industry">{industryArray}</datalist>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Stamp Duty Exempt?</p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="DutyExempt"
                    onChange={(e) => {
                      setPolicyCore({
                        ...policyCore,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    checked={policyCore.DutyExempt === "yes"}
                    value="yes"
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="DutyExempt"
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
                    checked={policyCore.DutyExempt === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">No claim bonus protection</p>
              </div>
              <div className="grid-right">
                <select
                  className="select"
                  name="NoOfClaimsProtection"
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
                    disabled={policyCore.NoOfClaimsProtection ? true : null}
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
                <p className="text-pa">No claim bonus</p>
              </div>
              <div className="grid-right">
                <div className="radio-type-3">
                  <div className="true-class flex-2">
                    <input
                      type="radio"
                      name="NoClaimBonus"
                      id="NoClaimBonus-yes"
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
                      checked={policyCore.NoClaimBonus === "yes"}
                      className="true-radio"
                    />
                    <label htmlFor="NoClaimBonus-yes">
                      <span className="radio-true">Yearly</span>
                    </label>
                  </div>
                  <div className="false-class flex-2">
                    <input
                      type="radio"
                      id="NoClaimBonus-no"
                      name="NoClaimBonus"
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
                      checked={policyCore.NoClaimBonus === "no"}
                      className="false-radio"
                    />
                    <label htmlFor="NoClaimBonus-no">
                      <span className="radio-false">Monthly</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Payment Frequency </p>
              </div>
              <div className="grid-right">
                <div className="radio-type-3">
                  <div className="true-class flex-2">
                    <input
                      type="radio"
                      name="PaymentFrequency"
                      id="PaymentFrequency-yes"
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
                      checked={policyCore.PaymentFrequency === "yes"}
                      className="true-radio"
                    />
                    <label htmlFor="PaymentFrequency-yes">
                      <span className="radio-true">Yearly</span>
                    </label>
                  </div>
                  <div className="false-class flex-2">
                    <input
                      type="radio"
                      id="PaymentFrequency-no"
                      name="PaymentFrequency"
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
                      checked={policyCore.PaymentFrequency === "no"}
                      className="false-radio"
                    />
                    <label htmlFor="PaymentFrequency-no">
                      <span className="radio-false">Monthly</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Cover Type </p>
              </div>
              <div className="grid-right">
                <select
                  name="CoverType"
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
                  value={policyCore.CoverType}
                >
                  <option
                    value=""
                    disabled={policyCore.CoverType ? true : null}
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
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Sum Insured </p>
              </div>
              <div className="grid-right">
                <div className="radio-type-3">
                  <div className="true-class flex-2">
                    <input
                      type="radio"
                      name="SumInsured"
                      id="SumInsured-yes"
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
                      checked={policyCore.SumInsured === "yes"}
                      className="true-radio"
                    />
                    <label htmlFor="SumInsured-yes">
                      <span className="radio-true">Yearly</span>
                    </label>
                  </div>
                  <div className="false-class flex-2">
                    <input
                      type="radio"
                      id="SumInsured-no"
                      name="SumInsured"
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
                      checked={policyCore.SumInsured === "no"}
                      className="false-radio"
                    />
                    <label htmlFor="SumInsured-no">
                      <span className="radio-false">Monthly</span>
                    </label>
                  </div>
                </div>
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
                  name="Policy_To"
                  onChange={(e) => {
                    setPolicyCore({
                      ...policyCore,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  checked={policyCore.Policy_To}
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Roadside Assistance</p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="Roadside"
                    onChange={(e) => {
                      setPolicyCore({
                        ...policyCore,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    checked={policyCore.Roadside === "yes"}
                    value="yes"
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="Roadside"
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
                    checked={policyCore.Roadside === "no"}
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
                <p className="text-pa">Hire Care Inclusion (SVU & Allianz</p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="HireCare"
                    onChange={(e) => {
                      setPolicyCore({
                        ...policyCore,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    checked={policyCore.HireCare === "yes"}
                    value="yes"
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="HireCare"
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
                    checked={policyCore.HireCare === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">WindScreen Excess Waiver</p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="WindScreen"
                    onChange={(e) => {
                      setPolicyCore({
                        ...policyCore,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    checked={policyCore.WindScreen === "yes"}
                    value="yes"
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="WindScreen"
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
                    checked={policyCore.WindScreen === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>

            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Restricted driver discount</p>
              </div>
              <div className="grid-right">
                <div className="radio-type-3">
                  <div className="true-class flex-2">
                    <input
                      type="radio"
                      name="SumInsured"
                      id="Restricted-yes"
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
                      checked={policyCore.Restricted === "yes"}
                      className="true-radio"
                    />
                    <label htmlFor="Restricted-yes">
                      <span className="radio-true">Yearly</span>
                    </label>
                  </div>
                  <div className="false-class flex-2">
                    <input
                      type="radio"
                      id="Restricted-no"
                      name="Restricted"
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
                      checked={policyCore.Restricted === "no"}
                      className="false-radio"
                    />
                    <label htmlFor="Restricted-no">
                      <span className="radio-false">Monthly</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Named Driver</p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="Name"
                    onChange={(e) => {
                      setPolicyCore({
                        ...policyCore,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    checked={policyCore.Name === "yes"}
                    value="yes"
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="Name"
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
                    checked={policyCore.Name === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Tools of Trade</p>
              </div>
              <div className="grid-right">
                <div className="radio-type-3">
                  <div className="true-class flex-2">
                    <input
                      type="radio"
                      name="ToolsOfTrade"
                      id="ToolsOfTrade-yes"
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
                      checked={policyCore.ToolsOfTrade === "yes"}
                      className="true-radio"
                    />
                    <label htmlFor="ToolsOfTrade-yes">
                      <span className="radio-true">Yearly</span>
                    </label>
                  </div>
                  <div className="false-class flex-2">
                    <input
                      type="radio"
                      id="ToolsOfTrade-no"
                      name="ToolsOfTrade"
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
                      checked={policyCore.ToolsOfTrade === "no"}
                      className="false-radio"
                    />
                    <label htmlFor="ToolsOfTrade-no">
                      <span className="radio-false">Monthly</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Interested Parties</p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  list="Industry"
                  className="input-text-single"
                  placeholder="Policy Holder"
                  name="Intrested_parties"
                  onChange={(e) => {
                    setPolicyCore({
                      ...policyCore,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  value={policyCore.Intrested_parties}
                />
                <datalist id="Industry">{industryArray}</datalist>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Occupation of Policyholder</p>
              </div>
              <div className="grid-right">
                <input
                  type="text"
                  list="Industry"
                  className="input-text-single"
                  placeholder="Policy Holder"
                  name="Occupation"
                  onChange={(e) => {
                    setPolicyCore({
                      ...policyCore,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  required={true}
                  value={policyCore.Occupation}
                />
                <datalist id="Industry">{industryArray}</datalist>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">
                  Is Your vehicle involved in Commercial Purposes Caravan
                  Operations (i.e Hot Dog Vans, Food Vans, Mobile Coffee Shops
                  etc)
                </p>
              </div>
              <div className="grid-right">
                <div className="toggle">
                  <input
                    id="yes-radio"
                    type="radio"
                    name="CommercialPurpose"
                    onChange={(e) => {
                      setPolicyCore({
                        ...policyCore,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    required={true}
                    checked={policyCore.CommercialPurpose === "yes"}
                    value="yes"
                  />
                  <label htmlFor="yes-radio" className="on-btn">
                    yes
                  </label>
                  <input
                    id="no-radio"
                    type="radio"
                    name="CommercialPurpose"
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
                    checked={policyCore.CommercialPurpose === "no"}
                  />
                  <label htmlFor="no-radio" className="off-btn">
                    no
                  </label>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-left">
                <p className="text-pa">Excess Option 1</p>
              </div>
              <div className="grid-right">
                <select
                  name="Excuess"
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
                  value={policyCore.Excuess}
                >
                  <option value="" disabled={policyCore.Excuess ? true : null}>
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
