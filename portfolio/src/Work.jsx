import React from "react";
import Sidebar from "./Sidebar";

function Work() {
  return (
    <div className="pt-5 min-h-screen">
      <Sidebar />
      <div style={{ paddingLeft: "250px" }}>
        <h1
          className="pt-5 font-bold text-4xl"
          style={{ paddingLeft: "350px" }}
        >
          Work
        </h1>
      </div>
    </div>
  );
}

export default Work;
