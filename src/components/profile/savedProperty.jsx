import React from "react";
import ButtonAccount from "./miniComponents/button";
import MessageAccount from "./miniComponents/message";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";

import "./content.css";

const SavedProperty = () => {
  return (
    <div>
      <ProfileSectionTitle>
        <div>Saved Property</div>
        <div>Manage your subscription plans</div>
      </ProfileSectionTitle>
      <div className="content">
        <MessageAccount>You have no saved property on this page</MessageAccount>
        <ButtonAccount>ADD PROPERTY</ButtonAccount>
      </div>
    </div>
  );
};

export default SavedProperty;
