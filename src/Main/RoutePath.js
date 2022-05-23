import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./MainSections";
import MotorVehicle from "../Sub/Motor/Vehicle";
import MotorClient from "../Sub/Motor/Client";
import MotorImport from "../Sub/Motor/Import";
import MotorPolicy from "../Sub/Home/Policy";
import MotorClaims from "../Sub/Motor/Claims";
import MotorDriver from "../Sub/Motor/Driver";
import MotorModification from "../Sub/Motor/Modification";
import MotorModificationAdd from "../Sub/Motor/Sub/ContentAdd";
import MotorDriverAdd from "../Sub/Motor/Sub/DriverAdd";

import LandBuilding from "../Sub/Land/Building";
import LandClient from "../Sub/Land/Client";
import LandImport from "../Sub/Land/Import";
import LandPolicy from "../Sub/Land/Policy";
import LandContent from "../Sub/Land/Content";
import LandClaims from "../Sub/Land/Claims";
import LandAdd from "../Sub/Land/Sub/ContentAdd";
import Motor from "../Main/Motor";
import Land from "../Main/Land";
import Home from "../Main/Home";

import HomeBuilding from "../Sub/Home/Building";
import HomeClient from "../Sub/Home/Client";
import HomeImport from "../Sub/Home/Import";
import HomePolicy from "../Sub/Home/Policy";
import HomeContent from "../Sub/Home/Content";
import HomeClaims from "../Sub/Home/Claims";
import HomeAdd from "../Sub/Home/Sub/ContentAdd";
function RoutePath() {
  return (
    <div>
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<MainSection />} />
            <Route exact path="/Motor/*" element={<Motor />}>
              <Route index element={<MotorClient />} />
              <Route path="Client" element={<MotorClient />} />
              <Route path="Import" element={<MotorImport />} />
              <Route path="Policy" element={<MotorPolicy />} />
              <Route path="Vehicle" element={<MotorVehicle />} />
              <Route path="Driver" element={<MotorDriver />}>
                <Route path="DriverAdd" element={<MotorDriverAdd />} />
              </Route>
              <Route path="Modification" element={<MotorModification />}>
                <Route
                  path="ModificationAdd"
                  element={<MotorModificationAdd />}
                />
              </Route>
              <Route path="Claims" element={<MotorClaims />} />
            </Route>
            <Route exact path="/Land/*" element={<Land />}>
              <Route index element={<LandClient />} />
              <Route path="Client" element={<LandClient />} />
              <Route path="Import" element={<LandImport />} />
              <Route path="Policy" element={<LandPolicy />} />
              <Route path="Building" element={<LandBuilding />} />
              <Route path="Content" element={<LandContent />}>
                <Route path="Add" element={<LandAdd />} />
              </Route>
              <Route path="Claims" element={<LandClaims />} />
            </Route>
            <Route exact path="/Home/*" element={<Home />}>
              <Route index element={<HomeClient />} />
              <Route path="Client" element={<HomeClient />} />
              <Route path="Import" element={<HomeImport />} />
              <Route path="Policy" element={<HomePolicy />} />
              <Route path="Building" element={<HomeBuilding />} />
              <Route path="Content" element={<HomeContent />}>
                <Route path=":Add" element={<HomeAdd />} />
              </Route>
              <Route path="Claims" element={<HomeClaims />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default RoutePath;
