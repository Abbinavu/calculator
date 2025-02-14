import React from "react";

const Keys = ({ label, onButtonClick }) => {
  return (
    <div
      className={`key ${label === "EQUALS" ? "equals-key" : ""}`}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </div>
  );
};

export default Keys;
