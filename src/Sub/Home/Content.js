import React from "react";
import add from "../Icons/add.svg";
import { useState } from "react";
import { category_list } from "../Datas/Content/Category";
function Content() {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  const categoryArray = category_list.map((data) => (
    <option key={data.id} value={data.type} />
  ));
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

  // const printContent = (e) => {
  //   let value = "";
  //   let erro = 0;
  //   let error_1 = 0;

  //   for (let key in inputField) {
  //     for (let subkey in inputField[key]) {
  //       value = inputField[key][subkey];

  //       if (value === "" || value == null) {
  //         alert("please check your values");
  //         break;
  //       } else {
  //         erro++;
  //         if (erro === 0) {
  //           alert("Empty !!!");
  //         } else if (erro === Object.keys(inputField[key][subkey]).length) {
  //           error_1++;
  //           console.log("Valid");
  //           erro = 0;
  //         }
  //       }
  //     }
  //   }
  //   console.log(error_1);
  //   if (error_1 === 0) {
  //     alert("Empty !!!");
  //   } else if (error_1 === Object.keys(inputField).length) {
  //     alert("Datas add to Success!!!");
  //     console.log(inputField);
  //     console.log(error_1);
  //   }
  // };

  // const contentCancel = (e) => {
  //   setInputField([{ Type: "", Category: "", Description: "", Value: "" }]);
  //   let newField = { Type: "", Category: "", Description: "", Value: "" };
  //   setInputField([...inputField, newField]);
  // };

  const printContent = () => {
    if (!focused) {
      alert("Empty Values");
    } else {
      console.log(inputField);
    }
  };

  return (
    <div className="content">
      <div className="sub-page">
        <h1 className="h1">CONTENTS</h1>
        <div>
          <div className="text-pa mg-top mg-left">
            Use the ADD MORE button below to add "Valuable Items" and "Specified
            Portable Items". Please ensure that when adding the Valuable Items
            or the Specified valuable Item that you complete all fields
          </div>
          <form>
            {inputField.map((input, index) => {
              return (
                <div key={index} className="flex-4">
                  <div className="grid">
                    <div className="grid-left">
                      <p className="text-pa">Type</p>
                    </div>
                    <div className="grid-right">
                      <select
                        name="Type"
                        className="select"
                        onChange={(event) => handleFromChange(index, event)}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required={true}
                        value={input.Type}
                      >
                        <option value="" disabled={input.Type ? true : null}>
                          No
                        </option>
                        <option value="Valuable Item">Valuable Item </option>
                        <option value="Specified Portable Item">
                          Specified Portable Item
                        </option>
                      </select>
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
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required={true}
                        value={input.Category}
                      />
                      <datalist id="category">{categoryArray}</datalist>
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
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required={true}
                        value={input.Description}
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
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required={true}
                        value={input.Value}
                      />
                    </div>
                  </div>
                  <div className="button-box ">
                    <div className="button-start">
                      <button
                        className="btn cancel mg-4"
                        onClick={() => removeFields(index)}
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
            <button className="big-btn" onClick={addFields}>
              <img src={add} alt="img icon" className="icon" />
              <p>Add</p>
            </button>
          </div>
          <div className="button-end">
            <button className="btn submit" onClick={printContent}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
