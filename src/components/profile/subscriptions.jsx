import React from "react";
import ButtonAccount from "./miniComponents/button";
import MessageAccount from "./miniComponents/message";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";

import "./content.css";

const Subscriptions = () => {
  return (
    <div>
      <ProfileSectionTitle>
        <div>Subscriptions</div>
        <div>Manage your subscription plans</div>
      </ProfileSectionTitle>
      <div className="content">
        <MessageAccount>
          You have no subscription plan on your page.
        </MessageAccount>
        <ButtonAccount>VIEW PLANS</ButtonAccount>
      </div>
    </div>
  );
};

export default Subscriptions;
