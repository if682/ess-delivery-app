import React from "react";
import "./style.css";
import NameDescription from "./ProfileNameDescription";
import ProfileNumbers from "./ProfileNumbers";

const ProfileInfo = () => {

  return (
    <article className="profile-section">
        
        <section className="avatar-container">
            <img src="../../assets/avatar-placeholder.svg" alt="Logo do Letterboxcin" />
        </section>

        <NameDescription />

        <ProfileNumbers />
    </article>
  );
};

export default ProfileInfo;
