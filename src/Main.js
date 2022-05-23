import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import RoutePath from "./Main/RoutePath";
// import Land from "./Main/Land";
// import Motor from "./Main/Motor";

function Main() {
  return (
    <div className="Main">
      <Header />
      {/* <Body /> */}
      {/* <Home /> */}
      {/* <Land />
      <Motor /> */}

      {/* <h1>Body</h1> */}
      <RoutePath />
      <Footer />
    </div>
  );
}

export default Main;
