import React, { useState } from "react";
import PageTitle from "../../components/atoms/page-title/PageTitle";
import ClientInfo from "./components/ClientInfo/ClientInfo";
import "./Mydata.css";

function MyData() {

  return (
    <div className="my-data-page-container position-relative d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <PageTitle>Minha conta</PageTitle>
      <ClientInfo/>
    </div>
  );
}

export default MyData;