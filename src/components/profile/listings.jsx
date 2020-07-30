import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAccount from "./miniComponents/button";
import MessageAccount from "./miniComponents/message";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";

import "./content.css";

const useStyles = makeStyles((theme) => ({
  number: {
    color: theme.palette.primary.main,
  },
}));
const Listings = (props) => {
  const [properties, setProperties] = useState(0);
  const classes = useStyles();
  return (
    <div className="content">
      <ProfileSectionTitle> 
            <div>Listings</div>
            <div> Manage your listings</div>
          </ProfileSectionTitle>
      <MessageAccount>
        You have <span className={classes.number}>{properties}</span> property
        listings on your page.
      </MessageAccount>
      <ButtonAccount>ADD LISTINGS</ButtonAccount>
    </div>
  );
};

export default Listings;
