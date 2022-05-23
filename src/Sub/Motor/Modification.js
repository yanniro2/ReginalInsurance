import add from "../Icons/add.svg";
import { Link, Outlet } from "react-router-dom";
function Modification() {
  return (
    <>
      <div className="sub-page">
        <h1 className="h1">MODIFICATIONS/ACCESSORIES</h1>

        <Outlet />
        <div className="grid">
          <div className="grid-page">
            <Link to="ModificationAdd" className="Link-2">
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

export default Modification;
