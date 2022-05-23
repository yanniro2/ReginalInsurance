import React from "react";
import { useState } from "react";
import add from "../Icons/add.svg";
import { claimType } from "../Datas/Claims/Claims";
import { insurAu } from "../Datas/Claims/Insurer";
function Claims() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content">
      <div className="sub-page claim">
        <h1 className="h1">Claims</h1>
        <div>
          <div className="text-pa mg-top mg-left">
            Add button below to add claims in the last 5 years
          </div>
          <form onsubmit={handleSubmit}>
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
                      onChange={(event) => handleFromChangeClaims(index, event)}
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
                    </div>
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
  );
}

export default Claims;
