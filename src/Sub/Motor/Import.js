import React from "react";
import { useState } from "react";
function Import() {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const [imported, setImport] = useState({
    Policy_Declined_month: "",
    Policy_Declined_Year: "",
    Claim_Declined: "",
    Criminal_conviction: "",
    Damage: "",
    Criminal_offence: "",
    Bankrupt: "",
  });

  const cancel_import = () => {
    setImport({
      Policy_Declined_month: "",
      Policy_Declined_Year: "",
      Claim_Declined: "",
      Criminal_conviction: "",
      Damage: "",
      Criminal_offence: "",
      Bankrupt: "",
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
    <div className="sub-page">
      <h1 className="h1">import questions</h1>

      <div className="grid">
        <div className="grid-left">
          <p className="text-pa">
            Any insurance policy declined or cancelled by the insurer in the
            last 12 months
          </p>
        </div>
        <div className="grid-right">
          <select
            name="Policy_Declined_month"
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
            value={imported.Policy_Declined_month}
          >
            <option
              value=""
              disabled={imported.Policy_Declined_month ? true : null}
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
          <p className="text-pa">
            Any insurance policy declined or cancelled by the insurer in the
            last 5 years
          </p>
        </div>
        <div className="grid-right">
          <select
            name="Policy_Declined_Year"
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
            value={imported.Policy_Declined_Year}
          >
            <option
              value=""
              disabled={imported.Policy_Declined_Year ? true : null}
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
            value={imported.Claim_Declined}
          >
            <option value="" disabled={imported.Claim_Declined ? true : null}>
              No
            </option>
            <option value="Last 1 year">Last 1 year</option>
            <option value="Last 2 years">Last 2 years</option>
            <option value="Last 3 year">Last 3 year</option>
            <option value="Last 4 year">Last 4 year</option>
            <option value="Last 5 year">Last 5 year</option>
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
          <select
            name="Criminal_conviction"
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
            value={imported.Criminal_conviction}
          >
            <option
              value=""
              disabled={imported.Criminal_conviction ? true : null}
            >
              No
            </option>
            <option value="Last 1 year">Last 1 year</option>
            <option value="Last 2 years">Last 2 years</option>
            <option value="Last 3 year">Last 3 year</option>
            <option value="Last 4 year">Last 4 year</option>
            <option value="Last 5 year">Last 5 year</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <div className="grid-left">
          <p className="text-pa">Existing damage to the vehicle </p>
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
              name="Damage"
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
              checked={imported.Damage === "no"}
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
            Been convicted of a criminal offence during the past 5 years  
          </p>
        </div>
        <div className="grid-right">
          <div className="toggle">
            <input
              id="yes-radio"
              type="radio"
              name="Criminal_offence"
              onChange={(e) => {
                setImport({
                  ...imported,
                  [e.target.name]: e.target.value,
                });
              }}
              onBlur={handleFocus}
              focused={focused.toString()}
              required={true}
              checked={imported.Criminal_offence === "yes"}
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
            Been declared bankrupt or insolvent during the past 5 years
          </p>
        </div>
        <div className="grid-right">
          <div className="toggle">
            <input
              id="yes-radio"
              type="radio"
              name="Bankrupt"
              onChange={(e) => {
                setImport({
                  ...imported,
                  [e.target.name]: e.target.value,
                });
              }}
              onBlur={handleFocus}
              focused={focused.toString()}
              required={true}
              checked={imported.Bankrupt === "yes"}
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

      <div className="button-box mgb-4">
        <div className="button-start">
          <button className="btn cancel">Cancel</button>
        </div>
        <div className="button-end">
          <button className="btn preview">Preview</button>
          <button className="btn submit" onClick={printImport}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Import;
