import React from "react";
import "./Siderow.css";

function SideRow({ title, Icon, selected }) {
  return (
    <div className={`siderow ${selected && "selected"}`}>
      <Icon className="siderowicon" />
      <h3>{title}</h3>
    </div>
  );
}

export default SideRow;
