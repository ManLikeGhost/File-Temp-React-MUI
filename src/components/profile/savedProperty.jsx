import React from "react";
import ButtonAccount from "./miniComponents/button";
import MessageAccount from "./miniComponents/message";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";
import Link from "@material-ui/core/Link";

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

        <Link href="/add-listing">
          <ButtonAccount>ADD PROPERTY</ButtonAccount>
        </Link>
      </div>
    </div>
  );
};

export default SavedProperty;
