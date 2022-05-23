import React from "react";

function ContentAdd() {
  return (
    <div className="form-1">
      <div className="grid">
        <div className="grid-left">
          <p className="text-pa">Type</p>
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
          <p className="text-pa">Category</p>
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
          <p className="text-pa">Description</p>
        </div>
        <div className="grid-right">
          <input
            type="text"
            name="firstname"
            id=""
            className="input-text"
            placeholder="Description"
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
            name="firstname"
            id=""
            className="input-text"
            placeholder="$"
          />
        </div>
      </div>
      <div>
        <button className="btn cancel mg-4">Cancel</button>
        <button className="btn submit">Submit</button>
      </div>
    </div>
  );
}

export default ContentAdd;
