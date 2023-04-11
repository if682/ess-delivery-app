import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

import "./RedOutlineButton.css";

function RedOutlineButton({ onClick, children, width, chevron = true }) {
  return (
    <button
      className="red-outline-button"
      onClick={onClick ? onClick : () => {}}
      style={width ? { width: width } : {}}
    >
      {children}

      <span>{chevron && <ChevronRight size={20} />}</span>
    </button>
  );
}

export default RedOutlineButton;