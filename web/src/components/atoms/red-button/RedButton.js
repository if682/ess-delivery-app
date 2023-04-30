import React from "react";
import "./RedButton.css";

function RedButton({ onClick, children }) {
  return (
    <button className="red-button" onClick={onClick ? onClick : () => {}}>
      {children}
    </button>
  );
}

export default RedButton;