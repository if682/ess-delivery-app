import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

import "./RedOutlineButton.css";

function RedOutlineButton({ onClick, children }) {
  return (
    <button
      className="red-outline-button"
      onClick={onClick ? onClick : () => {}}
    >
      {children}

      <span>
        <ChevronRight size={20} />
      </span>
    </button>
  );
}

export default RedOutlineButton;