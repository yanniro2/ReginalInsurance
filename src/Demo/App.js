// import React from "react";
// import FromDemo from "./FromDemo";
// import { useState } from "react";
// export default function App() {
//   const [data, setData] = useState("");
//   const parentToChild = () => {
//     setData("This is data from Parent Component to the Child Component");
//   };

//   const childToParent = (childData) => {
//     setData(childData);
//   };
//   return (
//     <div className="parent">
//       {/* <FromDemo parentToChild={data} /> */}
//       {/* <FromDemo childToParent={childToParent} /> */}
//       {/* <FromDemo /> */}
//       {data}
//       <div className="App">
//         {/* {data} */}
//         {/* <button primary onClick={() => parentToChild()}>
//           // Click Parent
//         </button> */}
//         <FromDemo childToParent={childToParent} />
//         {/* <FromDemo /> */}
//       </div>
//     </div>
//   );
// }
