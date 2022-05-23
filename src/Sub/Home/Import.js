import React from "react";
import { useState } from "react";
// import ErrorImg from "../Icons/alert.svg";
// import CheckArrow from "../Icons/CheckArrow.svg";

function Import() {
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

  return (
    <div>
      <div className="sub-page">
        <h1 className="h1">import questions</h1>

        <div className="grid">
          <div className="grid-left">
            <p className="text-pa">
              Any insurance policy declined or cancelled by the insurer in the
              last 5 years
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
              <option value="" disabled={imported.Claim_Declined ? true : null}>
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
              Had any criminal conviction relating to fraud, theft, dishonesty,
              arson, or malicious damage (excluding any convictions that are not
              legally required to be disclosed)?
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
              Has any person who will be covered by this insurance ever filed
              for Bankruptcy
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
              Has the land or building been flooded more than once in the last
              10 years?
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
    </div>
  );
}

export default Import;
