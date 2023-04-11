import React from "react";
import {Outlet} from "react-router-dom";
import Sidemenu from '../components/molecules/sidemenu/Sidemenu'
import './Layout.css'

const Layout = () => {
  return (
    <div className="fullpage-root">
      <Sidemenu/>
      <Outlet />
    </div>
  );
};

export default Layout;