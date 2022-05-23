import add from "../Icons/add.svg";
import { Link, Outlet } from "react-router-dom";
function Content() {
  return (
    <>
      <div className="sub-page">
        <h1 className="h1">CONTENTS</h1>
        <div className="text-pa mg-top">
          Use the ADD MORE button below to add "Valuable Items" and "Specified
          Portable Items". Please ensure that when adding the Valuable Items or
          the Specified valuable Item that you complete all fields
        </div>
        <Outlet />
        <div className="grid">
          <div className="grid-page">
            <Link to="Add" className="Link-2">
              <div className="big-btn ">
                <img src={add} alt="" className="icon" />
                <h3 className="h3-1">Add</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
