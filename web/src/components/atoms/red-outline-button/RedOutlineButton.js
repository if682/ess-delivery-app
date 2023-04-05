import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

import "./RedOutlineButton.css";

function RedOutlineButton({ onClick, children, width, chevron = true }) {
  return (
    <button
      className="red-outline-button"
      onClick={onClick ? onClick : () => {}}
    >
      {children}

      <span style={width ? { width: width } : {}}>
        {chevron && <ChevronRight size={20} />}
      </span>
    </button>
  );
}

export default RedOutlineButton;