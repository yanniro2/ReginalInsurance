import React from "react";
// import CategoryArrray from "../../Datas/Content/Category";
import { useState } from "react";

function ContentAdd() {
  const [inputField, setInputField] = useState([
    { Type: "", Category: "", Description: "", Value: "" },
  ]);

  const handleFromChange = (index, event) => {
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };

  const addFields = () => {
    let newField = { Type: "", Category: "", Description: "", Value: "" };
    setInputField([...inputField, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputField];
    data.splice(index, 1);
    setInputField(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputField);
  };
  return (
    <div className="form-1">
      <form>
        {inputField.map((input, index) => {
          return (
            <div key={index}>
              <div className="grid">
                <div className="grid-left">
                  <p className="text-pa">Type</p>
                </div>
                <div className="grid-right">
                  <div className="flex">
                    <label className="rad-label">
                      <input
                        type="radio"
                        className="rad-input"
                        name="Type"
                        onChange={(event) => handleFromChange(index, event)}
                      />
                      <div className="rad-design"></div>
                      <div className="rad-text">Valuable </div>
                    </label>
                    <label className="rad-label">
                      <input
                        type="radio"
                        className="rad-input"
                        name="Type"
                        onChange={(event) => handleFromChange(index, event)}
                      />
                      <div className="rad-design"></div>
                      <div className="rad-text">Specified</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid">
                <div className="grid-left">
                  <p className="text-pa">Category</p>
                </div>
                <div className="grid-right">
                  <input
                    type="text"
                    list="category"
                    name="Category"
                    className="input-text-single"
                    placeholder="Category"
                    onChange={(event) => handleFromChange(index, event)}
                  />
                  {/* <datalist id="category">{CategoryArrray}</datalist> */}
                </div>
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
                    onChange={(event) => handleFromChange(index, event)}
                  />
                </div>
              </div>
              <div className="grid">
                <div className="grid-left">
                  <p className="text-pa">Value</p>
                </div>
                <div className="grid-right">
                  <input
                    type="text"
                    name="Value"
                    className="input-text"
                    placeholder="$"
                    onChange={(event) => handleFromChange(index, event)}
                  />
                </div>
              </div>
              <button
                className="btn cancel mg-4"
                onClick={() => removeFields(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </form>
      <div>
        <button className="btn submit" onClick={submit}>
          Submit
        </button>
        <button className="btn submit" onClick={addFields}>
          Add More
        </button>
      </div>
    </div>
  );
}

export default ContentAdd;
