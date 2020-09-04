import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
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
  // const [properties, setProperties] = useState(0);
  const properties = 0;
  const classes = useStyles();
  return (
    <div>
      <ProfileSectionTitle>
        <div>Listings</div>
        <div> Manage your listings</div>
      </ProfileSectionTitle>
      <div className="content">
        <MessageAccount>
          You have <span className={classes.number}>{properties}</span> property
          listings on your page.
        </MessageAccount>
        <Link href="/add-listing">
          <ButtonAccount>ADD LISTINGS</ButtonAccount>
        </Link>
      </div>
    </div>
  );
};

export default Listings;
