import React from "react";
import "./style.css";
import NameDescription from "./name-description/NameDescription";

const ProfileInfo = () => {

  return (
    <section className="profile-section">
        
        <div className="avatar-container">
            <img src="../../assets/avatar-placeholder.svg" alt="Logo do Letterboxcin" />
        </div>

        <NameDescription />

        <div className="info-container">

        </div>
    </section>
  );
};

export default ProfileInfo;
