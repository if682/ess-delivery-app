import React from "react";
import "./PageTitle.css";

function PageTitle({ children }) {
  return <strong className="page-title">{children}</strong>;
}

export default PageTitle;